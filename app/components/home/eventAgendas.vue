<template>
  <section class="event-agendas">
    <div class="event-agendas__container">
      <!-- Section Label -->
      <div class="event-agendas__label">
        <span class="event-agendas__label-rule"></span>
        <span class="event-agendas__label-text">EVENT AGENDAS</span>
      </div>

      <!-- Section Heading -->
      <h1 class="event-agendas__headline">
        MEET OUR <span>AMAZING<br/>SPEAKERS FOR THIS EVENT</span>
      </h1>

      <!-- Speakers Grid -->
      <div class="event-agendas__grid">
        <div
          v-for="speaker in speakers"
          :key="speaker.name"
          class="event-agendas__card"
        >
          <div class="event-agendas__card-inner">
            <div class="event-agendas__image-container">
              <img
                :src="speaker.image"
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
                  <v-icon size="20" :color="social.color || '#1e3a8a'">{{ social.icon }}</v-icon>
                </a>
              </div>
            </div>
            <h3 class="event-agendas__name">{{ speaker.name }}</h3>
            <p class="event-agendas__role">{{ speaker.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventAgendas',
  data() {
    return {
      speakers: [
        {
          name: 'MELLISSA BRAYAN',
          role: 'CEO, Mindstation',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
          socials: [
            { name: 'calendar', icon: 'mdi-calendar-blank', url: '#' },
            { name: 'menu', icon: 'mdi-menu', url: '#' },
            { name: 'share', icon: 'mdi-share-variant', url: '#' },
            { name: 'instagram', icon: 'mdi-instagram', url: '#' },
            { name: 'facebook', icon: 'mdi-facebook', url: '#' }
          ]
        },
        {
          name: 'BRANDON MAXWELL',
          role: 'Global Activist',
          image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
          socials: [
            { name: 'calendar', icon: 'mdi-calendar-blank', url: '#' },
            { name: 'menu', icon: 'mdi-menu', url: '#' },
            { name: 'share', icon: 'mdi-share-variant', url: '#' },
            { name: 'instagram', icon: 'mdi-instagram', url: '#' },
            { name: 'facebook', icon: 'mdi-facebook', url: '#' }
          ]
        },
        {
          name: 'JENNY WILLIAMSON',
          role: 'Global Activist',
          image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
          socials: [
            { name: 'calendar', icon: 'mdi-calendar-blank', url: '#' },
            { name: 'menu', icon: 'mdi-menu', url: '#' },
            { name: 'share', icon: 'mdi-share-variant', url: '#' },
            { name: 'instagram', icon: 'mdi-instagram', url: '#' },
            { name: 'facebook', icon: 'mdi-facebook', url: '#' }
          ]
        },
        {
          name: 'JACOB BALLINGER',
          role: 'Global Activist',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
          socials: [
            { name: 'calendar', icon: 'mdi-calendar-blank', url: '#' },
            { name: 'menu', icon: 'mdi-menu', url: '#' },
            { name: 'share', icon: 'mdi-share-variant', url: '#' },
            { name: 'instagram', icon: 'mdi-instagram', url: '#' },
            { name: 'facebook', icon: 'mdi-facebook', url: '#' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.event-agendas {
  padding: 80px 40px 80px 20px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 60px 36px 60px 16px;
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
    background-color: #5B8FF9;

    @media (max-width: 768px) {
      width: 30px;
    }
  }

  &__label-text {
    font-size: 14px;
    font-weight: 600;
    color: #5B8FF9;
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

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    margin-top: 40px;

    @media (max-width: 1200px) {
      gap: 24px;
    }

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 24px;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    padding: 20px 0 0 20px;

    @media (max-width: 768px) {
      padding: 15px 0 0 15px;
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

    .event-agendas__card:hover & {
      transform: translateY(-8px);
    }

    // Border frame on hover
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
    background: linear-gradient(180deg, #7DD3C0 0%, #5FB8A8 100%);
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
    color: #5B8FF9;
    font-weight: 500;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
}
</style>