<template>
  <v-container fluid class="pa-0 h-100">
    <!-- Hero Section -->
    <v-row
      class="align-center pa-10 text-white h-100 fill-height"
      style="background-color: #2562ff"
    >
      <v-col cols="6">
        <h1>Home</h1>
        <p>Welcome to the CloudxAI Conference</p>
        <p>March 14, 2026</p>
        <p>9 AM IST Onwords</p>
        <v-btn color="primary" variant="outlined">Register</v-btn>
      </v-col>
      <v-col cols="6">
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
        <v-chip class="mt-3" color="primary" variant="outlined">Coming Soon</v-chip>

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
    <!--  -->
  </v-container>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

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