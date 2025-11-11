<template>
  <v-app-bar 
    v-if="showToolbar"
    scroll-behavior="hide"
    color="#2562ff" 
    elevation="4" 
    class="text-white"
  >
    <v-toolbar-title>
      <v-icon class="mr-2">mdi-cloud-outline</v-icon>
      <span>CloudxAI Conference</span>
    </v-toolbar-title>

    <v-spacer />

    <NavBarContent />
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBarContent from '../home/NavBarContent.vue';
const showToolbar = ref(false)

const handleScroll = () => {
  // The navbar is in the hero section which is 100svh
  // Show toolbar when scrolled past the hero section (navbar out of view)
  const scrollPosition = window.scrollY
  const viewportHeight = window.innerHeight
  
  // Show toolbar when scrolled past 70% of viewport height (navbar is out of view)
  showToolbar.value = scrollPosition > viewportHeight * 0.2
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial state
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
// Styles handled by Vuetify's scroll-behavior="hide"
</style>