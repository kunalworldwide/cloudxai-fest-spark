<template>
  <div class="d-flex align-center ga-2">
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
</template>

<script>

</script>

<style scoped lang="scss">
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
</style>