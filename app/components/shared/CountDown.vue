<template>
  <v-container fluid class="px-0">
    <v-row justify="center" class="">
      <v-col cols="12" class="text-center">
        <h2 class="text-h5 mb-6 mt-n3">Let the countdown begin</h2>
        <v-row justify="center" align="center" class="countdown-grid">
          <v-col cols="auto" class="pa-1">
            <v-card class="countdown-card" elevation="0" rounded="lg">
              <v-card-text class="text-center pa-4">
                <div
                  class="countdown-value text-h4 font-weight-bold text-white"
                >
                  {{ days }}
                </div>
                <div class="countdown-label text-caption text-white mt-2">
                  Days
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="auto" class="pa-1">
            <v-card class="countdown-card" elevation="0" rounded="lg">
              <v-card-text class="text-center pa-4">
                <div
                  class="countdown-value text-h4 font-weight-bold text-white"
                >
                  {{ hours }}
                </div>
                <div class="countdown-label text-caption text-white mt-2">
                  Hours
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="auto" class="pa-1">
            <v-card class="countdown-card" elevation="0" rounded="lg">
              <v-card-text class="text-center pa-4">
                <div
                  class="countdown-value text-h4 font-weight-bold text-white"
                >
                  {{ minutes }}
                </div>
                <div class="countdown-label text-caption text-white mt-2">
                  Minutes
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="auto" class="pa-1">
            <v-card class="countdown-card" elevation="0" rounded="lg">
              <v-card-text class="text-center pa-4">
                <div
                  class="countdown-value text-h4 font-weight-bold text-white"
                >
                  {{ seconds }}
                </div>
                <div class="countdown-label text-caption text-white mt-2">
                  Seconds
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Event date: September 27th, 2025 at 9 AM IST
const eventDate = new Date("2026-03-14T09:00:00+05:30");

const days = ref("00");
const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");

let countdownInterval = null;

const calculateTimeLeft = () => {
  const now = new Date();
  const difference = eventDate.getTime() - now.getTime();

  if (difference > 0) {
    const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesLeft = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60)
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
.countdown-grid {
  gap: 0.5rem;
}

.countdown-card {
  min-width: 100px;
  max-width: 120px;
  background-color: #2562ff;
  border-radius: 10px;
  color: #fff !important;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.countdown-value {
  line-height: 1;
}

.countdown-label {
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.countdown-separator {
  margin-top: -1rem;
}

@media (max-width: 768px) {
  .countdown-card {
    min-width: 80px;
    max-width: 90px;
  }

  .countdown-separator {
    margin-top: -0.5rem;
  }
}
</style> 