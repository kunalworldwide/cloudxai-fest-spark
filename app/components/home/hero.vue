<template>
  <div class="hero-main-conatiner" style="position: relative; overflow: hidden">
    <NavBar />
    <div class="hero-background">
      <v-container
        fluid
        class="hero-carousel pa-0"
        style="z-index: 10; height: 100%; width: 100%"
      >
        <v-container class="pa-0" fluid style="height: 100%">
          <div
            class="d-flex text-white justify-center ma-0 pa-0 hero-slide-container"
            style="height: 100%"
          >
            <div class="hero-slide-content-main">
              <div class="d-flex flex-column ga-4 hero-slide-content">
                <v-chip
                  variant="flat"
                  color="rgba(255,255,255,0.2)"
                  size="x-large"
                  class="text-subtitle-1 align-self-start date-chip px-6"
                >
                  <v-icon start size="20">mdi-calendar-blank-outline</v-icon>
                  March 14, 2026
                </v-chip>
                <h1 class="hero-title">CLOUDxAI <span>Conference</span></h1>

                <div class="hero-slide-actions">
                  <div
                    style="
                      display: flex;
                      gap: 16px;
                      align-items: center;
                      justify-content: flex-start;
                      flex-wrap: wrap;
                    "
                  >
                    <!-- <v-btn
                      color="white"
                      variant="flat"
                      size="x-large"
                      class="text-none rounded-xl register-btn"
                      append-icon="mdi-arrow-top-right"
                      width="max-content"
                      to="/register"
                    >
                      Register
                    </v-btn> -->
                    <div
                      style=""
                      ref="konfhubWidget"
                      @click="trackRedditClick"
                    ></div>
                    <!-- <v-btn
                      color="white"
                      variant="outlined"
                      size="large"
                      height="48px"
                      class="text-none"
                      append-icon="mdi-arrow-top-right"
                      width="max-content"
                      href="https://docs.google.com/forms/d/e/1FAIpQLScNjTHO5UeHCI5pcDEMD-FXBHa7PG8auuOS63x6Tmkx7konaQ/viewform"
                      target="_blank"
                    >
                      Call For Papers
                    </v-btn> -->
                  </div>

                  <div class="hero-location d-flex align-center">
                    <v-icon size="20" class="mr-2"
                      >mdi-map-marker-outline</v-icon
                    >
                    <span class="text-body-2">
                      <a
                        target="_blank"
                        href="https://maps.app.goo.gl/sKCE49noeMskaWmW7"
                        style="color: white; text-decoration: none"
                        >Nimhans Convention Center, Bengaluru
                        <v-icon size="20" class="ml-2">mdi-open-in-new</v-icon>
                      </a>
                    </span>
                  </div>
                </div>
                <div class="footer-content">
                  <p class="text-body-2 text-uppercase opacity-70 mb-2">
                    Powered by
                  </p>
                  <a
                    href="https://cast.ai/"
                    target="_blank"
                    class="footer-value"
                  >
                    <v-img
                      src="/images/cast-ai.svg"
                      alt="Cast AI"
                      class="footer-value-image"
                      cover
                      width="120px"
                    ></v-img>
                  </a>
                  <!-- <h2 class="text-h4 footer-value">
                    Cast AI
                  </h2> -->
                </div>
              </div>
            </div>
            <div class="text-center pa-0 hero-image-conatiner">
              <div class="hero-speakers-grid">
                <div
                  v-for="speaker in speakers"
                  :key="speaker.name"
                  class="hero-speaker-card"
                >
                  <div class="hero-speaker-image-container">
                    <img
                      :src="
                        speaker.image
                          ? `/images/speakers/${speaker.image}`
                          : '/images/defaultAvatar.png'
                      "
                      :alt="speaker.name"
                      class="hero-speaker-image"
                    />
                    <div class="linear-gradient-background"></div>
                    <div class="hero-speaker-info">
                      <h3 class="hero-speaker-name">{{ speaker.name }}</h3>
                      <p class="hero-speaker-role">{{ speaker.role }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <ClientOnly>
                <video
                  autoplay
                  loop
                  muted
                  playsinline
                  class="pa-0"
                  poster="/images/default-video.webp"
                  style="width: 100%; height: 100%; object-fit: cover"
                >
                  <source src="@/assets/videos/hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </ClientOnly> -->
            </div>
            <HomeCountDownCopy />
          </div>
        </v-container>
      </v-container>

      <div class="social-icons-container">
        <v-btn
          icon
          size="small"
          color="transparent"
          variant="text"
          href="https://www.linkedin.com/company/cloud-x-ai/"
          target="_blank"
        >
          <v-icon size="32" color="white">mdi-linkedin</v-icon>
        </v-btn>

        <v-btn
          icon
          size="small"
          variant="text"
          color="transparent"
          href="https://x.com/cloudxaiconf"
          target="_blank"
        >
          <img
            src="/images/icon/x.svg"
            alt="Twitter"
            class="icon-img"
            style="width: 24px; height: 24px"
          />
        </v-btn>
        <!-- <v-btn
                  icon
                  size="small"
                  :color="props.socialLogoColor"
                  href="https://instagram.com"
                  target="_blank"
                >
                  <v-icon>mdi-instagram</v-icon>
                </v-btn> -->
      </div>
    </div>
    <!-- <div class="d-flex align-end pa-0 background-svg" style="width: 320px; height:120%; background-color: #1e3a8a; position:absolute; right:-100px; bottom:-40px">
       

      </div> -->
  </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";
import speakersData from "~/assets/data/speakers.json";

const speakers = ref(speakersData.filter((speaker) => speaker.isHeroFeature));

const konfhubWidget = ref(null);

const { proxy } = useScriptRedditPixel();

const trackRedditClick = () => {
  proxy.rdt("track", "ViewContent", {
    conversionId: 'Register Now - clicked'
  });
};

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://widget.konfhub.com/widget.js";
  script.setAttribute("button_id", "btn_10d3bdf3179f");
  if (konfhubWidget.value) {
    konfhubWidget.value.appendChild(script);
  }
});
</script>

<style scoped lang="scss">
.hero-main-conatiner {
  background-image: url("../../assets/images/bgg-hero2.0.webp");
  background-size: cover;
  background-position: center;
}
.hero-background {
  padding: 60px;
  padding-top: 0px;
}

.social-icons-container {
  background-color: rgb(52, 106, 255);
  position: absolute;
  right: 0;
  top: 140px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 60px;
}

.hero-carousel {
  position: relative;
}

.hero-slide-container {
  border: 1px solid #296fb9;
  border-radius: 12px !important;
  padding: 180px 0 !important;

  .hero-slide-content-main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 50%;
    padding: 16px;
    padding-left: 60px;

    .hero-slide-content {
      // padding-left: calc(100% - 650px);
      .date-chip {
        margin-bottom: 16px;
      }

      .footer-content {
        margin-top: 40px;
      }

      .hero-slide-actions {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 32px;
      }

      & > h1 {
        margin: 0;
        // margin-right: -300px;
        z-index: 1;
        font-size: 5rem;
        font-weight: 300;
        line-height: 1;
        letter-spacing: -0.015625em;
        font-family: "Roboto", sans-serif;
        text-transform: none;
        font-weight: 500;
        & > span {
          color: rgb(65, 114, 249);
        }
      }
    }
  }

  .hero-image-conatiner {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
  }

  .hero-speakers-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    padding: 24px;
    align-content: center;
  }

  .hero-speaker-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease;
    max-width: 264px;
    position: relative;

    // &:hover {
    //   .linear-gradient-background, .hero-speaker-info{
    //     opacity: 1;
    //   }
    // }
  }

  .hero-speaker-image-container {
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    position: relative;
  }

  .hero-speaker-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .hero-speaker-info {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.3),
      transparent
    );
    opacity: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: left;
    width: 100%;
    height: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .hero-speaker-name {
    font-size: 16px;
    font-weight: 600;
    color: rgb(59, 159, 253);
    letter-spacing: 0.3px;
  }

  .hero-speaker-role {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
    margin: 0;
    line-height: 1.3;
  }
}

@media (min-width: 1440px) {
  .hero-slide-container {
    .hero-slide-content-main {
      padding-left: 85px;
      .hero-slide-content {
        & > h1 {
          font-size: 6rem;
        }
      }
    }
  }
}

@media (max-width: 1080px) {
  .hero-main-conatiner {
    height: max-content;
  }
  .hero-background {
    height: max-content;
  }
  .hero-slide-container {
    flex-direction: column;
    align-items: center;
    padding: 0 !important;

    .hero-slide-content-main {
      justify-content: flex-start;

      width: 100%;
      padding: 128px 24px;

      .hero-slide-content {
        padding-left: 0;
        .date-chip {
          margin-bottom: 0px;
        }
        .hero-slide-actions {
          margin-top: 10px;
        }

        .footer-content {
          margin-top: 0px;
        }

        & > h1 {
          margin-right: 0px;
          z-index: 1;
          font-size: 4rem;
        }
      }
    }
    .hero-image-conatiner {
      width: 100%;
      .hero-speakers-grid {
        padding-bottom: 180px;
        gap: 16px;
      }
      .hero-speaker-name {
        font-size: 12px;
      }
      .hero-speaker-role {
        font-size: 10px;
      }
    }
  }
}

@media (max-width: 768px) {
  .background-svg {
    display: none !important;
  }
  .hero-background {
    padding: 16px;
    padding-top: 0px;
  }

  .social-icons-container {
    display: none;
  }

  .hero-slide-content {
    & > h1 {
      font-size: 2.5rem !important;
    }

    .footer-value {
      font-size: 1.5rem !important;
    }
  }
}

@media (max-width: 480px) {
  .hero-slide-container {
    .hero-slide-content-main {
      padding: 64px 24px;
    }
    .hero-speaker-info {
      padding: 8px;
    }
  }

  .hero-slide-content {
    & > h1 {
      font-size: 2.25rem !important;
    }

    .footer-value {
      font-size: 1.25rem !important;
    }
  }
}

// @media (max-height: 852px) {
//   .hero-main-conatiner {
//     height: 900px !important;
//   }
//   .hero-background {
//     height: 820px;
//   }
// }

.hero-location {
  color: rgba(255, 255, 255, 0.9);
}

.hero-carousel .v-carousel__controls {
  bottom: 24px;
}

.register-btn {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.6),
      0 0 20px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2);
    animation: bounce 0.6s ease;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(1.08);
  }
  30% {
    transform: scale(1.15);
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(1.1);
  }
}
</style>
