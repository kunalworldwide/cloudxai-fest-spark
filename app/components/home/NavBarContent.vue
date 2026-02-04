<template>
  <div>
    <!-- Desktop Navigation (visible above 768px) -->
    <div class="d-none d-md-flex align-center ga-2">
      <v-btn variant="text" class="text-none nav-btn" to="/" rounded="xl" color="white">
        Home
      </v-btn>
      <v-btn variant="text" class="text-none nav-btn" to="/speakers" rounded="xl" color="white">
        Speakers
      </v-btn>

      <v-btn variant="text" class="text-none nav-btn" to="/agenda" rounded="xl" color="white">
        Agenda
      </v-btn>

      <v-btn variant="text" class="text-none nav-btn" to="/badge" rounded="xl" color="white">
        Badge
      </v-btn>

      <v-btn variant="text" class="text-none nav-btn" to="/organiser" rounded="xl" color="white">
        Organiser
      </v-btn>

      <v-btn variant="text" class="text-none nav-btn" to="/sponsors" rounded="xl" color="white">
        Sponsorship
      </v-btn>

      <!-- <v-btn
            v-bind="props"
            variant="text"
            color="white"
            class="text-none nav-btn"

          >
            Contact Us
          </v-btn> -->

      <div class="d-flex" style="gap: 0px">
        <v-btn icon size="small" v-if="props.showSocialIcons" :color="props.socialLogoColor"
          href="https://www.linkedin.com/company/cloud-x-ai/" target="_blank">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>

        <v-btn icon size="small" v-if="props.showSocialIcons" :color="props.socialLogoColor"
          href="https://x.com/cloudxaiconf" target="_blank">
          <img src="/images/icon/x.svg" alt="Twitter" class="icon-img" style="width: 12px; height: 12px" />
        </v-btn>
        <!-- <v-btn
              icon
              size="small"
              :color="props.socialLogoColor"
              href="https://instagram.com"
              target="_blank"
            >
              <v-icon>mdi-instagram</v-icon>
            </v-btn> -->
      </div>
    </div>

    <!-- Mobile Hamburger Menu (visible below 768px) -->
    <div class="d-flex d-md-none">
      <v-btn icon variant="text" color="white" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>

    <!-- Mobile Sidebar Navigation - Teleported to body to avoid container constraints -->
    <Teleport to="body">
      <v-navigation-drawer v-model="drawer" temporary location="right" class="mobile-sidebar" width="280"
        style="background-color: #1a1d3a !important; z-index: 9999 !important">
        <div class="sidebar-header" style="
            display: flex;
            justify-content: flex-end;
            padding: 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          ">
          <v-btn icon variant="text" color="white" @click="drawer = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>

        <div class="sidebar-buttons" style="padding: 8px 16px">
          <v-btn variant="text" color="white" class="text-none" to="/">
            Home
          </v-btn>

          <v-btn variant="text" color="white" class="text-none" to="/register">
            Register
          </v-btn>

          <v-btn variant="text" color="white" class="text-none" to="/speakers">
            Speakers
          </v-btn>

          <v-btn variant="text" color="white" class="text-none" to="/agenda">
            Agenda
          </v-btn>

          <v-btn variant="text" color="white" class="text-none" to="/badge">
            Badge
          </v-btn>

          <v-btn variant="text" color="white" class="text-none" to="/sponsors">
            Sponsors
          </v-btn>

          <v-btn variant="text" color="white" class="text-none" to="/organiser">
            Organiser
          </v-btn>

          <v-btn variant="text" color="white" class="text-none" target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScNjTHO5UeHCI5pcDEMD-FXBHa7PG8auuOS63x6Tmkx7konaQ/viewform?pli=1">
            Call For Papers
          </v-btn>
          <!-- <v-btn disabled variant="text" color="white" class="text-none" to="/">
            Agenda (Coming Soon)
          </v-btn> -->

          <!-- <v-btn variant="text" color="white" class="text-none" to="/">
            About Us
          </v-btn> -->

          <div class="d-flex justify-center mt-4" style="gap: 24px">
            <v-btn variant="outlined" icon size="small" color="white" href="https://x.com/cloudxaiconf" target="_blank">
              <img src="/images/icon/x.svg" alt="Twitter" class="icon-img" style="width: 12px; height: 12px" />
            </v-btn>

            <v-btn variant="outlined" icon size="small" color="white"
              href="https://www.linkedin.com/company/cloud-x-ai/" target="_blank">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </div>
      </v-navigation-drawer>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  socialLogoColor: {
    type: String,
    default: "white",
  },
  showSocialIcons: {
    type: Boolean,
    default: true,
  },
});

const drawer = ref(false);
const route = useRoute();

const scrollToSection = (sectionId) => {
  drawer.value = false;
  if (route.path !== "/" && route.name !== "index") {
    navigateTo("/");
  }

  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100);
};

const handleNavigation = () => {
  // Add your navigation logic here
  drawer.value = false;
};
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
}

.sidebar-buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
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
