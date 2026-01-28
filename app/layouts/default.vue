<template>
  <v-app>
    <NuxtLoadingIndicator />
    <!--  ONLY SHOW ON HOME PAGE -->
    <CoreAppToolbar v-if="route.path === '/' && route.name === 'index'" />

    <!-- <HomeComonNavbar v-if="route.path === '/' && route.name === 'index'" /> -->
    <HomeComonNavbar v-if="route.path !== '/' && route.name !== 'index'" />
    <!-- <HomeComonNavbar v-if="!isHomePage" /> -->
    <v-main class="px-0 mt-0" width="100%" style="--v-layout-top: 0 !important">
      <!-- <h1 class="text-h1 py-10">{{ isHomePage }}</h1> -->
      <NuxtPage />
    </v-main>
    <CoreAppFooter />
  </v-app>
</template>

<script setup>
const { proxy } = useScriptRedditPixel();

onMounted(() => {
  proxy.rdt("track", "PageVisit");
  proxy.rdt("track", "ViewContent");
});

import { useRoute } from "vue-router";

const route = useRoute(); // Get the current route
const isHomePage = computed(() => route.path === "/");
</script>

<style scoped lang="scss">
</style>