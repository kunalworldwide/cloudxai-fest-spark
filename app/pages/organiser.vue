<template>
  <v-main>
    <v-container fluid class="pb-0" style="max-width: 1800px">
      <v-row class="my-10">
        <v-col cols="12" class="text-center">
          <h1 class="text-h2">ORGANISER</h1>
          <p>Meet the people behind the event</p>

          <v-container fluid class="mt-8">
            <v-row justify="center" align="center">
              <v-col
                md="3"
                sm="6"
                cols="12"
                xl="2"
                xxl="2"
                v-for="member in team"
                :key="member.name"
              >
                <v-card variant="flat" rounded="lg">
                  <v-avatar :size="width > 600 ? 200 : 150">
                    <img
                      :src="
                        member.image
                          ? `/images/team/${member.image}`
                          : '/images/defaultAvatar.png'
                      "
                      :alt="member.name"
                      width="100%"
                    />
                  </v-avatar>
                  <h2 class="mt-4">{{ member.name }}</h2>
                  <p>{{ member.role }}</p>

                  <!-- social media icons -->
                  <v-btn
                    v-for="social in member.socials"
                    :key="social.name"
                    :href="social.url"
                    target="_blank"
                    variant="text"
                    :icon="social.icon"
                    rel="noopener noreferrer"
                  ></v-btn>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>

        <v-col v-if="false" cols="12" class="text-center">
          <h1 class="text-h2">Volunteers</h1>
          <p>
            Thank you to all the volunteers who helped make this event possible
          </p>

          <v-container fluid class="mt-8">
            <v-row justify="center" align="center">
              <v-col
                md="3"
                sm="6"
                cols="12"
                xl="2"
                xxl="2"
                v-for="member in team"
                :key="member.name"
              >
                <v-card variant="flat" rounded="lg">
                  <v-avatar :size="width > 600 ? 200 : 150">
                    <img
                      :src="
                        member.image
                          ? `/images/team/${member.image}`
                          : '/images/defaultAvatar.png'
                      "
                      :alt="member.name"
                      width="100%"
                    />
                  </v-avatar>
                  <h2 class="mt-4">{{ member.name }}</h2>
                  <p>{{ member.role }}</p>

                  <!-- social media icons -->
                  <v-btn
                    v-for="social in member.socials"
                    :key="social.name"
                    :href="social.url"
                    target="_blank"
                    variant="text"
                    :icon="social.icon"
                    rel="noopener noreferrer"
                  ></v-btn>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <HomeCountDown />
    </v-container>
  </v-main>
</template>

<script setup>
const { width } = useDisplay();
import teamData from "~/assets/data/team.json";

const team = ref(teamData);

// ORGANISER
// Organisr
// SEO
useHead({
  title: "Organisr - CLOUDxAI Conference 2026 Bengaluru",
  titleTemplate: "Organisr - CLOUDxAI Conference 2026 Bengaluru",
  description:
    "CloudxAI 2026 Bengaluru: The meeting ground for DevOps & AI engineers building the future of intelligent infrastructure.",
  keywords:
    "conference, event, CLOUDxAI, bengaluru, Developers, AI, Agents, India, Conference",
  author: "TechFerment",
  robots: "index, follow",
  googlebot: "index, follow",
  bingbot: "index, follow",
  yandexbot: "index, follow",
  ogTitle: "Organisr - CLOUDxAI Conference 2026 Bengaluru",
  ogDescription:
    "CloudxAI 2026 Bengaluru: The meeting ground for DevOps & AI engineers building the future of intelligent infrastructure.",
  ogImage:
    "https://raw.githubusercontent.com/TechFerment/images/refs/heads/main/cxaixcover.jpg",
  ogUrl: "https://cloudconf.ai/",
  ogType: "website",
  ogLocale: "en_US",
  ogSiteName: "Organisr - CLOUDxAI Conference 2026 Bengaluru",
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
    {
      property: "og:title",
      content: "Organisr - CLOUDxAI Conference 2026 Bengaluru",
    },
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
      content: "Organisr - CLOUDxAI Conference 2026 Bengaluru Banner",
    },
    { property: "og:url", content: "https://cloudconf.ai/" },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "en_US" },
    {
      property: "og:site_name",
      content: "Organisr - CLOUDxAI Conference 2026 Bengaluru",
    },
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Organisr - CLOUDxAI Conference 2026 Bengaluru",
    },
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
      content: "Organisr - CLOUDxAI Conference 2026 Bengaluru Banner",
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

<style scoped></style>
