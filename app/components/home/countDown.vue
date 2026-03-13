<template>
  <div v-if="isVisible" class="countdown-wrapper">
    <div class="countdown-section">
      <v-container class="countdown-container">
        <v-row
          align="center"
          justify="space-between"
          class="countdown-main-row"
        >
          <!-- Title Section -->
          <v-col cols="12" md="6" lg="5" class="countdown-title-col">
            <h1 class="countdown-title">Event Countdown</h1>
          </v-col>

          <!-- Countdown Timer Section -->
          <v-col cols="12" md="6" lg="7" class="countdown-timer-col">
            <div class="countdown-boxes">
              <!-- Days -->
              <div class="countdown-box">
                <div class="countdown-value">{{ days }}</div>
                <div class="countdown-label">Days</div>
              </div>

              <!-- Separator -->
              <!-- <div class="countdown-separator">:</div> -->

              <!-- Hours -->
              <div class="countdown-box">
                <div class="countdown-value">{{ hours }}</div>
                <div class="countdown-label">Hours</div>
              </div>

              <!-- Separator -->
              <!-- <div class="countdown-separator">:</div> -->

              <!-- Minutes -->
              <div class="countdown-box">
                <div class="countdown-value">{{ minutes }}</div>
                <div class="countdown-label">Minutes</div>
              </div>

              <!-- Separator -->
              <!-- <div class="countdown-separator">:</div> -->

              <!-- Seconds -->
              <div class="countdown-box">
                <div class="countdown-value">{{ seconds }}</div>
                <div class="countdown-label">Seconds</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

// Event date: September 27th, 2025 at 9 AM IST
const eventDate = new Date("2026-03-14T09:00:00+05:30");

const currentTime = ref(new Date());
const isVisible = computed(() => currentTime.value < eventDate);

const days = ref("00");
const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");

let countdownInterval = null;

const calculateTimeLeft = () => {
  currentTime.value = new Date();
  const difference = eventDate.getTime() - currentTime.value.getTime();

  if (difference > 0) {
    const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutesLeft = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60),
    );
    const secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);

    days.value = daysLeft.toString().padStart(2, "0");
    hours.value = hoursLeft.toString().padStart(2, "0");
    minutes.value = minutesLeft.toString().padStart(2, "0");
    seconds.value = secondsLeft.toString().padStart(2, "0");
  } else {
    // Event has started
    days.value = "00";
    hours.value = "00";
    minutes.value = "00";
    seconds.value = "00";
  }
};

onMounted(() => {
  // Calculate immediately
  calculateTimeLeft();
  // Then set up the interval
  countdownInterval = setInterval(calculateTimeLeft, 1000);
});

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
});
</script>

<style scoped>
.countdown-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 1rem !important;
  position: relative;
}

.countdown-section {
  position: relative;
  background: linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%);
  border-radius: 32px;
  overflow: hidden;
  width: 100%;
  max-width: 1300px;
}

.countdown-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("@/assets/images/home-4-countdown-bg-2.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.3;
  pointer-events: none;
}

.countdown-container {
  position: relative;
  z-index: 1;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 3rem 2rem !important;
}

.countdown-main-row {
  margin: 0 !important;
}

.countdown-title-col {
  padding: 0 1rem !important;
}

.countdown-timer-col {
  padding: 0 1rem !important;
}

.countdown-title {
  font-size: 3.5rem !important;
  font-weight: 700 !important;
  color: white !important;
  line-height: 1.2 !important;
  margin: 0 !important;
  padding: 0 !important;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.countdown-boxes {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: nowrap;
}

.countdown-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  width: 140px !important;
  aspect-ratio: 1/1;

  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin: 0 !important;
  flex-shrink: 0 !important;
}

.countdown-value {
  font-size: 4rem !important;
  font-weight: 700 !important;
  color: white !important;
  line-height: 1 !important;
  margin: 0 !important;
  padding-bottom: 0.5rem !important;
}

.countdown-label {
  font-size: 1rem !important;
  font-weight: 500 !important;
  color: white !important;
  text-transform: capitalize !important;
  letter-spacing: 0.5px !important;
  margin: 0 !important;
  padding: 0 !important;
}

.countdown-separator {
  font-size: 3rem !important;
  font-weight: 700 !important;
  color: white !important;
  line-height: 1 !important;
  padding: 0 0.25rem !important;
  margin: 0 !important;
}

@media (min-width: 1440px) {
  .countdown-wrapper {
    height: 200px;
    overflow: visible;
  }
  .countdown-section {
    position: absolute !important;
    bottom: -120px;
    z-index: 1;
  }
}

/* Large Desktop to Tablet: 1280px - 961px */
@media (max-width: 1280px) and (min-width: 961px) {
  .countdown-container {
    padding: 2.5rem 1.25rem !important;
    margin: 0 !important;
  }

  .countdown-title {
    font-size: 2.75rem !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .countdown-title-col {
    padding: 0 0.75rem !important;
  }

  .countdown-timer-col {
    padding: 0 0.75rem !important;
  }

  .countdown-box {
    width: 110px !important;
    margin: 0 !important;
    flex-shrink: 0 !important;
  }

  .countdown-value {
    font-size: 3.25rem !important;
    margin: 0 !important;
    padding-bottom: 0.4rem !important;
  }

  .countdown-label {
    font-size: 0.875rem !important;
    margin: 0 !important;
    padding: 0 !important;
  }
}

/* Tablet: 960px - 769px */
@media (max-width: 960px) and (min-width: 769px) {
  .countdown-wrapper {
    padding: 2rem 1rem !important;
  }

  .countdown-section {
    border-radius: 28px !important;
  }

  .countdown-container {
    padding: 2.5rem 1.5rem !important;
  }

  .countdown-title {
    font-size: 2.75rem !important;
    text-align: center !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .countdown-title-col {
    padding-bottom: 1.5rem !important;
    margin: 0 !important;
  }

  .countdown-box {
    width: 110px !important;
    margin: 0 !important;
    flex-shrink: 0 !important;
  }

  .countdown-value {
    font-size: 3rem !important;
    margin: 0 !important;
    padding-bottom: 0.4rem !important;
  }

  .countdown-label {
    font-size: 0.875rem !important;
    margin: 0 !important;
    padding: 0 !important;
  }
}

/* Tablet Small: 768px - 501px */
@media (max-width: 768px) and (min-width: 501px) {
  .countdown-wrapper {
    padding: 1.5rem 1rem !important;
  }

  .countdown-section {
    border-radius: 24px !important;
  }

  .countdown-container {
    padding: 2rem 1.25rem !important;
  }

  .countdown-title {
    font-size: 2.25rem !important;
    text-align: center !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .countdown-title-col {
    padding-bottom: 1.25rem !important;
    margin: 0 !important;
  }

  .countdown-box {
    width: 90px !important;
    margin: 0 !important;
  }

  .countdown-value {
    font-size: 2.25rem !important;
    margin: 0 !important;
    padding-bottom: 0.35rem !important;
  }

  .countdown-label {
    font-size: 0.75rem !important;
    margin: 0 !important;
    padding: 0 !important;
  }
}

/* Mobile: 500px and below */
@media (max-width: 500px) {
  .countdown-wrapper {
    padding: 1rem 0.5rem !important;
  }

  .countdown-section {
    border-radius: 20px !important;
  }

  .countdown-container {
    padding: 1.5rem 1rem !important;
  }

  .countdown-title {
    font-size: 1.75rem !important;
    text-align: left !important;
    margin: 0 !important;
    padding: 0 0 1rem 0 !important;
  }

  .countdown-title-col {
    padding: 0 0.5rem !important;
    margin: 0 !important;
  }

  .countdown-timer-col {
    padding: 0 0.5rem !important;
    margin: 0 !important;
  }

  .countdown-boxes {
    gap: 0.35rem !important;
    justify-content: flex-start !important;
  }

  .countdown-box {
    width: 68px !important;
    margin: 0 !important;
  }

  .countdown-value {
    font-size: 1.5rem !important;
    margin: 0 !important;
    padding-bottom: 0.25rem !important;
  }

  .countdown-label {
    font-size: 0.55rem !important;
    margin: 0 !important;
    padding: 0 !important;
  }
}
</style>
