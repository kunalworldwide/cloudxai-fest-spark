<template>
  <v-main>
  <div class="register-container">
    <v-container fluid class="ticket-booking-section">
      <!-- Header Section -->
      <v-row class="justify-center text-center mb-10">
        <v-col cols="12" md="10" lg="8">
          <div class="booking-header">
            <h1 class="main-title">BOOK A CONFERENCE TICKET</h1>
            <p class="subtitle">Book your ticket to attend the conference</p>

            <!-- Date and Time Selection -->
            <div class="date-time-selector">
              <div class="selector-item">
                <p class="selector-label">Date</p>
                <div class="selector-value">
                  <span class="value-number">14</span>
                  <span class="value-text">MAR</span>
                </div>
              </div>

              <div class="selector-divider"></div>

              <div class="selector-item">
                <p class="selector-label">Time</p>
                <div class="selector-value">
                  <span class="value-number">8</span>
                  <span class="value-text">AM</span>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Ticket Cards -->
      <v-row
        class="justify-center"
        v-if="ticketsData && ticketsData.length > 0"
      >
        <v-col cols="12" md="12" lg="9" xl="8">
          <v-row class="justify-center">
            <v-col
              cols="12"
              sm="6"
              md="4"
              v-for="ticket in featuredTickets"
              :key="ticket._id"
            >
              <div class="ticket-card">
                <!-- Price Header with Gradient -->
                <div class="ticket-price-header" :class="`tier-${ticket.tier}`">
                  <div class="price">₹{{ ticket.price }}</div>
                </div>

                <!-- Card Content -->
                <div class="ticket-card-body-container">
                  <div class="ticket-card-body">
                    <h3 class="ticket-tier" v-if="ticket.name">
                      {{ ticket.name.toUpperCase() }}
                    </h3>

                    <p class="ticket-description" v-if="ticket.description">
                      {{ ticket.description }}
                    </p>

                    <!-- Perks List -->
                    <div
                      class="ticket-perks"
                      v-if="ticket.perks && ticket.perks.length > 0"
                    >
                      <div
                        class="perk-item"
                        v-for="(perk, idx) in ticket.perks"
                        :key="idx"
                      >
                        <v-icon size="16" color="primary"
                          >mdi-check-circle</v-icon
                        >
                        <span>{{ perk }}</span>
                      </div>
                    </div>

                    <!-- Additional Features -->
                    <div class="ticket-features">
                      <div class="feature-item">
                        <v-icon size="16">mdi-ticket-confirmation</v-icon>
                        <span>Certificate included</span>
                      </div>
                      <div class="feature-item" v-if="ticket.tier !== 'basic'">
                        <v-icon size="16">mdi-seat</v-icon>
                        <span>Reserved seating</span>
                      </div>
                      <div class="feature-item" v-if="ticket.tier === 'gold'">
                        <v-icon size="16">mdi-account-group</v-icon>
                        <span>Networking access</span>
                      </div>
                    </div>

                    <!-- Quantity Info -->
                    <div class="ticket-quantity">
                      <v-icon size="14" class="mr-1">mdi-ticket</v-icon>
                      <span>{{ ticket.quantity }} tickets available</span>
                    </div>
                  </div>
                  <!-- CTA Button -->
                  <v-btn
                    class="ticket-cta-btn"
                    size="large"
                    block
                    variant="flat"
                    :class="`tier-${ticket.tier}-btn`"
                    @click="bookTicket(ticket._id)"
                  >
                    Book Now
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- Show s till tickets are loaded -->
      <v-row
        style="max-width: 1200px; margin: 0 auto"
        v-if="!ticketsData || ticketsData.length === 0"
      >
        <v-col cols="12" md="12" class="d-flex justify-center align-center">
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-col>
      </v-row>
      
    </v-container>
    
  </div>
</v-main>
  <HomeCountDown />
</template>

<script setup>
const ticketsData = ref([]);

const getAllTickets = async () => {
  try {
    // let url ="https://demotechevent.vercel.app/api/events/689b4ef291f77a93a402d4db"
    let url = "https://techmilap.com/api/events/691ad96d85cd703cf3deff95";
    const response = await $fetch(url);
    console.log(response);
    ticketsData.value = response.tickets || [];
  } catch (error) {
    console.error("Error fetching tickets:", error);
  }
};

// Show all tickets sorted by price
const featuredTickets = computed(() => {
  if (!ticketsData.value || ticketsData.value.length === 0) {
    return [];
  }
  return [...ticketsData.value].sort((a, b) => a.price - b.price);
});

const bookTicket = (ticketId) => {
  // https://techmilap.com/events/691ad96d85cd703cf3deff95/forms/attendee?ticketTemplateId=691ad98185cd703cf3deffad
  let url = `https://techmilap.com/events/691ad96d85cd703cf3deff95/forms/attendee?ticketTemplateId=${ticketId}`;
  window.open(url, "_blank");
};

// Get the base URL for og:image

onMounted(() => {
  getAllTickets();
});

// SEO
useHead({
  title: "Book a Conference Ticket",
  meta: [
    {
      name: "description",
      content: "Book your ticket to attend the conference",
    },
    { name: "keywords", content: "conference, ticket, booking, event" },
    { name: "author", content: "TechMilap" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "bingbot", content: "index, follow" },
    { name: "yandexbot", content: "index, follow" },
    {
      name: "og:image",
      content:
        "https://raw.githubusercontent.com/TechFerment/images/refs/heads/main/cxaix.jpg",
    },
    { name: "og:title", content: "Book a Conference Ticket" },
    {
      name: "og:description",
      content: "Book your ticket to attend the conference",
    },
    { name: "og:url", content: "https://cloudconf.ai/" },
    { name: "og:type", content: "website" },
    { name: "og:locale", content: "en_US" },
    { name: "og:site_name", content: "Book a Conference Ticket" },
    { name: "og:image:width", content: "1200" },
    { name: "og:image:height", content: "630" },
  ],
});
</script>

<style scoped lang="scss">
.register-container {
  // background-image: url('@/assets/images/home.jpg');
  // background-size: contain;
  // background-repeat: no-repeat;
  // background: linear-gradient(135deg, #0a1435 0%, #1a2b5e 50%, #3a99ff 100%);
  // background: linear-gradient(135deg, #0a1435 0%, #1a2b5e 50%, #3A99Ff 100%);
  min-height: 100vh;
  padding-bottom: 80px;
  position: relative;
  overflow: hidden;

  // Decorative circles background
  // &::before {
  //   content: '';
  //   position: absolute;
  //   width: 300px;
  //   height: 300px;
  //   border-radius: 50%;
  //   background: rgba(255, 255, 255, 0.05);
  //   top: 10%;
  //   left: -100px;
  //   animation: float 6s ease-in-out infinite;
  // }

  // &::after {
  //   content: '';
  //   position: absolute;
  //   width: 400px;
  //   height: 400px;
  //   border-radius: 50%;
  //   background: rgba(255, 255, 255, 0.03);
  //   bottom: -100px;
  //   right: -150px;
  //   animation: float 8s ease-in-out infinite reverse;
  // }
}

// @keyframes float {
//   0%, 100% {
//     transform: translateY(0px);
//   }
//   50% {
//     transform: translateY(20px);
//   }
// }

.ticket-booking-section {
  position: relative;
  z-index: 1;
}

.booking-header {
  color: #1e3a8a;
  margin-bottom: 40px;

  .main-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 8px;
    // text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .subtitle {
    font-size: clamp(1rem, 2vw, 1.25rem);
    opacity: 0.9;
    margin-bottom: 40px;
  }
}

.date-time-selector {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  max-width: 600px;
  margin: 0 auto;
  background: rgb(243, 243, 243);
  border-radius: 8px;
  padding: 20px;
  backdrop-filter: blur(10px);

  .selector-item {
    flex: 1;
    text-align: center;

    .selector-label {
      font-size: 0.875rem;
      // text-transform: lowercase;
      opacity: 0.9;
      margin-bottom: 8px;
    }

    .selector-value {
      display: flex;
      align-items: baseline;
      justify-content: center;
      gap: 8px;

      .value-number {
        font-size: clamp(2.5rem, 6vw, 4rem);
        font-weight: 700;
        line-height: 1;
      }

      .value-text {
        font-size: clamp(1.25rem, 3vw, 2rem);
        font-weight: 500;
        opacity: 0.9;
      }
    }
  }

  .selector-divider {
    width: 2px;
    height: 60px;
    background: rgba(255, 255, 255, 0.3);
  }
}

.ticket-card {
  border-radius: 16px;
  overflow: hidden;
  background: white;
  // box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 1px solid #d4d4d4;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 20px rgba(0, 0, 0, 0.1);
  }
}

.ticket-price-header {
  padding: 40px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &.tier-basic {
    background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  }

  &.tier-silver {
    background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
  }

  &.tier-gold {
    background: linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%);
  }

  .price {
    font-size: clamp(3rem, 6vw, 4.5rem);
    font-weight: 700;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
}

.ticket-card-body-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 32px 24px;
}
.ticket-card-body {
  flex: 1;
  display: flex;
  flex-direction: column;

  .ticket-tier {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1f2937;
    text-align: center;
    margin-bottom: 16px;
    letter-spacing: 1px;
  }

  .ticket-description {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 20px;
    line-height: 1.6;
    text-align: center;
    min-height: 80px;
  }

  .ticket-perks {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;

    .perk-item {
      display: flex;
      // align-items: center;
      // justify-content: center;
      gap: 8px;
      font-size: 0.875rem;
      color: #374151;

      span {
        font-weight: 500;
      }
    }
  }

  .ticket-features {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;

    .feature-item {
      display: flex;
      //align-items: center;
      //justify-content: center;
      gap: 8px;
      font-size: 0.8125rem;
      color: #6b7280;
    }
  }

  .ticket-quantity {
    display: flex;
    //align-items: center;
    //justify-content: center;
    font-size: 0.75rem;
    color: #9ca3af;
    margin-bottom: 20px;
    padding: 8px;
    background: #f9fafb;
    border-radius: 6px;
  }
}
.ticket-cta-btn {
  // margin-top: auto;
  max-height: 44px;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 12px;
  text-transform: uppercase;
  font-size: 0.875rem;

  &.tier-basic-btn {
    background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%) !important;
    color: white;
  }

  &.tier-silver-btn {
    background: linear-gradient(
      135deg,
      #1e40af 0%,
      #3b82f6 50%,
      #60a5fa 100%
    ) !important;
    color: white;
  }

  &.tier-gold-btn {
    background: linear-gradient(
      135deg,
      #2563eb 0%,
      #3b82f6 50%,
      #60a5fa 100%
    ) !important;
    color: white;
  }
}

// Responsive adjustments
@media (max-width: 960px) {
  .register-container {
    // padding-top: 60px;
    padding-bottom: 60px;
  }

  .ticket-card {
    margin-bottom: 24px;
  }
}

@media (max-width: 600px) {
  .register-container {
    // padding-top: 40px;
    padding-bottom: 40px;
  }

  .date-time-selector {
    padding: 16px;

    .selector-divider {
      height: 40px;
    }
  }

  .booking-header {
    .main-title {
      font-size: 1.75rem;
    }
  }

  .ticket-card-body-container {
    padding: 24px 20px;
  }
  .ticket-card-body {
    .ticket-description {
      min-height: auto;
    }
  }
}
</style>