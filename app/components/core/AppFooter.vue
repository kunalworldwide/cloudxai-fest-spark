<template>
  <v-footer class="footer-with-bg py-12">
    <v-container fluid class="footer-container">
      <!-- Main Footer Content -->
      <!-- <v-row class="mb-8 px-3" v-if="route.path !== '/register'">
        <v-col cols="12" md="12" class=" cta-btn ga-4 " >
          <span class="" style="color: #fff; font-size: 20px;">
            <span style="font-weight: 600; font-size: 28px;">Secure your spot now at the CLOUDxAI conference.</span> <br> Be a part of the
            cloud shift from automation to intelligence movement.
          </span>
          <br>
          <br>
          <v-btn size="large" append-icon="mdi-arrow-right" color="white" to="/register" rounded="xl" variant="flat" class="mt-2"
            >Register Now</v-btn
          >
        </v-col>
      </v-row> -->
      <v-row class="justify-center">
        <v-col cols="12" lg="11" xl="10">
          <v-row class="text-white justify-space-between">
            <!-- Contact Info Section -->
            <v-col cols="12" md="12" lg="12" class="pa-0">
              <div class="mb-6">
                <h2 class="text-h5 font-weight-bold mb-4">
                  CLOUDxAI Conference
                </h2>
                <!-- <p class="text-body-2 mb-6" style="max-width: 400px">
              CLOUDxAI Conference is the premier destination for technology
              leaders, innovators, and professionals to explore the convergence
              of cloud computing and artificial intelligence in the enterprise
              landscape.
            </p> -->
              </div>

              <div class="mb-4">
                <h3 class="text-subtitle-1 font-weight-bold mb-3">
                  Contact us:
                </h3>
                <div class="d-flex align-center mb-2">
                  <v-icon size="small" class="mr-2">mdi-email-outline</v-icon>
                  <span class="text-body-2">contact@cloudconf.ai</span>
                </div>
                <!-- <div class="d-flex align-center">
              <v-icon size="small" class="mr-2">mdi-phone-outline</v-icon>
              <span class="text-body-2">+1 (555) 123-4567</span>
            </div> -->
              </div>
            </v-col>

            <!-- Address Section -->
            <!-- <v-col cols="12" md="6" lg="4">
          <h3 class="text-subtitle-1 font-weight-bold mb-3">Our address:</h3>
          <div class="d-flex">
            <v-icon size="small" class="mr-2 mt-1">mdi-map-marker-outline</v-icon>
            <div class="text-body-2">
              <p class="mb-1">Conference Center</p>
              <p class="mb-0">San Francisco, CA</p>
              <p class="mb-0">United States of America</p>
            </div>
          </div>
        </v-col> -->

            <!-- Social Links Section -->
            <!-- <v-col cols="12" lg="4">
          <h3 class="text-subtitle-1 font-weight-bold mb-4">Follow us:</h3>
          <div class="d-flex gap-3">
            <v-btn
              icon
              variant="outlined"
              size="small"
              color="white"
              href="https://facebook.com"
              target="_blank"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="outlined"
              size="small"
              color="white"
              href="https://twitter.com"
              target="_blank"
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="outlined"
              size="small"
              color="white"
              href="https://instagram.com"
              target="_blank"
            >
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="outlined"
              size="small"
              color="white"
              href="https://linkedin.com"
              target="_blank"
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="outlined"
              size="small"
              color="white"
              href="https://youtube.com"
              target="_blank"
            >
              <v-icon>mdi-youtube</v-icon>
            </v-btn>
          </div>
        </v-col> -->
          </v-row>

          <!-- <v-row class="mb-8" v-if="route.path !== '/register'">
        <v-col cols="12" md="12" class=" cta-btn ga-4" >
          <span class="" style="color: #fff">
            Secure your spot now at the CLOUDxAI conference and be a part of the
            cloud shift from automation to intelligence movement.
            <br />Tickets are limited, and will be released in batches.
          </span>
          <br>
          <v-btn color="white" to="/register" rounded="xl" variant="flat" class="mt-2"
            >Register Now</v-btn
          >
        </v-col>
      </v-row> -->

          <!-- Divider -->
          <v-divider class="border-opacity-25 mb-6"></v-divider>

          <!-- Bottom Footer -->
          <v-row class="text-white align-center">
            <v-col cols="12" md="6" class="pa-0">
              <p class="text-body-2 mb-0">
                Design and Developed by
                <span class="text-primary font-weight-medium"
                  ><a
                    href="https://techferment.com"
                    style="color: #3a99ff; text-decoration: none"
                    target="_blank"
                    >TechFerment</a
                  ></span
                >
                | All Right Reserved
              </p>
            </v-col>
            <!-- <v-col cols="12" md="6" class="text-md-right">
          <div class="d-flex flex-wrap justify-md-end gap-4">
            <a
              href="#"
              class="text-white text-decoration-none text-body-2 hover-link"
              >Booking Info</a
            >
            <a
              href="#"
              class="text-white text-decoration-none text-body-2 hover-link"
              >Terms & Conditions</a
            >
            <a
              href="#"
              class="text-white text-decoration-none text-body-2 hover-link"
              >Privacy Policy</a
            >
          </div>
        </v-col> -->
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped>
.footer-with-bg {
  background-color: #020d46;
  position: relative;
}

.footer-with-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-image: url("@/assets/images/home-4-img-carousel-svg.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  opacity: 0.1;
  pointer-events: none;
}

.footer-with-bg .v-container {
  position: relative;
  z-index: 1;
}

.hover-link {
  transition: opacity 0.2s ease;
}

.hover-link:hover {
  opacity: 0.7;
}

.gap-3 {
  gap: 12px;
}

.gap-4 {
  gap: 16px;
}

.cta-btn {
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-radius: 16px;
  padding: 32px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset,
    0 0 40px rgba(255, 255, 255, 0.15);
  /* align-items: center;
  justify-content: space-between; */
}

@media (max-width: 768px) {
  .cta-btn {
    padding: 16px;
    /* align-items: flex-start;
    flex-direction: column; */
  }
}

/* @media (min-width: 1440px) {
  .footer-with-bg {
    padding-top: 180px !important;
  }
} */
</style>
