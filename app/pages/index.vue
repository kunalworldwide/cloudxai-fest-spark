<template>
  <v-container fluid class="pa-0">
    <!-- Hero Section -->
    <HomeHero />

    <!-- Hero Section End -->

    <HomeAboutEvent />

    <!-- <HomeEvenList /> -->

    <HomeFeatureSpeakers />

    <HomeWhatToExpect />

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

// SEO
useHead({
  title: "CLOUDxAI Conference 2026 Bengaluru",
  titleTemplate: "CLOUDxAI Conference 2026 Bengaluru",
  description:
    "CloudxAI 2026 Bengaluru: The meeting ground for DevOps & AI engineers building the future of intelligent infrastructure.",
  keywords:
    "conference, event, CLOUDxAI, bengaluru, Developers, AI, Agents, India, Conference",
  author: "TechFerment",
  robots: "index, follow",
  googlebot: "index, follow",
  bingbot: "index, follow",
  yandexbot: "index, follow",
  ogTitle: "CLOUDxAI Conference 2026 Bengaluru",
  ogDescription:
    "CloudxAI 2026 Bengaluru: The meeting ground for DevOps & AI engineers building the future of intelligent infrastructure.",
  ogImage:
    "https://raw.githubusercontent.com/TechFerment/images/refs/heads/main/cxaixcover.jpg",
  ogUrl: "https://cloudconf.ai/",
  ogType: "website",
  ogLocale: "en_US",
  ogSiteName: "CLOUDxAI Conference 2026 Bengaluru",
  meta: [
    {
      name: "description",
      content:
        "CloudxAI 2026 Bengaluru: The meeting ground for DevOps & AI engineers building the future of intelligent infrastructure.",
    },
    {
      name: "keywords",
      content:
        "conference, event, CLOUDxAI, bengaluru, Developers, AI, Agents, India, Conference",
    },
    { name: "author", content: "TechFerment" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "bingbot", content: "index, follow" },
    { name: "yandexbot", content: "index, follow" },
    // Open Graph tags
    { property: "og:title", content: "CLOUDxAI Conference 2026 Bengaluru" },
    {
      property: "og:description",
      content:
        "CloudxAI 2026 Bengaluru: The meeting ground for DevOps & AI engineers building the future of intelligent infrastructure.",
    },
    {
      property: "og:image",
      content:
        "https://raw.githubusercontent.com/TechFerment/images/refs/heads/main/cxaixcover.jpg",
    },
    { property: "og:image:width", content: "1920" },
    { property: "og:image:height", content: "1080" },
    {
      property: "og:image:alt",
      content: "CLOUDxAI Conference 2026 Bengaluru Banner",
    },
    { property: "og:url", content: "https://cloudconf.ai/" },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "en_US" },
    { property: "og:site_name", content: "CLOUDxAI Conference 2026 Bengaluru" },
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "CLOUDxAI Conference 2026 Bengaluru" },
    {
      name: "twitter:description",
      content:
        "CloudxAI 2026 Bengaluru: The meeting ground for DevOps & AI engineers building the future of intelligent infrastructure.",
    },
    {
      name: "twitter:image",
      content:
        "https://raw.githubusercontent.com/TechFerment/images/refs/heads/main/cxaixcover.jpg",
    },
    {
      name: "twitter:image:alt",
      content: "CLOUDxAI Conference 2026 Bengaluru Banner",
    },
    { name: "twitter:site", content: "@cloudxaiconf" },
    { name: "twitter:creator", content: "@cloudxaiconf" },
    // LinkedIn specific
    {
      property: "og:image:secure_url",
      content:
        "https://raw.githubusercontent.com/TechFerment/images/refs/heads/main/cxaixcover.jpg",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

<style scoped lang="scss"></style>
