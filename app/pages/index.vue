<template>
  <v-container fluid class="pa-0">
    <!-- Hero Section -->
    <HomeHero />

    <!-- Hero Section End -->

    <HomeAboutEvent />

    <!-- <HomeEvenList /> -->
    <HomeWhatToExpect />

    <HomeEventAgendas />

    <HomeMarqee />

    <HomePartners />

    <!-- Featured Keynotes Section -->
    <!-- <v-row class="justify-center ma-0 mt-10 py-10 px-15 text-center">
      <v-col cols="12" lg="10" xl="10">
        <h1 class="text-h2">Featured Keynotes</h1>
        <p>Meet the experts who will be speaking at the event</p>
        <v-chip class="mt-3" color="primary" variant="outlined"
          >Coming Soon</v-chip
        >

        <v-container class="mt-5">
          <v-row class="ma-0">
            <v-col cols="3" v-for="i in 4" :key="i">
              <SharedSpeakerCard :item="i" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row> -->
    <!-- Featured Keynotes Section End -->

    <!-- Partners Section -->
    <!-- <v-row class="justify-center ma-0 mt-10 py-10 px-15 text-center">
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
    </v-row> -->
    <!-- Partners Section End -->

    <!-- FAQ Section (Accordion) -->

    <!-- FAQ Section End -->

    <!-- Countdown Section -->
    <!-- <v-row
      class="justify-center ma-0 mt-10 py-10 px-15 text-center"
      style="background-color: #2562ff"
    >
      <v-col cols="12" lg="10" xl="12">
        <h1 class="text-h2">Countdown</h1>
        <p>The event will start in</p>

        <SharedCountDown />
      </v-col>
    </v-row> -->
    <HomeFaq />

    <HomeCountDown />
    <!-- Countdown Section End -->
  </v-container>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

// Get the base URL for og:image
const url = useRequestURL();
const ogImageUrl = `${url.origin}/cover.png`;

// SEO
useHead({
  title: "CloudxAI Conference 2026 Bengaluru",
  meta: [
    { name: "description", content: "CloudxAI Conference 2026 Bengaluru" },
    { name: "keywords", content: "conference, event, cloudxai, bengaluru" },
    { name: "author", content: "TechFerment" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "bingbot", content: "index, follow" },
    { name: "yandexbot", content: "index, follow" },
    { name: "sitemap", content: "https://techmilap.com/sitemap.xml" },
    { name: "og:image", content: ogImageUrl },
    { name: "og:title", content: "CloudxAI Conference 2026 Bengaluru" },
    { name: "og:description", content: "CloudxAI Conference 2026 Bengaluru" },
    { name: "og:url", content: url.origin },
    { name: "og:type", content: "website" },
    { name: "og:locale", content: "en_US" },
    { name: "og:site_name", content: "CloudxAI Conference 2026 Bengaluru" },
    { name: "og:image:width", content: "1200" },
    { name: "og:image:height", content: "630" },
  ],
});
</script>

<style scoped lang="scss"></style>
