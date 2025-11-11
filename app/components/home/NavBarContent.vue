<template>
  <div>
    <!-- Desktop Navigation (visible above 768px) -->
    <div class="d-none d-md-flex align-center ga-2">
      <!-- Dropdown 1: Pages -->
      <v-menu offset-y open-on-hover content-class="dropdown-menu">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            variant="text"
            color="white"
            class="text-none nav-btn"
            append-icon="mdi-chevron-down"
          >
            Pages
          </v-btn>
        </template>
        <v-list class="dropdown-list" bg-color="#1a1d3a">
          <v-list-item class="dropdown-item" @click="() => {}">
            <div class="item-content">
              <span class="hover-line">—</span>
              <span class="item-text">Speaker</span>
            </div>
          </v-list-item>
          
          <v-list-item class="dropdown-item" @click="() => {}">
            <div class="item-content">
              <span class="hover-line">—</span>
              <span class="item-text">Image Gallery</span>
            </div>
          </v-list-item>
          
          <v-list-item class="dropdown-item" @click="() => {}">
            <div class="item-content">
              <span class="hover-line">—</span>
              <span class="item-text">Get Ticket</span>
            </div>
          </v-list-item>
          
          <v-list-item class="dropdown-item" @click="() => {}">
            <div class="item-content">
              <span class="hover-line">—</span>
              <span class="item-text">Pricing Table</span>
            </div>
          </v-list-item>
          
          <v-list-item class="dropdown-item" @click="() => {}">
            <div class="item-content">
              <span class="hover-line">—</span>
              <span class="item-text">Registration</span>
            </div>
          </v-list-item>
          
          <v-list-item class="dropdown-item" @click="() => {}">
            <div class="item-content">
              <span class="hover-line">—</span>
              <span class="item-text">Venus Info</span>
            </div>
          </v-list-item>
          
          <v-list-item class="dropdown-item" @click="() => {}">
            <div class="item-content">
              <span class="hover-line">—</span>
              <span class="item-text">FAQ</span>
            </div>
          </v-list-item>
          
          <v-list-item class="dropdown-item" @click="() => {}">
            <div class="item-content">
              <span class="hover-line">—</span>
              <span class="item-text">Coming Soon</span>
            </div>
          </v-list-item>
          
          <v-list-item class="dropdown-item" @click="() => {}">
            <div class="item-content">
              <span class="hover-line">—</span>
              <span class="item-text">404 Error</span>
            </div>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Dropdown 2: Speakers -->
      <v-menu offset-y open-on-hover content-class="dropdown-menu">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            variant="text"
            color="white"
            class="text-none nav-btn"
            append-icon="mdi-chevron-down"
          >
            Speakers
          </v-btn>
        </template>
        <v-list class="dropdown-list" bg-color="#1a1d3a">
          <v-list-item class="dropdown-item" @click="() => {}">
            <div class="item-content">
              <span class="hover-line">—</span>
              <span class="item-text">All Speakers</span>
            </div>
          </v-list-item>
          <v-list-item class="dropdown-item" @click="() => {}">
            <div class="item-content">
              <span class="hover-line">—</span>
              <span class="item-text">Keynote Speakers</span>
            </div>
          </v-list-item>
          <v-list-item class="dropdown-item" @click="() => {}">
            <div class="item-content">
              <span class="hover-line">—</span>
              <span class="item-text">Panel Speakers</span>
            </div>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Dropdown 3: Resources -->
      <v-menu offset-y open-on-hover content-class="dropdown-menu">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            variant="text"
            color="white"
            class="text-none nav-btn"
            append-icon="mdi-chevron-down"
          >
            Resources
          </v-btn>
        </template>
        <v-list class="dropdown-list" bg-color="#1a1d3a">
          <v-list-item class="dropdown-item" @click="() => {}">
            <div class="item-content">
              <span class="hover-line">—</span>
              <span class="item-text">Documentation</span>
            </div>
          </v-list-item>
          <v-list-item class="dropdown-item" @click="() => {}">
            <div class="item-content">
              <span class="hover-line">—</span>
              <span class="item-text">FAQs</span>
            </div>
          </v-list-item>
          <v-list-item class="dropdown-item" @click="() => {}">
            <div class="item-content">
              <span class="hover-line">—</span>
              <span class="item-text">Contact</span>
            </div>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <!-- Mobile Hamburger Menu (visible below 768px) -->
    <div class="d-flex d-md-none">
      <v-btn
        icon
        variant="text"
        color="white"
        @click="drawer = !drawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>

    <!-- Mobile Sidebar Navigation - Teleported to body to avoid container constraints -->
    <Teleport to="body">
      <v-navigation-drawer
        v-model="drawer"
        temporary
        location="right"
        class="mobile-sidebar"
        width="280"
        style="background-color: #1a1d3a !important; z-index: 9999 !important;"
      >
        <div class="sidebar-header" style="display: flex; justify-content: flex-end; padding: 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
          <v-btn
            icon
            variant="text"
            color="white"
            @click="drawer = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>

        <v-list class="sidebar-list" style="background-color: transparent !important; padding: 8px 0;">
          <!-- Pages Section -->
          <v-list-group value="pages">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" class="sidebar-group-title" style="color: white !important;">
                <v-list-item-title style="color: white !important; font-weight: 600;">Pages</v-list-item-title>
              </v-list-item>
            </template>
            
            <v-list-item class="sidebar-item" @click="handleNavigation" style="color: rgba(255, 255, 255, 0.8) !important; padding-left: 40px;">
              <v-list-item-title style="color: rgba(255, 255, 255, 0.8) !important;">Speaker</v-list-item-title>
            </v-list-item>
            <v-list-item class="sidebar-item" @click="handleNavigation" style="color: rgba(255, 255, 255, 0.8) !important; padding-left: 40px;">
              <v-list-item-title style="color: rgba(255, 255, 255, 0.8) !important;">Image Gallery</v-list-item-title>
            </v-list-item>
            <v-list-item class="sidebar-item" @click="handleNavigation" style="color: rgba(255, 255, 255, 0.8) !important; padding-left: 40px;">
              <v-list-item-title style="color: rgba(255, 255, 255, 0.8) !important;">Get Ticket</v-list-item-title>
            </v-list-item>
            <v-list-item class="sidebar-item" @click="handleNavigation" style="color: rgba(255, 255, 255, 0.8) !important; padding-left: 40px;">
              <v-list-item-title style="color: rgba(255, 255, 255, 0.8) !important;">Pricing Table</v-list-item-title>
            </v-list-item>
            <v-list-item class="sidebar-item" @click="handleNavigation" style="color: rgba(255, 255, 255, 0.8) !important; padding-left: 40px;">
              <v-list-item-title style="color: rgba(255, 255, 255, 0.8) !important;">Registration</v-list-item-title>
            </v-list-item>
            <v-list-item class="sidebar-item" @click="handleNavigation" style="color: rgba(255, 255, 255, 0.8) !important; padding-left: 40px;">
              <v-list-item-title style="color: rgba(255, 255, 255, 0.8) !important;">Venus Info</v-list-item-title>
            </v-list-item>
            <v-list-item class="sidebar-item" @click="handleNavigation" style="color: rgba(255, 255, 255, 0.8) !important; padding-left: 40px;">
              <v-list-item-title style="color: rgba(255, 255, 255, 0.8) !important;">FAQ</v-list-item-title>
            </v-list-item>
            <v-list-item class="sidebar-item" @click="handleNavigation" style="color: rgba(255, 255, 255, 0.8) !important; padding-left: 40px;">
              <v-list-item-title style="color: rgba(255, 255, 255, 0.8) !important;">Coming Soon</v-list-item-title>
            </v-list-item>
            <v-list-item class="sidebar-item" @click="handleNavigation" style="color: rgba(255, 255, 255, 0.8) !important; padding-left: 40px;">
              <v-list-item-title style="color: rgba(255, 255, 255, 0.8) !important;">404 Error</v-list-item-title>
            </v-list-item>
          </v-list-group>

          <!-- Speakers Section -->
          <v-list-group value="speakers">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" class="sidebar-group-title" style="color: white !important;">
                <v-list-item-title style="color: white !important; font-weight: 600;">Speakers</v-list-item-title>
              </v-list-item>
            </template>
            
            <v-list-item class="sidebar-item" @click="handleNavigation" style="color: rgba(255, 255, 255, 0.8) !important; padding-left: 40px;">
              <v-list-item-title style="color: rgba(255, 255, 255, 0.8) !important;">All Speakers</v-list-item-title>
            </v-list-item>
            <v-list-item class="sidebar-item" @click="handleNavigation" style="color: rgba(255, 255, 255, 0.8) !important; padding-left: 40px;">
              <v-list-item-title style="color: rgba(255, 255, 255, 0.8) !important;">Keynote Speakers</v-list-item-title>
            </v-list-item>
            <v-list-item class="sidebar-item" @click="handleNavigation" style="color: rgba(255, 255, 255, 0.8) !important; padding-left: 40px;">
              <v-list-item-title style="color: rgba(255, 255, 255, 0.8) !important;">Panel Speakers</v-list-item-title>
            </v-list-item>
          </v-list-group>

          <!-- Resources Section -->
          <v-list-group value="resources">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" class="sidebar-group-title" style="color: white !important;">
                <v-list-item-title style="color: white !important; font-weight: 600;">Resources</v-list-item-title>
              </v-list-item>
            </template>
            
            <v-list-item class="sidebar-item" @click="handleNavigation" style="color: rgba(255, 255, 255, 0.8) !important; padding-left: 40px;">
              <v-list-item-title style="color: rgba(255, 255, 255, 0.8) !important;">Documentation</v-list-item-title>
            </v-list-item>
            <v-list-item class="sidebar-item" @click="handleNavigation" style="color: rgba(255, 255, 255, 0.8) !important; padding-left: 40px;">
              <v-list-item-title style="color: rgba(255, 255, 255, 0.8) !important;">FAQs</v-list-item-title>
            </v-list-item>
            <v-list-item class="sidebar-item" @click="handleNavigation" style="color: rgba(255, 255, 255, 0.8) !important; padding-left: 40px;">
              <v-list-item-title style="color: rgba(255, 255, 255, 0.8) !important;">Contact</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const handleNavigation = () => {
  // Add your navigation logic here
  drawer.value = false
}
</script>

<style scoped lang="scss">
// Desktop dropdown styles
.dropdown-list {
  padding: 16px 0;
  border-radius: 12px;
  min-width: 220px;
}

.dropdown-item {
  color: white !important;
  padding: 12px 24px !important;
  min-height: 48px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  .item-content {
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  .hover-line {
    display: inline-block;
    width: 0;
    overflow: hidden;
    opacity: 0;
    color: white;
    font-size: 18px;
    font-weight: bold;
    transition: all 0.3s ease;
    white-space: nowrap;
  }
  
  .item-text {
    font-size: 16px;
    font-weight: 400;
    color: white;
    transition: all 0.3s ease;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.08) !important;
    
    .hover-line {
      width: 20px;
      opacity: 1;
      margin-right: 12px;
    }
  }
}

// Mobile sidebar styles - Note: using unscoped styles for teleported content
:deep(.mobile-sidebar) {
  background-color: #1a1d3a !important;
  z-index: 9999 !important;
  
  .sidebar-header {
    display: flex;
    justify-content: flex-end;
    padding: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .sidebar-list {
    background-color: transparent !important;
    padding: 8px 0;
  }

  .sidebar-group-title {
    color: white !important;
    font-weight: 600 !important;
    font-size: 16px !important;
    padding: 12px 20px !important;
    
    .v-list-item-title {
      font-weight: 600 !important;
      color: white !important;
    }
  }

  .sidebar-item {
    color: rgba(255, 255, 255, 0.8) !important;
    padding-left: 40px !important;
    padding-right: 20px !important;
    min-height: 44px !important;
    transition: all 0.3s ease;
    
    .v-list-item-title {
      font-size: 15px !important;
      font-weight: 400 !important;
      color: rgba(255, 255, 255, 0.8) !important;
    }
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.08) !important;
      color: white !important;
      
      .v-list-item-title {
        color: white !important;
      }
    }
  }

  // Style the list group activator
  .v-list-group__items {
    background-color: transparent !important;
  }
}

:deep(.v-overlay) {
  z-index: 9998 !important;
}

// Responsive breakpoint
@media (max-width: 768px) {
  .d-md-flex {
    display: none !important;
  }
  
  .d-md-none {
    display: flex !important;
  }
}

@media (min-width: 769px) {
  .d-md-flex {
    display: flex !important;
  }
  
  .d-md-none {
    display: none !important;
  }
}
</style>