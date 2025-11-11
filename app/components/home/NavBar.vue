<template>
  <div class="nav-bar" style="z-index:20; position:relative;">
      <v-toolbar color="transparent" flat class="px-4">
        <!-- Logo and Text on Left -->
        <div class="d-flex align-center ga-3">
          <v-avatar size="40" color="primary">
            <v-icon color="white">mdi-cloud-outline</v-icon>
          </v-avatar>
          <span class="text-h6 font-weight-medium text-white">CloudxAI</span>
        </div>

        <v-spacer></v-spacer>

        <!-- Three Dropdowns on Right -->
         <NavBarContent />
        
      </v-toolbar>
    </div>
</template>

<script setup>
import NavBarContent from './NavBarContent.vue';
</script>

<style scoped lang="scss">
.nav-bar{
  padding-right:25%;
}

.nav-btn {
  font-size: 16px;
  letter-spacing: 0;
}



// Global style for dropdown menu
:deep(.v-overlay__content) {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
</style>