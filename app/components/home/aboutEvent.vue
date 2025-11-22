<template>
  <!-- About Section -->
  <section class="about-event">
    <div class="about-event__container" style="max-width: 1500px">
      <div class="about-event__cards">
        <v-card
          v-for="detail in eventDetails"
          :key="detail.title"
          class="pa-4 about-event__card"
          variant="flat"
          rounded="lg"
        >
          <div class="d-flex align-center">
            <v-avatar size="64" class="mr-4 about-event__avatar">
              <v-icon size="35" class="about-event__card-icon">{{
                detail.icon
              }}</v-icon>
            </v-avatar>
            <div>
              <h3 class="about-event__card-title">
                {{ detail.title }}
              </h3>
              <p class="about-event__card-subtitle">
                {{ detail.subtitle }}
              </p>
            </div>
          </div>
        </v-card>
      </div>
      <div class="about-event__content">
        <div class="about-event__label">
          <span class="about-event__label-rule"></span>
          <span class="about-event__label-text">About Event</span>
        </div>
        <h1 class="about-event__headline">
          First, <span>we built the cloud. Now, we’re teaching it to run itself.</span>
        </h1>
        <p class="about-event__body">
          We’re bringing together the community of engineers, AI and application developers, platform
teams, and cloud practitioners who are building the next phase of cloud-native evolution, where
automation begins to think for itself.
        </p>
        <p class="about-event__body">
          Meet and hear from well-known speakers, the leading brands, and the engineering teams
          driving real innovation across the cloud-native ecosystem.        
        </p>
        <p class="about-event__body">
          When a machine learns, the cloud starts to think.
        <!-- <br>
          Sessions explore AI-driven orchestration, GPU-aware scheduling, FinOps automation, and application performance intelligence — grounded in real systems, real architectures, and real production lessons.
          <br>This is where the people running today’s cloud prepare for tomorrow’s: the intelligent cloud.
<br>When compute learns, the cloud thinks. -->

        </p>
      </div>
    </div>
  </section>
  <!-- About Section End -->

  <!-- Event Stats Section -->
  <div class="ma-0 event-stats">
    <div class="event-stats__item" v-for="stat in eventStats" :key="stat.title">
      <v-card
        class="text-center text-white event-card"
        color="transparent"
        variant="flat"
        rounded="lg"
      >
        <p class="text-h1 font-weight-bold">{{ stat.value }}</p>
        <h2 class="text-h5">{{ stat.title }}</h2>
      </v-card>
    </div>
  </div>
  <!-- Event End -->
</template>

<script setup>
import { ref } from 'vue';
import stats from '@/assets/data/stats.json';
const eventDetails = ref([
  {
    icon: "mdi-calendar-outline",
    title: "March 14, 2026",
    subtitle: "8.00 am - 7.00 pm",
  },
  {
    icon: "mdi-map-marker-outline",
    title: "Nimhans Convention Center",
    subtitle: "Bengaluru, Karnataka, India",
  },
]);

const eventStats = ref(stats);
</script>

<style scoped lang="scss">
.about-event {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 64px;
}

.about-event__container {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 64px;
}

.about-event__cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 24px;
  width: 40%;
}

.about-event__card {
  background-color: #2562ff;
  width: 90%;
  color: #ffffff;
  box-shadow: 0px 20px 40px rgba(28, 76, 217, 0.18);
}

.about-event__avatar {
  background-color: rgba(144, 255, 242, 0.2);
  color: #90fff2;
}

.about-event__card-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
}

.about-event__card-subtitle {
  margin: 4px 0 0;
  font-size: 0.9375rem;
  opacity: 0.9;
}

.about-event__content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1 1 360px;
  padding-right:64px;
}

.about-event__label {
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.18em;
  color: #2562ff;
  font-weight: 600;
}

.about-event__label-rule {
  display: inline-block;
  width: 32px;
  height: 2px;
  background-color: currentColor;
  margin-right: 12px;
}

.about-event__headline {
  margin: 0;
  font-size: clamp(2.25rem, 3vw + 1rem, 3.5rem);
  font-weight: 300;
  line-height: 1.15;
  color: #0f1d4c;

  span {
    font-weight: 700;
    color: #0d1a68;
  }
}

.about-event__body {
  margin: 0;
  font-size: 1.05rem;
  color: #4d5b7c;
  line-height: 1.8;
}

.event-stats {
  background-image: url("@/assets/images/home.jpg");
  background-size: cover;

  background-repeat: no-repeat;
  padding: 64px;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  gap: 48px;

  .event-stats__item {
    .event-card {
      display: flex;
      gap: 10px;
      justify-content: start;
      align-items: center;
      & > p {
        color: #90fff2;
        font-size: 4rem !important;
      }
      & > h2 {
        max-width: 190px;
        text-align: left;
        line-height: 100%;
      }
    }
  }
}

@media (min-width: 1300px) {
  .event-stats {
    justify-content: center;
  }
  
}


@media (max-width: 1080px) {
  .about-event {
    padding: 24px;
  }

  .about-event__container {
    gap: 32px;
  }

  .event-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .about-event__container {
    flex-direction: column;
  }

  .about-event__cards {
    width: 100%;
    align-items: start;
  }

  .about-event__card {
    width: 75%;
  }
}

@media (max-width: 542px) {
  .about-event {
    padding: 16px;
  }

  .about-event__cards {
    gap: 16px;
  }
  .about-event__card {
    width: 100%;
  }

  .about-event__card-title {
    font-size: 1rem;
    font-weight: 500;
  }

  .about-event__card-subtitle {
    font-size: 0.85rem;
  }

  .event-stats {
    padding: 32px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;

    p {
      font-size: 3rem !important;
    }
  }
}
</style>
