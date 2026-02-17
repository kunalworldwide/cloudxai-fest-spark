<template>
  <section id="speakers" class="event-agendas">
    <div class="event-agendas__container">
      <div class="event-agendas__label">
        <span class="event-agendas__label-rule"></span>
        <span class="event-agendas__label-text">EVENT SPEAKERS</span>
      </div>

      <h1 class="event-agendas__headline">
        MEET OUR <span>AMAZING <br />SPEAKERS</span>
      </h1>

      <div class="event-agendas__marquee-wrapper">
        <div class="event-agendas__marquee" >
          <div class="event-agendas__marquee-content" :style="{animationPlayState: showSpeakerDialog ? 'paused !important' : 'running'}">
            <div
              v-for="speaker in featureSpeakers"
              :key="speaker.name"
              class="event-agendas__card"
            >
              <div class="event-agendas__card-inner" @click="openSpeakerDialog(speaker)">
                <div class="event-agendas__image-container">
                  <img
                    :src="speaker.image ? `/images/speakers/${speaker.image}` : '/images/defaultAvatar.png'"
                    :alt="speaker.name"
                    class="event-agendas__image"
                  />
                  <!-- Social Media Panel (visible on hover) -->
                  <div class="event-agendas__social-panel">
                    <a
                      v-for="social in speaker.socials"
                      :key="social.name"
                      :href="social.url"
                      class="event-agendas__social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <v-icon size="20" :color="social.color || '#1e3a8a'">{{
                        social.icon
                      }}</v-icon>
                    </a>
                  </div>
                </div>
                <h3 class="event-agendas__name">{{ speaker.name }}</h3>
                <p class="event-agendas__role">{{ speaker.role }}</p>
              </div>
            </div>
          </div>
          <div class="event-agendas__marquee-content" :style="{animationPlayState: showSpeakerDialog ? 'paused !important' : 'running'}" aria-hidden="true">
            <div
              v-for="speaker in featureSpeakers"
              :key="`duplicate-${speaker.name}`"
              class="event-agendas__card"
            >
              <div class="event-agendas__card-inner" @click="openSpeakerDialog(speaker)">
                <div class="event-agendas__image-container">
                  <img
                    :src="speaker.image ? `/images/speakers/${speaker.image}` : '/images/defaultAvatar.png'"
                    :alt="speaker.name"
                    class="event-agendas__image"
                  />
                  <div class="event-agendas__social-panel">
                    <a
                      v-for="social in speaker.socials"
                      :key="social.name"
                      :href="social.url"
                      class="event-agendas__social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <v-icon size="20" :color="social.color || '#1e3a8a'">{{
                        social.icon
                      }}</v-icon>
                    </a>
                  </div>
                </div>
                <h3 class="event-agendas__name">{{ speaker.name }}</h3>
                <p class="event-agendas__role">{{ speaker.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-10">
        <v-btn rounded="xl" variant="text" append-icon="mdi-arrow-right" color="primary" to="/speakers">View All Speakers</v-btn>
      </div>
    </div>
    <SpeakerInfo v-model="showSpeakerDialog" :speaker="selectedSpeaker" />
  </section>
</template>

<script setup>
import speakersData from '~/assets/data/speakers.json';
import SpeakerInfo from '~/components/shared/SpeakerInfo.vue';
// Only show feature speakers on home page
const featureSpeakers = speakersData.filter(speaker => speaker.isFeatured);

const showSpeakerDialog = ref(false);
const selectedSpeaker = ref({});

const openSpeakerDialog = (speaker) => {
  selectedSpeaker.value = speaker;
  showSpeakerDialog.value = true;
};

</script>

<style scoped lang="scss">
.event-agendas {
  padding: 80px 40px 80px 20px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 60px 36px 60px 16px;
  }

  @media (max-width: 500px) {
    padding: 40px 25px 40px 5px;
  }

  &__container {
    max-width: 1400px;
    margin: 0 auto;
  }

  &__label {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    justify-content: center;

    @media (max-width: 768px) {
      margin-bottom: 16px;
    }
  }

  &__label-rule {
    width: 40px;
    height: 2px;
    background-color: #5b8ff9;

    @media (max-width: 768px) {
      width: 30px;
    }
  }

  &__label-text {
    font-size: 14px;
    font-weight: 600;
    color: #5b8ff9;
    letter-spacing: 2px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  &__headline {
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 60px;
    color: #1a1a1a;

    span {
      color: #1e3a8a;
      font-weight: 800;
    }

    @media (max-width: 1024px) {
      font-size: 36px;
      margin-bottom: 48px;
    }

    @media (max-width: 768px) {
      font-size: 28px;
      margin-bottom: 40px;

      span {
        display: inline;

        br {
          display: none;
        }
      }
    }

    @media (max-width: 480px) {
      font-size: 24px;
      margin-bottom: 32px;
    }
  }

  &__marquee-wrapper {
    width: 100%;
    overflow: hidden;
    margin-top: 40px;
  }

  &__marquee {
    display: flex;
    width: 100%;

    &:hover .event-agendas__marquee-content {
      animation-play-state: paused !important;
    }
  }

  &__marquee-content {
    display: flex;
    align-items: flex-start;
    gap: 40px;
    animation: marqueeScroll 30s linear infinite;
    flex-shrink: 0;
    padding-right: 40px;

    @media (max-width: 768px) {
      gap: 30px;
      animation: marqueeScroll 25s linear infinite;
      padding-right: 30px;
    }

    @media (max-width: 480px) {
      gap: 20px;
      animation: marqueeScroll 30s linear infinite;
      padding-right: 20px;
    }
  }

  @keyframes marqueeScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    padding: 20px 0 0 20px;
    width: 350px;
    flex-shrink: 0;
    overflow: visible;

    @media (max-width: 768px) {
      padding: 15px 0 0 15px;
      width: 280px;
    }

    @media (max-width: 480px) {
      width: 240px;
    }
  }

  &__card-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    transition: all 0.4s ease;
    position: relative;
    cursor: pointer;

    .event-agendas__card:hover & {
      transform: translateY(-8px);
    }

    &::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      width: 150px;
      height: 150px;
      border-left: 5px solid #2B5BA8;
      border-top: 5px solid #2B5BA8;
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
      z-index: 1;

      @media (max-width: 768px) {
        width: 100px;
        height: 100px;
        border-width: 4px;
      }
    }

    .event-agendas__card:hover &::before {
      opacity: 1;
    }
  }

  &__image-container {
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
    margin-bottom: 24px;
    background-color: #e5e7eb;
    border-radius: 0;
    position: relative;
    transition: all 0.4s ease;

    @media (max-width: 768px) {
      margin-bottom: 16px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: all 0.4s ease;
    position: relative;
    z-index: 2;
  }

  &__social-panel {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(100%, -50%);
    background: linear-gradient(180deg, #7dd3c0 0%, #5fb8a8 100%);
    padding: 24px 12px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    opacity: 0;
    transition: all 0.4s ease;
    z-index: 3;
    box-shadow: -4px 4px 12px rgba(0, 0, 0, 0.1);

    @media (max-width: 1200px) {
      padding: 20px 10px;
      gap: 16px;
    }

    @media (max-width: 768px) {
      padding: 16px 8px;
      gap: 12px;
    }

    .event-agendas__card:hover & {
      opacity: 1;
      transform: translate(0, -50%);
    }
  }

  &__social-link {
    width: 40px;
    height: 40px;
    background: #1e3a8a;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    text-decoration: none;

    @media (max-width: 1200px) {
      width: 36px;
      height: 36px;
    }

    &:hover {
      background: #2563eb;
      transform: scale(1.1);
    }

    .v-icon {
      color: white !important;
    }
  }

  &__name {
    font-size: 20px;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 8px;
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  &__role {
    font-size: 16px;
    color: #5b8ff9;
    font-weight: 500;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
}
</style>