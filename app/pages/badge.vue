<template>
  <v-main class="enterprise-layout">
    <v-container fluid class="fill-height pa-0">
      <v-row no-gutters class="fill-height">
        <!-- Left Sidebar: Configuration Panel -->
        <v-col cols="12" md="4" lg="3" class="config-panel border-e">
          <div class="d-flex flex-column h-100">
            <!-- Header -->
            <div class="px-6 py-5 border-b bg-white">
              <div class="d-flex align-center gap-2 mb-1">
                <span
                  class="text-subtitle-2 font-weight-bold tracking-wide text-uppercase text-medium-emphasis"
                >
                  Badge Generator
                </span>
              </div>
              <h1 class="text-h5 font-weight-bold text-slate-900">
                Configuration
              </h1>
            </div>

            <!-- Scrollable Controls -->
            <div class="flex-grow-1 overflow-y-auto px-6 py-6 bg-slate-50">
              <!-- Section: Upload -->
              <div class="mb-8">
                <label
                  class="text-caption font-weight-bold text-uppercase text-medium-emphasis mb-3 d-block"
                >
                  Source Image
                </label>
                <v-card
                  @click="triggerFileUpload"
                  class="upload-dropzone rounded-lg border-dashed d-flex align-center justify-center cursor-pointer"
                  :class="{ uploaded: image }"
                  height="120"
                  variant="flat"
                  border
                >
                  <div class="text-center">
                    <v-icon
                      :icon="image ? 'mdi-check-circle' : 'mdi-tray-arrow-up'"
                      :color="image ? 'success' : 'medium-emphasis'"
                      size="24"
                      class="mb-2"
                    >
                    </v-icon>
                    <div
                      class="text-body-2 font-weight-medium"
                      :class="image ? 'text-slate-900' : 'text-medium-emphasis'"
                    >
                      {{ image ? "Image Loaded" : "Upload Image" }}
                    </div>
                    <div v-if="!image" class="text-caption text-disabled mt-1">
                      PNG, JPG up to 5MB
                    </div>
                  </div>
                  <input
                    ref="fileInput"
                    type="file"
                    accept="image/*"
                    @change="upload"
                    hidden
                  />
                </v-card>
                <v-btn
                  v-if="image"
                  block
                  variant="tonal"
                  size="small"
                  color="error"
                  class="mt-2"
                  @click="image = null"
                >
                  Remove Image
                </v-btn>
              </div>

              <v-divider class="mb-8"></v-divider>

              <!-- Section: Properties -->
              <div
                class="mb-8"
                :class="{ 'opacity-50 pointer-events-none': !image }"
              >
                <div class="d-flex align-center justify-space-between mb-4">
                  <label
                    class="text-caption font-weight-bold text-uppercase text-medium-emphasis"
                  >
                    Properties
                  </label>
                  <v-btn
                    v-if="image"
                    variant="text"
                    density="compact"
                    size="small"
                    color="primary"
                    @click="resetImageSettings"
                  >
                    Reset
                  </v-btn>
                </div>

                <!-- Scale -->
                <div class="mb-5">
                  <div class="d-flex justify-space-between mb-1">
                    <span class="text-caption text-slate-700">Scale</span>
                    <span
                      class="text-caption font-weight-mono text-medium-emphasis"
                      >{{ imageSettings.zoom.toFixed(1) }}x</span
                    >
                  </div>
                  <v-slider
                    v-model="imageSettings.zoom"
                    :min="0.1"
                    :max="3"
                    :step="0.1"
                    @update:model-value="draw"
                    density="compact"
                    thumb-size="12"
                    track-size="2"
                    color="primary"
                    hide-details
                  ></v-slider>
                </div>

                <!-- Position X -->
                <div class="mb-5">
                  <div class="d-flex justify-space-between mb-1">
                    <span class="text-caption text-slate-700">Position X</span>
                    <span
                      class="text-caption font-weight-mono text-medium-emphasis"
                      >{{ imageSettings.x }}px</span
                    >
                  </div>
                  <v-slider
                    v-model="imageSettings.x"
                    :min="-200"
                    :max="200"
                    :step="5"
                    @update:model-value="draw"
                    density="compact"
                    thumb-size="12"
                    track-size="2"
                    color="primary"
                    hide-details
                  ></v-slider>
                </div>

                <!-- Position Y -->
                <div class="mb-5">
                  <div class="d-flex justify-space-between mb-1">
                    <span class="text-caption text-slate-700">Position Y</span>
                    <span
                      class="text-caption font-weight-mono text-medium-emphasis"
                      >{{ imageSettings.y }}px</span
                    >
                  </div>
                  <v-slider
                    v-model="imageSettings.y"
                    :min="-200"
                    :max="200"
                    :step="5"
                    @update:model-value="draw"
                    density="compact"
                    thumb-size="12"
                    track-size="2"
                    color="primary"
                    hide-details
                  ></v-slider>
                </div>
              </div>

              <v-divider class="mb-8"></v-divider>

              <!-- Section: Shape -->
              <div class="mb-8">
                <label
                  class="text-caption font-weight-bold text-uppercase text-medium-emphasis mb-3 d-block"
                >
                  Shape Mask
                </label>
                <v-btn-toggle
                  v-model="shapeData"
                  @update:model-value="changeShape"
                  mandatory
                  density="compact"
                  color="primary"
                  variant="outlined"
                  divided
                  class="w-100 rounded-lg"
                >
                  <v-btn
                    value="square"
                    class="flex-grow-1 text-capitalize text-body-2"
                    >Square</v-btn
                  >
                  <v-btn
                    value="circle"
                    class="flex-grow-1 text-capitalize text-body-2"
                    >Circle</v-btn
                  >
                </v-btn-toggle>
              </div>
            </div>

            <div class="pa-6" v-if="image">
              <v-btn
                prepend-icon="mdi-download"
                color="#002163"
                variant="flat"
                rounded="xl"
                size="large"
                @click="download"
                class="text-capitalize px-6 mr-2 mb-2"
              >
                Export Badge
              </v-btn>
              <v-btn
                prepend-icon="mdi-share-variant"
                color="#002163"
                variant="outlined"
                rounded="xl"
                size="large"
                @click="showShareDialog = true"
                class="text-capitalize px-6 mb-2"
              >
                Share
              </v-btn>
            </div>

            <!-- Footer -->
            <div class="pa-4 border-t bg-white text-center">
              <span class="text-caption text-medium-emphasis">
                Local processing only. No data uploads.
              </span>
            </div>
          </div>
        </v-col>

        <!-- Right Stage: Preview Canvas -->
        <v-col
          cols="12"
          md="8"
          lg="9"
          class="preview-stage position-relative bg-slatish"
        >
          <!-- Toolbar -->

          <!-- Centered Canvas Stage -->
          <div
            class="d-flex align-center justify-center h-100 pa-8 overflow-hidden"
          >
            <div class="canvas-wrapper elevation-0 rounded-lg overflow-hidden">
              <canvas
                ref="canvasRef"
                :class="[
                  'd-block',
                  shapeData === 'circle' ? 'circle-clip' : 'rounded-0',
                ]"
                style="max-height: 80vh; max-width: 100%; object-fit: contain"
              ></canvas>

              <!-- Empty State Overlay -->
              <div
                v-if="!image && isInitialized"
                class="empty-stage-overlay d-flex align-center justify-center"
              >
                <div class="text-center">
                  <v-icon
                    icon="mdi-image-off-outline"
                    size="48"
                    color="grey-lighten-2"
                    class="mb-3"
                  ></v-icon>
                  <div class="text-body-2 text-medium-emphasis">
                    Preview area empty
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Share Dialog -->
    <v-dialog v-model="showShareDialog" max-width="600" persistent>
      <v-card rounded="xl">
        <v-card-title class="d-flex align-center justify-space-between">
          <span class="text-h6">Share Badge on Social Media</span>
          <v-btn icon variant="text" @click="showShareDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-6">
          <div class="mb-4">
            <label
              class="text-caption font-weight-bold text-uppercase text-medium-emphasis mb-2 d-block"
            >
              Post Content
            </label>
            <v-textarea
              v-model="shareText"
              placeholder="I just created my CLOUDxAI Conference 2026 badge! 🎉 Join me at the meeting ground for DevOps & AI engineers building the future of intelligent infrastructure. #CLOUDxAI #DevOps #AI #Conference"
              rows="4"
              variant="outlined"
              density="comfortable"
              auto-grow
            ></v-textarea>
          </div>
          <div class="text-caption text-medium-emphasis mb-4">
            <v-icon size="16" class="mr-1">mdi-information-outline</v-icon>
            For LinkedIn & Twitter: Share text only. Download the badge first to
            add the image to your post. Web Share supports direct image sharing
            on supported devices.
          </div>
          <div class="d-flex gap-3">
            <v-btn
              prepend-icon="mdi-linkedin"
              color="#0077b5"
              variant="flat"
              rounded="xl"
              :disabled="!image"
              @click="shareOnLinkedIn"
              class="text-capitalize mr-2 mb-2"
            >
              LinkedIn
            </v-btn>
            <v-btn
              prepend-icon="mdi-twitter"
              color="#1DA1F2"
              variant="flat"
              rounded="xl"
              :disabled="!image"
              @click="shareOnTwitter"
              class="text-capitalize mr-2 mb-2"
            >
              Twitter / X
            </v-btn>
            <v-btn
              v-if="supportsWebShare"
              prepend-icon="mdi-share-variant"
              color="grey-darken-1"
              variant="outlined"
              rounded="xl"
              :loading="isSharing"
              :disabled="!image || isSharing"
              @click="shareViaWebAPI"
              class="text-capitalize mr-2 mb-2"
            >
              Share via Web Share
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-main>

  <HomeCountDown />
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import gdgImage from "@/assets/images/badge.png";
import { useDisplay } from "vuetify";

const canvasRef = ref(null);
const fileInput = ref(null);
const shapeData = ref("square");
const image = ref(null);
const banner = ref(null);
const ctx = ref(null);
const isInitialized = ref(false);
const showShareDialog = ref(false);
const isSharing = ref(false);
const shareText = ref(
  "I just created my CLOUDxAI Conference 2026 badge! 🎉\n\nJoin me at the meeting ground for DevOps & AI engineers building the future of intelligent infrastructure.\n\nMore info: https://cloudconf.ai\n\n#CLOUDxAI #DevOps #AI #Conference\n\n@cloud-x-ai"
);

// Check if Web Share API is supported
const supportsWebShare = computed(() => {
  if (typeof window === "undefined") return false;
  return typeof navigator !== "undefined" && "share" in navigator;
});

const imageSettings = ref({
  zoom: 1,
  x: 0,
  y: 0,
});

onMounted(() => {
  initializeCanvas();
});

const initializeCanvas = () => {
  if (!canvasRef.value || isInitialized.value) return;

  ctx.value = canvasRef.value.getContext("2d");

  banner.value = new Image();
  banner.value.crossOrigin = "anonymous";
  banner.value.onload = () => {
    isInitialized.value = true;
    draw();
  };
  banner.value.onerror = (error) => console.error("Banner load failed", error);
  banner.value.src = gdgImage;
};

const upload = (e) => {
  if (e?.target?.files?.[0]) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      image.value = new Image();
      image.value.crossOrigin = "anonymous";
      image.value.onload = () => {
        resetImageSettings();
        draw();
      };
      image.value.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const triggerFileUpload = () => fileInput.value.click();

const resetImageSettings = () => {
  imageSettings.value = { zoom: 1, x: 0, y: 0 };
  draw();
};

const draw = () => {
  if (!canvasRef.value || !ctx.value || !isInitialized.value) return;

  setCanvasDimensions();
  ctx.value.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);

  // Draw solid white background
  ctx.value.fillStyle = "#ffffff";
  ctx.value.fillRect(0, 0, canvasRef.value.width, canvasRef.value.height);

  if (image.value) drawImage();
  drawBanner();
  applyShape();
};

const setCanvasDimensions = () => {
  canvasRef.value.width = 2500;
  canvasRef.value.height = 2500;
};

const drawImage = () => {
  if (!image.value) return;

  const hRatio = canvasRef.value.width / image.value.width;
  const vRatio = canvasRef.value.height / image.value.height;
  const ratio = Math.min(hRatio, vRatio) * imageSettings.value.zoom;

  const newWidth = image.value.width * ratio;
  const newHeight = image.value.height * ratio;

  // Scale position sensitivity
  const x = (canvasRef.value.width - newWidth) / 2 + imageSettings.value.x * 5;
  const y =
    (canvasRef.value.height - newHeight) / 2 + imageSettings.value.y * 5;

  ctx.value.drawImage(image.value, x, y, newWidth, newHeight);
};

const drawBanner = () => {
  if (!banner.value || !isInitialized.value) return;
  const bannerHeight =
    (banner.value.height / banner.value.width) * canvasRef.value.width;
  ctx.value.drawImage(
    banner.value,
    0,
    0,
    banner.value.width,
    banner.value.height,
    0,
    canvasRef.value.height - bannerHeight,
    canvasRef.value.width,
    bannerHeight
  );
};

const applyShape = () => {
  if (shapeData.value === "circle") {
    ctx.value.globalCompositeOperation = "destination-in";
    ctx.value.beginPath();
    ctx.value.arc(
      canvasRef.value.width / 2,
      canvasRef.value.height / 2,
      Math.min(canvasRef.value.width, canvasRef.value.height) / 2,
      0,
      Math.PI * 2
    );
    ctx.value.closePath();
    ctx.value.fill();
    ctx.value.globalCompositeOperation = "source-over";
  }
};

const changeShape = (type) => {
  shapeData.value = type;
  draw();
};

const download = () => {
  if (!canvasRef.value) return;
  try {
    const a = document.createElement("a");
    a.download = "cloudxaiconf-badge.png";
    a.href = canvasRef.value.toDataURL("image/png");
    a.click();
  } catch (error) {
    console.error("Download failed:", error);
  }
};

// Convert canvas to blob
const canvasToBlob = () => {
  return new Promise((resolve, reject) => {
    if (!canvasRef.value) {
      reject(new Error("Canvas not available"));
      return;
    }
    canvasRef.value.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Failed to convert canvas to blob"));
        }
      },
      "image/png",
      1.0
    );
  });
};

// Share on LinkedIn
const shareOnLinkedIn = () => {
  if (!image.value || !canvasRef.value) return;

  // Encode the text
  const encodedText = encodeURIComponent(shareText.value);
  // Use LinkedIn feed share URL format
  const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodedText}`;

  // Open in new tab
  window.open(linkedInUrl, "_blank");
  showShareDialog.value = false;
};

// Share on Twitter/X
const shareOnTwitter = () => {
  if (!image.value || !canvasRef.value) return;

  // Encode the text
  const encodedText = encodeURIComponent(shareText.value);
  // Twitter Web Intent
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;

  // Open in new tab
  window.open(twitterUrl, "_blank");
  showShareDialog.value = false;
};

// Share via Web Share API (supports native sharing with images)
const shareViaWebAPI = async () => {
  if (!image.value || !canvasRef.value) return;

  if (!navigator.share) {
    alert("Web Share API is not supported in your browser.");
    return;
  }

  isSharing.value = true;
  try {
    const blob = await canvasToBlob();
    const file = new File([blob], "cloudxaiconf-badge.png", {
      type: "image/png",
    });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: "CLOUDxAI Conference 2026 Badge",
        text: shareText.value,
        files: [file],
      });
      showShareDialog.value = false;
    } else {
      // Fallback: share without file
      await navigator.share({
        title: "CLOUDxAI Conference 2026 Badge",
        text: shareText.value,
        url: window.location.href,
      });
      showShareDialog.value = false;
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error("Web Share failed:", error);
      alert("Failed to share. Please try again.");
    }
  } finally {
    isSharing.value = false;
  }
};

// SEO
useHead({
  title: "Badge Generator - CLOUDxAI Conference 2026 Bengaluru",
  titleTemplate: "Badge Generator - CLOUDxAI Conference 2026 Bengaluru",
  description:
    "CloudxAI 2026 Bengaluru: The meeting ground for DevOps & AI engineers building the future of intelligent infrastructure.",
  keywords:
    "conference, event, CLOUDxAI, bengaluru, Developers, AI, Agents, India, Conference",
  author: "TechFerment",
  robots: "index, follow",
  googlebot: "index, follow",
  bingbot: "index, follow",
  yandexbot: "index, follow",
  ogTitle: "Badge Generator - CLOUDxAI Conference 2026 Bengaluru",
  ogDescription:
    "CloudxAI 2026 Bengaluru: The meeting ground for DevOps & AI engineers building the future of intelligent infrastructure.",
  ogImage:
    "https://raw.githubusercontent.com/TechFerment/images/refs/heads/main/cxaixcover.jpg",
  ogUrl: "https://cloudconf.ai/",
  ogType: "website",
  ogLocale: "en_US",
  ogSiteName: "Badge Generator - CLOUDxAI Conference 2026 Bengaluru",
  meta: [
    {
      name: "description",
      content:
        "CloudxAI 2026 Bengaluru: The meeting ground for DevOps & AI engineers building the future of intelligent infrastructure.",
    },
    {
      name: "keywords",
      content:
        "conference, event, CLOUDxAI, bengaluru, Developers, AI, Agents, India, Conference",
    },
    { name: "author", content: "TechFerment" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "bingbot", content: "index, follow" },
    { name: "yandexbot", content: "index, follow" },
    // Open Graph tags
    {
      property: "og:title",
      content: "Badge Generator - CLOUDxAI Conference 2026 Bengaluru",
    },
    {
      property: "og:description",
      content:
        "CloudxAI 2026 Bengaluru: The meeting ground for DevOps & AI engineers building the future of intelligent infrastructure.",
    },
    {
      property: "og:image",
      content:
        "https://raw.githubusercontent.com/TechFerment/images/refs/heads/main/cxaixcover.jpg",
    },
    { property: "og:image:width", content: "1920" },
    { property: "og:image:height", content: "1080" },
    {
      property: "og:image:alt",
      content: "Badge Generator - CLOUDxAI Conference 2026 Bengaluru Banner",
    },
    { property: "og:url", content: "https://cloudconf.ai/" },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "en_US" },
    {
      property: "og:site_name",
      content: "Badge Generator - CLOUDxAI Conference 2026 Bengaluru",
    },
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Badge Generator - CLOUDxAI Conference 2026 Bengaluru",
    },
    {
      name: "twitter:description",
      content:
        "CloudxAI 2026 Bengaluru: The meeting ground for DevOps & AI engineers building the future of intelligent infrastructure.",
    },
    {
      name: "twitter:image",
      content:
        "https://raw.githubusercontent.com/TechFerment/images/refs/heads/main/cxaixcover.jpg",
    },
    {
      name: "twitter:image:alt",
      content: "Badge Generator - CLOUDxAI Conference 2026 Bengaluru Banner",
    },
    { name: "twitter:site", content: "@cloudxaiconf" },
    { name: "twitter:creator", content: "@cloudxaiconf" },
    // LinkedIn specific
    {
      property: "og:image:secure_url",
      content:
        "https://raw.githubusercontent.com/TechFerment/images/refs/heads/main/cxaixcover.jpg",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

<style scoped>
/* Enterprise Colors */
.text-slate-900 {
  color: #0f172a !important;
}

.bg-slate-50 {
  background-color: #f8fafc !important;
}

.bg-slatish {
  background-color: #f1f5f9;
  background-image: linear-gradient(45deg, #e2e8f0 25%, transparent 25%),
    linear-gradient(-45deg, #e2e8f0 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e2e8f0 75%),
    linear-gradient(-45deg, transparent 75%, #e2e8f0 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}

.enterprise-layout {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

.upload-dropzone {
  border: 1px dashed rgba(0, 0, 0, 0.12) !important;
  transition: all 0.2s ease;
}

.upload-dropzone:hover {
  border-color: var(--v-theme-primary) !important;
  background-color: rgba(var(--v-theme-primary), 0.04) !important;
}

.upload-dropzone.uploaded {
  border-style: solid !important;
  border-color: rgba(0, 0, 0, 0.12) !important;
}

.canvas-wrapper {
  /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06) !important; */
  position: relative;
}

.empty-stage-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  z-index: 10;
}

.circle-clip {
  border-radius: 50% !important;
}

/* Scrollbar refine */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}
</style>