<template>
  <v-container fluid class="pa-0">
    <!-- Hero Section -->
    <v-row
      class="align-center text-white pa-15 justify-center"
      style="background-color: #2562ff; height: 100vh"
    >
      <v-col cols="7">
        <h1 class="text-h1">Welcome to the <br> CloudxAI Conference</h1>
        <p class="text-h4">The CloudxAI Conference is a gathering of experts and enthusiasts in
          the field of cloud and AI. </p>
        <p>March 14, 2026</p>
        <p>9 AM IST Onwords</p>
        <v-btn color="" class="mt-10" size="large" variant="outlined">Register</v-btn>

        <h1 class="text-h4 mt-5" style="line-height: 1.2;">Powered by <br>Cast AI</h1>
      </v-col>
      <v-col cols="5">
        <h1>Get Ready for the Future of AI</h1>
        <p>
          The CloudxAI Conference is a gathering of experts and enthusiasts in
          the field of cloud and AI. It is the premier destination for
          technology leaders, innovators, and professionals to explore the
          convergence of cloud computing and artificial intelligence in the
          enterprise landscape. Join industry leaders and experts for an
          intensive day of knowledge sharing, featuring cutting-edge insights,
          technical deep-dives, and strategic networking opportunities.
        </p>
        <v-btn color="primary" variant="outlined">Register</v-btn>
      </v-col>
    </v-row>
    <!-- Hero Section End -->

    <!-- About Section -->
    <v-row class="justify-center">
      <v-col cols="12" lg="10" xl="10">
        <v-container>
          <v-row class="align-center">
            <v-col cols="4">
              <v-card class="pa-3" variant="flat" rounded="lg" color="#2562FF">
                <div class="d-flex align-center">
                  <v-avatar size="60" color="#90FFF2" class="mr-3">
                    <v-icon size="35">mdi-calendar-outline</v-icon>
                  </v-avatar>
                  <div>
                    <h2>March 14, 2026</h2>
                    <p>9 AM IST Onwords</p>
                  </div>
                </div>
              </v-card>

              <v-card
                class="pa-3 mt-3"
                variant="flat"
                rounded="lg"
                color="#2562FF"
              >
                <div class="d-flex align-center">
                  <v-avatar size="60" color="#90FFF2" class="mr-3">
                    <v-icon size="35">mdi-map-marker-outline</v-icon>
                  </v-avatar>
                  <div>
                    <h2>Nimhans Convention Center</h2>
                    <p>Bengaluru, Karnataka</p>
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col cols="8">
              <h2>About Event</h2>
              <h1>Get Ready for the Future of AI</h1>
              <p class="text-body-1">
                The CloudxAI Conference is a gathering of experts and
                enthusiasts in the field of cloud and AI.
              </p>
              <p class="text-body-1 mt-3">
                CloudxAI Conference is the premier destination for technology
                leaders, innovators, and professionals to explore the
                convergence of cloud computing and artificial intelligence in
                the enterprise landscape. Join industry leaders and experts for
                an intensive day of knowledge sharing, featuring cutting-edge
                insights, technical deep-dives, and strategic networking
                opportunities.
              </p>
              <v-btn class="mt-3" color="primary" variant="outlined"
                >Register</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <!-- About Section End -->

    <!-- Event Stats Section -->
    <v-row
      class="justify-center mt-10 py-10 px-15"
      style="background-color: #2562ff"
    >
      <v-col cols="2" v-for="stat in eventStats" :key="stat.title">
        <v-card
          class="pa-3 text-center text-white"
          color="transparent"
          variant="flat"
          rounded="lg"
        >
          <h2 class="text-h6">{{ stat.title }}</h2>
          <p class="text-h1">{{ stat.value }}</p>
        </v-card>
      </v-col>
    </v-row>
    <!-- Event End -->

    <!-- Featured Keynotes Section -->
    <v-row class="justify-center mt-10 py-10 px-15 text-center">
      <v-col cols="12" lg="10" xl="10">
        <h1 class="text-h2">Featured Keynotes</h1>
        <p>Meet the experts who will be speaking at the event</p>
        <v-chip class="mt-3" color="primary" variant="outlined"
          >Coming Soon</v-chip
        >

        <v-container class="mt-5">
          <v-row>
            <v-col cols="3" v-for="i in 4" :key="i">
              <SharedSpeakerCard :item="i" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <!-- Featured Keynotes Section End -->

    <!-- Partners Section -->
    <v-row class="justify-center mt-10 py-10 px-15 text-center">
      <v-col cols="12" lg="10" xl="10">
        <h1 class="text-h2">Partners</h1>
        <p>Meet the partners who will be sponsoring the event</p>
        <v-container class="mt-5">
          <v-row class="justify-center">
            <v-col cols="2" v-for="i in 10" :key="i">
              <v-img
                src="https://upload.wikimedia.org/wikipedia/commons/8/88/Bill_Gates_at_the_European_Commission_-_2025_-_P067383-987995_%28cropped%29.jpg"
                cover
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <!-- Partners Section End -->

    <!-- FAQ Section (Accordion) -->
    <v-row class="justify-center mt-10 py-10 px-15">
      <v-col cols="12" lg="10" xl="8">
        <v-container>
          <v-row>
            <v-col cols="3">
              <h1 class="text-h2">FAQ</h1>
              <p>Frequently Asked Questions</p>

              <v-btn color="primary" class="mt-3" variant="outlined"
                >Register</v-btn
              >
            </v-col>
            <v-col cols="9">
              <v-expansion-panels>
                <v-expansion-panel
                  v-for="item in faqData"
                  :key="item.question"
                  :title="item.question"
                  :text="item.answer"
                >
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <!-- FAQ Section End -->

    <!-- Countdown Section -->
    <v-row
      class="justify-center mt-10 py-10 px-15 text-center"
      style="background-color: #2562ff"
    >
      <v-col cols="12" lg="10" xl="12">
        <h1 class="text-h2">Countdown</h1>
        <p>The event will start in</p>

        <SharedCountDown />
      </v-col>
    </v-row>
    <!-- Countdown Section End -->
  </v-container>
</template>

<script setup>
import faq from "@/assets/data/faq.json";
definePageMeta({
  layout: "default",
});

const faqData = ref(faq);

const eventStats = ref([
  {
    title: "Speakers",
    value: 100,
    icon: "mdi-account-outline",
  },
  {
    title: "Participants",
    value: 500,
    icon: "mdi-account-group-outline",
  },
  {
    title: "Partners",
    value: 100,
    icon: "mdi-handshake-outline",
  },
  {
    title: "Sessions",
    value: 10,
    icon: "mdi-presentation-outline",
  },
  {
    title: "Tracks",
    value: 10,
    icon: "mdi-track-light-outline",
  },
]);
</script>

<style>
</style>