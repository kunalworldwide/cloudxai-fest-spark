<template>
  <v-main>
    <div class="sponsor-package-container">
      <div class="top-section">
        <h1 class="main-title text-white text-center">Sponsorship Opportunities</h1>
        <p class="subtitle text-white text-center" style="max-width: 800px;">Partner with us to showcase your innovation
          and connect with industry leaders at CLOUDxAI, Bengaluru 2026</p>
      </div>
      <v-container fluid class="py-10">

        <!-- <v-row class="justify-center text-center ">
         
          <v-col cols="12" md="10">
            <h1 class="main-title">Main Sponsorship Packages</h1>
          </v-col>
        </v-row> -->

        <!-- <v-row class="justify-center desktop-table-view mt-10">
          <v-col cols="12" style="max-width: 1400px;">
            <div class="sponsor-table-wrapper">
              <table class="sponsor-table">
                <thead>
                  <tr>
                    <th class="feature-column">Features</th>
                    <th 
                      v-for="pkg in packages" 
                      :key="pkg.id" 
                      :class="['package-column', pkg.class]"
                    >
                      <div class="package-header">
                        <span class="package-name">{{ pkg.name }}</span>
                        <span class="package-slots" v-if="pkg.slots">{{ pkg.slots }}</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(feature, key) in featureRows" :key="key" :class="{ 'price-row': key === 'price' }">
                    <td class="feature-label">{{ feature.label }}</td>
                    <td 
                      v-for="pkg in packages" 
                      :key="pkg.id"
                      :class="{ 'price': key === 'price' }"
                      v-html="key === 'price' ? pkg.price : pkg.features[key]?.value"
                    ></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </v-col>
          
        </v-row> -->

        <!-- <v-row class="justify-center mobile-card-view">
          <v-col cols="12" sm="10" md="8" lg="6" v-for="pkg in packages" :key="pkg.id">
            <div class="sponsor-card" :class="pkg.class">
              <div class="card-header">
                <h2 class="package-name">{{ pkg.name }}</h2>
                <p class="package-slots" v-if="pkg.slots">{{ pkg.slots }}</p>
                <h3 class="package-price">{{ pkg.price }}</h3>
              </div>

              <div class="card-body">
                <div 
                  v-for="(feature, key) in pkg.features" 
                  :key="key" 
                  class="feature-item"
                >
                  <span class="feature-label">{{ feature.label }}</span>
                  <span class="feature-value" v-html="feature.value"></span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row> -->

        <v-row class="justify-center flex-column text-center">
          <!-- <div>
            <p class="text-small text-center">*The sponsor speaking talk should have technical content.</p>
            <p class="text-small text-center">**All taxes are included to the price.</p>
          </div> -->

          <!-- <div class="additional-pkg mt-10">
            <div class="additional-pkg-item">
              <h2>Additional Packages</h2>
              <p class="text-small text-gray mb-2">(request details via email below)</p>
              <ul class="additional-pkg-list" >
                <li>
                  <p>Lanyard package</p>
                </li>
                <li>
                  <p>T-shirt package</p>
                </li>
                <li>
                  <p>Photo-zone package</p>
                </li>
                <li>
                  <p>Raffle at the main stage</p>
                </li>
                <li>
                  <p>Offer your option</p>
                </li>
               
              </ul>
            </div>
          </div> -->
        </v-row>

        <!-- Current Sponsors Section -->
        <v-row class="justify-center mt-10 mb-10">
          <v-col cols="12" md="10">
            <div class="current-sponsors-section">
              <h2 class="sponsors-section-title">Our Current Sponsors</h2>
              
              <!-- Title Sponsor -->
              <div class="sponsor-tier-section">
                <h3 class="tier-label title-tier">Title Sponsor</h3>
                <div class="sponsors-grid title-sponsor-grid">
                  <div class="sponsor-item title-sponsor">
                    <a href="https://cast.ai" target="_blank" class="sponsor-link">
                      <img src="/images/partners/castaidark.png" alt="Cast AI" class="sponsor-logo" />
                    </a>
                  </div>
                </div>
              </div>

              <!-- Diamond Sponsors -->
              <div class="sponsor-tier-section">
                <h3 class="tier-label diamond-tier">Diamond Sponsors</h3>
                <div class="sponsors-grid diamond-sponsors-grid">
                  <div 
                    v-for="sponsor in diamondSponsors" 
                    :key="sponsor.id" 
                    class="sponsor-item diamond-sponsor"
                  >
                    <a :href="sponsor.link" target="_blank" class="sponsor-link">
                      <img 
                        :src="`/images/partners/${sponsor.image}`" 
                        :alt="sponsor.name" 
                        class="sponsor-logo" 
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row class="justify-center text-center mt-10">
          <v-col cols="12" md="8">
            <p class="contact-text">Ready to become a sponsor?</p>
            <p class="text-small font-weight-light mb-8">Contact us to discuss sponsorship opportunities
              contact@cloudconf.ai</p>
            <v-btn rounded elevation="0" size="large" color="#339CFF" href="https://forms.gle/Fva2b3wmocRkiw4PA"
              target="_blank" class="contact-btn">
              Contact Us
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
  <HomeCountDown />
</template>

<script setup>
import sponsorPackagesData from '~/assets/data/sponsor-packages.json';

const packages = sponsorPackagesData;

const featureRows = {
  speakingSlot: { label: 'Speaking slot' },
  booth: { label: 'Booth' },
  tickets: { label: 'Tickets' },
  socialMedia: { label: 'Social media' },
  website: { label: 'Website, brandwall onsite' },
  logoStage: { label: 'Logo at the stage' },
  slideDecks: { label: 'Slide decks' },
  welcomeBag: { label: 'Welcome bag' },
  price: { label: 'Investments**' }
};

// Diamond sponsors data
const diamondSponsors = [
  {
    id: 1,
    name: "KodeKloud",
    image: "kodekloud.png",
    link: "https://kodekloud.com/",
  },
  {
    id: 2,
    name: "AWS",
    image: "aws.png",
    link: "https://aws.amazon.com/",
  }
];

useHead({
  title: "Sponsorship Opportunities - CLOUDxAI Conference 2026 Bengaluru",
  titleTemplate: "Sponsorship Opportunities - CLOUDxAI Conference 2026 Bengaluru",
  description:
    "CloudxAI 2026 Bengaluru: The meeting ground for DevOps & AI engineers building the future of intelligent infrastructure.",
  keywords:
    "conference, event, CLOUDxAI, bengaluru, Developers, AI, Agents, India, Conference",
  author: "TechFerment",
  robots: "index, follow",
  googlebot: "index, follow",
  bingbot: "index, follow",
  yandexbot: "index, follow",
  ogTitle: "Sponsorship Opportunities - CLOUDxAI Conference 2026 Bengaluru",
  ogDescription:
    "CloudxAI 2026 Bengaluru: The meeting ground for DevOps & AI engineers building the future of intelligent infrastructure.",
  ogImage:
    "https://raw.githubusercontent.com/TechFerment/images/refs/heads/main/cxaixcover.jpg",
  ogUrl: "https://cloudconf.ai/",
  ogType: "website",
  ogLocale: "en_US",
  ogSiteName: "Sponsorship Opportunities - CLOUDxAI Conference 2026 Bengaluru",
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
    { property: "og:title", content: "Sponsorship Opportunities - CLOUDxAI Conference 2026 Bengaluru" },
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
      content: "Sponsorship Opportunities - CLOUDxAI Conference 2026 Bengaluru Banner",
    },
    { property: "og:url", content: "https://cloudconf.ai/" },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "en_US" },
    { property: "og:site_name", content: "Sponsorship Opportunities - CLOUDxAI Conference 2026 Bengaluru" },
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Sponsorship Opportunities - CLOUDxAI Conference 2026 Bengaluru" },
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
      content: "Sponsorship Opportunities - CLOUDxAI Conference 2026 Bengaluru Banner",
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

<style scoped lang="scss">
.sponsor-package-container {
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.top-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 32px;
  background: #060633;
  width: 100%;
}

.main-title {
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
}

.subtitle {
  font-size: 20px;
  color: #666;
  margin-bottom: 0;
}

// Desktop Table View
.desktop-table-view {
  // display: block;

  @media (max-width: 1019px) {
    display: none;
  }
}

.sponsor-table-wrapper {
  overflow-x: auto;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.sponsor-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;

  thead {


    th {
      padding: 24px 16px;
      text-align: left;
      font-weight: 600;
      background: #339CFF;
      color: white;
      border-right: 1px solid #d0d0d0;

      &:last-child {
        border-right: none;
      }

      &.feature-column {
        font-size: 20px;
      }

      &.package-column {
        text-align: center;

        .package-header {
          display: flex;
          flex-direction: column;
          gap: 4px;

          .package-name {
            font-size: 20px;
            font-weight: 700;
          }

          .package-slots {
            font-size: 14px;
            font-weight: 400;
            opacity: 0.9;
          }
        }
      }
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #e0e0e0;

      &:last-child {
        border-bottom: none;
      }

      &.price-row {
        background: #f8f9fa;

        td {
          padding: 24px 16px;
          font-weight: 700;

          &.price {
            font-size: 24px;
            color: #4A90E2;
            text-align: center;
          }
        }
      }
    }

    td {
      padding: 20px 16px;
      vertical-align: top;
      text-align: center;
      border-right: 1px solid #e0e0e0;

      &:last-child {
        border-right: none;
      }

      &.feature-label {
        text-align: left;
        font-weight: 600;
        color: #1a1a1a;
        background: #fafbfc;
      }

      strong {
        font-weight: 700;
        color: #1a1a1a;
      }
    }
  }
}

// Mobile Card View
.mobile-card-view {
  display: none;

  @media (max-width: 1019px) {
    display: flex;
  }
}

.sponsor-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  .card-header {
    padding: 32px 24px;
    text-align: center;
    background: #339CFF;
    color: white;

    .package-name {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .package-slots {
      font-size: 16px;
      margin-bottom: 16px;
      opacity: 0.9;
    }

    .package-price {
      font-size: 36px;
      font-weight: 700;
      margin-top: 16px;
    }
  }

  .card-body {
    padding: 24px;


    .feature-item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 16px 0;
      border-bottom: 1px solid #e0e0e0;

      &:last-child {
        border-bottom: none;
      }

      .feature-label {
        font-weight: 600;
        color: #1a1a1a;
        flex: 0 0 40%;
      }

      .feature-value {
        text-align: right;
        color: #333;
        flex: 0 0 55%;

        strong {
          font-weight: 700;
          color: #1a1a1a;
        }
      }
    }
  }
}


.additional-pkg {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  padding: 64px 0;
}

.additional-pkg-item {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e0e0e0;
  min-width: 700px;
  padding: 24px;

  @media(max-width: 768px) {
    min-width: calc(100% - 32px);
  }
}

.additional-pkg-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &>li {
    position: relative;
    padding-left: 18px;
    text-align: left;

    &::before {
      content: '•';
      position: absolute;
      font-size: 32px;
      line-height: 75%;
      left: 0;
      color: rgb(55, 135, 255);
      font-weight: bold;
    }

    p {
      margin: 0;
      font-size: 16px;
      color: #333;
    }
  }
}

.contact-text {
  font-size: 32px;
  font-weight: 600;
  color: #1a1a1a;
}

.contact-btn {
  padding: 12px 48px !important;
  font-size: 18px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.5px;
}

// Current Sponsors Section
.current-sponsors-section {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 48px 32px;
  margin: 40px 0;

  @media (max-width: 768px) {
    padding: 32px 20px;
  }
}

.sponsors-section-title {
  font-size: 36px;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.sponsor-tier-section {
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
}

.tier-label {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 32px;
  padding: 12px 24px;
  border-radius: 8px;
  display: inline-block;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 24px;
    padding: 10px 20px;
  }

  &.title-tier {
    background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
    color: #1a1a1a;
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
  }

  &.diamond-tier {
    background: linear-gradient(135deg, #B9F2FF 0%, #87CEEB 100%);
    color: #1a1a1a;
    box-shadow: 0 4px 15px rgba(185, 242, 255, 0.3);
  }
}

.sponsors-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 24px;
  }
}

.title-sponsor-grid {
  justify-content: center;
}

.diamond-sponsors-grid {
  justify-content: center;
}

.sponsor-item {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 2px solid #e0e0e0;
  min-height: 180px;
  min-width: 250px;

  @media (max-width: 768px) {
    min-width: 200px;
    padding: 24px;
    min-height: 150px;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    border-color: #339CFF;
  }

  &.title-sponsor {
    min-width: 300px;
    padding: 40px;

    @media (max-width: 768px) {
      min-width: 250px;
      padding: 32px;
    }
  }

  &.diamond-sponsor {
    min-width: 250px;

    @media (max-width: 768px) {
      min-width: 200px;
    }
  }
}

.sponsor-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
}

.sponsor-logo {
  max-width: 100%;
  max-height: 120px;
  height: auto;
  object-fit: contain;
  filter: brightness(1) contrast(1);
  transition: transform 0.3s ease;

  .sponsor-item:hover & {
    transform: scale(1.05);
  }

  .title-sponsor & {
    max-height: 140px;

    @media (max-width: 768px) {
      max-height: 100px;
    }
  }

  .diamond-sponsor & {
    max-height: 100px;

    @media (max-width: 768px) {
      max-height: 80px;
    }
  }
}

@media(max-width: 500px) {
  .sponsor-card {

    .card-header {
      padding: 24px;

      .package-name {
        font-size: 24px;
      }

      .package-slots {
        font-size: 16px;
        margin-bottom: 16px;
        opacity: 0.9;
      }

      .package-price {
        font-size: 24px;
      }
    }

    .card-body {
      padding: 16px;

      .feature-item {
        .feature-label {
          font-size: 14px;
        }

        .feature-value {
          font-size: 14px;
        }
      }
    }
  }

}
</style>