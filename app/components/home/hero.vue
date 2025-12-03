<template>
  <div
    class="hero-main-conatiner"
    style="position: relative; overflow: hidden; height: 100svh"
  >
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
                <h1 class=" ">CLOUDxAI Conference</h1>

                <div class="hero-slide-actions">
                  <v-btn
                    color="white"
                    variant="flat"
                    size="x-large"
                    class="text-none rounded-xl register-btn"
                    append-icon="mdi-arrow-top-right"
                    width="max-content"
                    to="/register"
                  >
                    Register
                  </v-btn>
                  <div class="hero-location d-flex align-center">
                    <v-icon size="20" class="mr-2"
                      >mdi-map-marker-outline</v-icon
                    >
                    <span class="text-body-1">
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
              <ClientOnly>
                <video
                  autoplay
                  loop
                  muted
                  playsinline
                  class="pa-0"
                  poster="/images/default-video.png"
                  style="width: 100%; height: 100%; object-fit: cover"
                >
                  <source src="@/assets/videos/hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </ClientOnly>
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
</script>

<style scoped lang="scss">
.hero-main-conatiner {
  background-image: url("../../assets/images/bgg-hero.webp");
  background-size: cover;
  background-position: center;
}
.hero-background {
  height: calc(100svh - 64px);
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
  .hero-slide-content-main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid #296fb9;
    // border-radius: 10px;
    border-top-left-radius: 10px !important;
    border-bottom-left-radius: 10px !important;
    border-right: none;
    height: 100%;
    width: 45%;
    padding: 16px;
    padding-left: 85px;

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
        font-size: 6rem;
        font-weight: 300;
        line-height: 1;
        letter-spacing: -0.015625em;
        font-family: "Roboto", sans-serif;
        text-transform: none;
        font-weight: 500;
      }
    }
  }

  .hero-image-conatiner {
    width: 55%;
    height: 100%;
    border-top-right-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
    overflow: hidden;
    position: relative;
  }
}

@media (max-width: 1080px) {
  .hero-slide-container {
    flex-direction: column;
    align-items: center;

    .hero-slide-content-main {
      border-right: 1px solid #296fb9;
      justify-content: flex-start;

      border-bottom: none;
      border-bottom-left-radius: 0px !important;
      border-top-right-radius: 10px !important;
      width: 100%;
      height: 50%;
      padding: 24px;

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
      height: 50%;
      border-top-right-radius: 0px !important;
      border-bottom-right-radius: 10px !important;
      border-bottom-left-radius: 10px !important;
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
  .hero-slide-content {
    & > h1 {
      font-size: 2.25rem !important;
    }

    .footer-value {
      font-size: 1.25rem !important;
    }
  }
}

@media (max-height: 852px) {
  .hero-background {
    height: 820px;
  }
}

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
