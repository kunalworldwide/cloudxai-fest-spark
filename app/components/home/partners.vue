<template>
  <!-- <section class="partners-section" id="partners">
    <div class="partners-container" >

      <h2 class="partners-title mb-2">OUR <span>Sponsors</span></h2>
      <div class="partners-title-content">
      <p>Partner with us to showcase your innovation and connect with industry leaders at CLOUDxAI, Bengaluru 2026</p>
      <v-btn
        to="/sponsors"
        size="large"
        rounded="xl"
        variant="tonal"
        append-icon="mdi-arrow-right"
        color="white"
        class="mb-7 mt-5"
        >Become a Sponsor</v-btn
      >
    </div>



      <div class="partners-grid-2 text-center" style="max-width: 700px; margin: 0 auto;">
        <div v-for="partner in partners" :key="partner.id" class="partner-card">
          <div class="partner-logo">
            <p class="text-medium font-weight-bold custom-text">{{ partner.name }}</p>
            <p class="text-medium font-weight-bold custom-text">Coming <br> Soon</p>
            <img :src="partner.logo" :alt="partner.name" />
          </div>
          <div
            class="partner-tier"
            :class="`tier-${partner.tier.toLowerCase()}`"
          >
            {{ partner.tier }}
          </div>
        </div>
      </div>
    </div>

    
  </section> -->
  <section class="partners-section partners-section-2">
    <div class="partners-container partners-container-2 text-center">
      
      <h2 class="partners-title mb-12" >OUR <span>Partners</span></h2>

      <div class="partners-grid-2">
        <div
          v-for="partner in communityPartnersData"
          :key="partner.name"
          class="partner-card-2"
        >
          <v-tooltip :text="`${partner.name}`" location="bottom">
            <template v-slot:activator="{ props }">
              <div class="partner-logo" v-bind="props">
                <a
                  :href="partner.link"
                  target="_blank"
                  class="text-center d-flex align-center justify-center"
                >
                  <img
                    :src="`/images/partners/${partner.image}`"
                    :alt="partner.name"
                  />
                </a>
              </div>
            </template>
          </v-tooltip>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import communityPartners from "@/assets/data/community-partners.json";
const communityPartnersData = ref(communityPartners);
const partners = [
  {
    id: 1,
    name: "Coming Soon",
    // logo: "https://demo.bravisthemes.com/festiva/wp-content/uploads/2024/08/home-4-svg-3-1.svg",
    tier: "General",
  },
  {
    id: 2,
    name: "Coming Soon",
    // logo: "https://demo.bravisthemes.com/festiva/wp-content/uploads/2024/08/home-4-svg-3-1.svg",
    tier: "Graphene",
  },
  {
    id: 3,
    name: "Coming Soon",
    // logo: "https://demo.bravisthemes.com/festiva/wp-content/uploads/2024/08/home-4-svg-4-1.svg",
    tier: "Platinum",
  },
  
  
];
</script>

<style scoped lang="scss">
.partners-section {
  min-height: max-content;
  background: linear-gradient(135deg, #0a1628 0%, #1a2f4f 50%, #0a1628 100%);
  padding: 100px 20px;
  position: relative;
  overflow: hidden;

  // &::before {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background: radial-gradient(circle at 20% 30%, #0a1435 0%, transparent 50%),
  //     radial-gradient(circle at 80% 70%, #0a1435 0%, transparent 50%);
  //   pointer-events: none;
  // }
}

.partners-section-2 {
  // background: white;
  background: linear-gradient(135deg, #0a1628 0%, #1a2f4f 50%, #0a1628 100%);

  border-bottom: 1px solid #dedede;

}

.partners-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}



.partners-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  line-height: 100%;
  text-align: center;
  color: white;
  letter-spacing: 2px;
  text-transform: uppercase;
  span {
    font-weight: 700;
  }
}

.partners-title-content{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
&>p{
  color: white;
}
}

.custom-text{
  color: #bdbdbd;
  font-size: 20px;
  font-style: italic;
  line-height: 100%;
  transform: rotate(-10deg);
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

.partners-grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 30px;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

.partner-card,
.partner-card-2 {
  background: #ffffff;
  border-radius: 20px;
  // padding: 40px 30px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  backdrop-filter: blur(10px);
  border: 1px solid #828282;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-height: 100px;


  // &::before {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background: #ffffff;
  //   opacity: 0;
  //   transition: opacity 0.4s ease;
  // }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4),
      0 0 40px rgba(198, 198, 198, 0.776);
    // &::before {
    //   opacity: 1;
    // }
    .partner-logo img {
      transform: scale(1.1);
    }
  }
}


.partner-logo {
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

  img {
    max-width: 80%;
    max-height: 100px;
    height: auto;
    object-fit: contain;
    filter: brightness(1.2) contrast(1.1);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.partner-tier {
  position: absolute;
  bottom: 20px;
  padding: 8px 24px;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: capitalize;
  z-index: 2;
  letter-spacing: 0.5px;
  border: 2px solid;
  transition: all 0.3s ease;

  // Gold tier
  &.tier-gold {
    background: linear-gradient(
      135deg,
      rgba(255, 193, 7, 0.2) 0%,
      rgba(255, 160, 0, 0.2) 100%
    );
    color: #ffd54f;
    border-color: #ffc107;
    box-shadow: 0 0 20px rgba(255, 193, 7, 0.3);
  }

  // Silver tier
  &.tier-silver {
    background: linear-gradient(
      135deg,
      rgba(189, 195, 199, 0.2) 0%,
      rgba(149, 165, 166, 0.2) 100%
    );
    color: #bdc3c7;
    border-color: #95a5a6;
    box-shadow: 0 0 20px rgba(189, 195, 199, 0.3);
  }

  // Platinum tier
  &.tier-platinum {
    background: linear-gradient(
      135deg,
      rgba(99, 179, 237, 0.2) 0%,
      rgba(81, 160, 224, 0.2) 100%
    );
    color: #63b3ed;
    border-color: #51a0e0;
    box-shadow: 0 0 20px rgba(99, 179, 237, 0.3);
  }

  // General tier
  &.tier-general {
    background: linear-gradient(
      135deg,
      rgba(99, 179, 237, 0.15) 0%,
      rgba(100, 181, 246, 0.15) 100%
    );
    color: #90caf9;
    border-color: #64b5f6;
    box-shadow: 0 0 20px rgba(100, 181, 246, 0.25);
  }

  // Graphene tier (yellow/gold)
  &.tier-graphene {
    background: linear-gradient(
      135deg,
      rgba(255, 235, 59, 0.2) 0%,
      rgba(253, 216, 53, 0.2) 100%
    );
    color: #ffeb3b;
    border-color: #fdd835;
    box-shadow: 0 0 20px rgba(255, 235, 59, 0.3);
  }

  // Hosting Partner tier
  &.tier-hosting {
    background: linear-gradient(
      135deg,
      rgba(99, 179, 237, 0.2) 0%,
      rgba(81, 160, 224, 0.2) 100%
    );
    color: #63b3ed;
    border-color: #51a0e0;
    box-shadow: 0 0 20px rgba(99, 179, 237, 0.3);
  }
}

// Additional responsive adjustments
@media (max-width: 1200px) {
  .partners-section {
    padding: 80px 20px;
  }

  .partners-title {
    margin-bottom: 60px;
  }
}

@media (max-width: 768px) {
  .partners-container-2 {
    margin-top: 80px;
  }
  .partners-section {
    padding: 60px 15px;
  }

  .partners-title {
    margin-bottom: 40px;
  }

  .partner-card {
    padding: 30px 20px 55px;
    min-height: 150px;
  }

  .partner-logo img {
    max-height: 80px;
  }

  .partner-tier {
    bottom: 15px;
    padding: 6px 18px;
    font-size: 0.75rem;
  }
}
</style>
