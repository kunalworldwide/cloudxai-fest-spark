<template>
  <v-main class="agenda-page">
    <v-container fluid class="agenda-page__container">
      <!-- Header -->
      <header class="agenda-header">
        <h1 class="agenda-header__title">
          Conference <span class="agenda-header__accent">Agenda</span>
        </h1>
        <p class="agenda-header__meta">March 14, 2026 · Bengaluru</p>
        <p class="agenda-header__subtitle">
          Parallel sessions across Hall A, Hall B, Hall C & Board Room
        </p>
      </header>

      <!-- Hall Tabs -->
      <div class="hall-tabs">
        <button
          v-for="hall in hallOrder"
          :key="hall"
          class="hall-tab"
          :class="{ 'hall-tab--active': selectedHall === hall }"
          @click="selectHall(hall)"
        >
          {{ hall }}
        </button>
      </div>

      <!-- Schedule -->
      <section class="agenda-schedule">
        <template v-for="(items, time) in filteredAgendaByTime" :key="time">
          <!-- Venue-wide break -->
          <div v-if="isVenueWide(items)" class="agenda-row agenda-row--break">
            <div class="agenda-row__time">
              <span class="agenda-row__time-text">{{ time }}</span>
            </div>
            <div class="agenda-row__break">
              <span class="agenda-row__break-title">{{ items[0].title }}</span>
              <span v-if="items[0].description" class="agenda-row__break-desc">
                {{ items[0].description }}
              </span>
            </div>
          </div>

          <!-- Session -->
          <div v-else class="agenda-row agenda-row--sessions">
            <div class="agenda-row__time">
              <span class="agenda-row__time-text">{{ time }}</span>
            </div>
            <div class="agenda-row__cells">
              <div class="agenda-row__cell">
                <template v-if="items.length > 0">
                  <article
                    class="session-card"
                    :class="[
                      `session-card--${items[0].type}`,
                      `session-card--${getHallClass(items[0].hall)}`,
                    ]"
                  >
                    <span class="session-card__hall">{{ items[0].hall }}</span>
                    <h3 class="session-card__title">
                      {{ items[0].title }}
                    </h3>
                    
                    <!-- Speakers section -->
                   <div v-if="items[0].speaker && items[0].speaker.length > 0" class="session-card__speakers">
                      <div 
                        v-for="speakerId in items[0].speaker" 
                        :key="speakerId"
                        class="session-card__speaker-item"
                      >
                         <template v-if="getSpeakerDetails(speakerId)">
                            <img 
                              :src="getSpeakerDetails(speakerId).image ? `/images/speakers/${getSpeakerDetails(speakerId).image}` : '/images/defaultAvatar.png'" 
                              :alt="getSpeakerDetails(speakerId).name"
                              class="session-card__speaker-img"
                            />
                            <div class="session-card__speaker-info">
                              <p class="session-card__speaker-name">{{ getSpeakerDetails(speakerId).name }}</p>
                              <p class="session-card__speaker-role">{{ getSpeakerDetails(speakerId).agendaRole?getSpeakerDetails(speakerId).agendaRole:getSpeakerDetails(speakerId).role }}</p>
                            </div>
                         </template>
                         <template v-else>
                             <p class="session-card__speaker-name"> {{ speakerId }}</p>
                         </template>
                      </div>
                    </div>


                    <p v-if="items[0].track" class="session-card__track">
                      {{ items[0].track }}
                    </p>
                    <p v-if="items[0].description" class="session-card__desc">
                      {{ items[0].description }}
                    </p>
                  </article>
                </template>
                <div v-else class="agenda-row__empty">
                    <p class="text-sm text-gray-500 italic">No session in {{ selectedHall }} at this time.</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </section>

      <HomeCountDown />
    </v-container>
  </v-main>
</template>

<script setup>
import agendaData from "~/assets/data/agenda.json";
import speakersData from "~/assets/data/speakers.json";

const route = useRoute();
const router = useRouter();

const HALL_ORDER = [ "Hall A", "Hall B", "Hall C","Board Room",];
const hallOrder = ref(HALL_ORDER);
const selectedHall = ref("Hall A");

const getSlug = (name) => name.toLowerCase().replace(/\s+/g, '-');

// Helper to find Hall Name from slug
const getHallFromSlug = (slug) => {
  if (!slug) return null;
  return HALL_ORDER.find(hall => getSlug(hall) === slug);
};

onMounted(() => {
  const hallFromUrl = getHallFromSlug(route.query.hall);
  if (hallFromUrl) {
    selectedHall.value = hallFromUrl;
  }
});

watch(() => route.query.hall, (newSlug) => {
  const hall = getHallFromSlug(newSlug);
  if (hall) {
    selectedHall.value = hall;
  }
});

const selectHall = (hall) => {
  selectedHall.value = hall;
  router.push({ query: { ...route.query, hall: getSlug(hall) } });
};

const filteredAgendaByTime = computed(() => {
  const byTime = {};
  for (const item of agendaData) {
    if (item.hall === null || item.hall === selectedHall.value) {
        if (!byTime[item.time]) byTime[item.time] = [];
        byTime[item.time].push(item);
    }
  }
  return byTime;
});

function isVenueWide(items) {
  if (!items || items.length === 0) return false;
  return items[0].hall === null;
}

function getHallClass(hallName) {
    if (!hallName) return '';
    const index = HALL_ORDER.indexOf(hallName);
    return index !== -1 ? `hall-${index}` : '';
}

function getSpeakerDetails(id) {
    if (!id) return null;
    return speakersData.find(s => s.id === id) || null;
}

definePageMeta({
  layout: "default",
});

useHead({
  title: "Agenda - CLOUDxAI Conference 2026 Bengaluru",
// ... existing head config ...
  titleTemplate: "Agenda - CLOUDxAI Conference 2026 Bengaluru",
  description:
    "CloudxAI 2026 Bengaluru: Full agenda – keynotes, sessions, and networking. March 14, 2026.",
  keywords:
    "conference, event, CLOUDxAI, bengaluru, agenda, schedule, Developers, AI, Agents, India, Conference",
  author: "TechFerment",
  robots: "index, follow",
  googlebot: "index, follow",
  bingbot: "index, follow",
  yandexbot: "index, follow",
  ogTitle: "Agenda - CLOUDxAI Conference 2026 Bengaluru",
  ogDescription:
    "CloudxAI 2026 Bengaluru: Full agenda – keynotes, sessions, and networking. March 14, 2026.",
  ogImage:
    "https://raw.githubusercontent.com/TechFerment/images/refs/heads/main/cxaixcover.jpg",
  ogUrl: "https://cloudconf.ai/",
  ogType: "website",
  ogLocale: "en_US",
  ogSiteName: "Agenda - CLOUDxAI Conference 2026 Bengaluru",
  meta: [
    {
      name: "description",
      content:
        "CloudxAI 2026 Bengaluru: Full agenda – keynotes, sessions, and networking. March 14, 2026.",
    },
    {
      name: "keywords",
      content:
        "conference, event, CLOUDxAI, bengaluru, agenda, schedule, Developers, AI, Agents, India, Conference",
    },
    { name: "author", content: "TechFerment" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "bingbot", content: "index, follow" },
    { name: "yandexbot", content: "index, follow" },
    { property: "og:title", content: "Agenda - CLOUDxAI Conference 2026 Bengaluru" },
    {
      property: "og:description",
      content:
        "CloudxAI 2026 Bengaluru: Full agenda – keynotes, sessions, and networking. March 14, 2026.",
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
      content: "Agenda - CLOUDxAI Conference 2026 Bengaluru Banner",
    },
    { property: "og:url", content: "https://cloudconf.ai/" },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "en_US" },
    { property: "og:site_name", content: "Agenda - CLOUDxAI Conference 2026 Bengaluru" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Agenda - CLOUDxAI Conference 2026 Bengaluru" },
    {
      name: "twitter:description",
      content:
        "CloudxAI 2026 Bengaluru: Full agenda – keynotes, sessions, and networking. March 14, 2026.",
    },
    {
      name: "twitter:image",
      content:
        "https://raw.githubusercontent.com/TechFerment/images/refs/heads/main/cxaixcover.jpg",
    },
    {
      name: "twitter:image:alt",
      content: "Agenda - CLOUDxAI Conference 2026 Bengaluru Banner",
    },
    { name: "twitter:site", content: "@cloudxaiconf" },
    { name: "twitter:creator", content: "@cloudxaiconf" },
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
// Design tokens
$primary: #1e3a8a;
$primary-light: #3b82f6;
$text: #1e293b;
$text-muted: #64748b;
$border: #e2e8f0;
$bg-subtle: #f8fafc;
$break-bg: #f0fdfa;
$break-border: #99f6e4;
$radius: 10px;
$shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
$shadow-hover: 0 4px 12px rgba(30, 58, 138, 0.08);

.agenda-page {
  background: #fafbfc;
}

.agenda-page__container {
  max-width: 1280px; 
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    padding: 2.5rem 1.5rem 4rem;
  }
}

/* Header */
.agenda-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2rem;
  padding: 0 0.5rem;
}

.agenda-header__title {
  font-size: clamp(1.625rem, 4.5vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: $text;
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
}

.agenda-header__accent {
  color: $primary;
}

.agenda-header__meta {
  font-size: 1rem;
  color: $text-muted;
  margin: 0 0 0.25rem;
  font-weight: 500;
}

.agenda-header__subtitle {
  font-size: 0.9rem;
  color: $text-muted;
  margin: 0;
  opacity: 0.9;
}

/* Tabs */
.hall-tabs {
    max-width: 800px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.hall-tab {
  padding: 0.6rem 1.2rem;
  border-radius: 9999px;
  background: #fff;
  border: 1px solid $border;
  color: $text-muted;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: $primary-light;
    color: $primary;
  }

  &--active {
    background: $primary;
    color: #fff;
    border-color: $primary;
    box-shadow: 0 2px 6px rgba($primary, 0.25);
    
    &:hover {
        background: $primary; // keep color on hover
        color: #fff;
    }
  }
}

/* Schedule wrapper */
.agenda-schedule {
    max-width: 800px;

  background: #fff;
  border-radius: $radius;
  border: 1px solid $border;
  overflow: hidden;
  box-shadow: $shadow;
}

/* Row: break */
.agenda-row {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid $border;
  min-height: 52px;

  @media (min-width: 600px) {
      flex-direction: row;
      align-items: stretch;
  }

  &:last-child {
    border-bottom: none;
  }
}

.agenda-row__time {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: $bg-subtle;
  min-width: 130px;

  @media (min-width: 600px) {
    padding: 0.75rem 1rem;
    justify-content: center;
    border-right: 1px solid $border;
  }
}

.agenda-row__time-text {
  font-size: 0.8125rem;
  font-weight: 600;
  color: $primary;
  font-style: italic;
  white-space: nowrap;
}

.agenda-row--break .agenda-row__time-text {
  color: #0d9488;
}

/* Break cell */
.agenda-row__break {
  padding: 0.875rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  background: $break-bg;
  flex: 1;
  // border-top: 1px dashed $break-border; /* mobile separator if needed */
  
  @media (min-width: 600px) {
      border-top: none;
  }
}

.agenda-row__break-title {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #0f766e;
}

.agenda-row__break-desc {
  font-size: 0.8125rem;
  color: $text-muted;
  line-height: 1.4;
}

/* Sessions row */
.agenda-row--sessions .agenda-row__cells {
  flex: 1;
  padding: 1rem;
}

.agenda-row__cell {
  width: 100%;
}

.agenda-row__empty {
  padding: 1.5rem;
  text-align: center;
  background: $bg-subtle;
  border: 1px dashed $border;
  border-radius: 6px;
}

/* Session card */
.session-card {
  padding: 0;
  border-radius: 0;
  border: none;
  background: transparent;
  // height: 100%;
  position: relative;
  // box-shadow: none; 
  
}


.session-card {
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid $border;
    background: #fff;
    transition: box-shadow 0.2s ease;
    
    @media (hover: hover) {
        &:hover {
        box-shadow: $shadow-hover;
        border-color: rgba($primary, 0.2);
        }
    }
}


.session-card__hall {
  display: inline-block;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: $primary;
  margin-bottom: 0.375rem;
  background: rgba($primary, 0.05);
  padding: 2px 6px;
  border-radius: 4px;
}

.session-card--hall-1 .session-card__hall { color: #0d9488; background: rgba(#0d9488, 0.05); }
.session-card--hall-2 .session-card__hall { color: #7c3aed; background: rgba(#7c3aed, 0.05); }
.session-card--hall-3 .session-card__hall { color: #c2410c; background: rgba(#c2410c, 0.05); }


.session-card__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: $text;
  line-height: 1.35;
  margin: 0 0 0.5rem;
}

.session-card--keynote .session-card__title {
  color: $primary;
  font-weight: 700;
}

/* Speakers */
.session-card__speakers {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
}

.session-card__speaker-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.session-card__speaker-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid $bg-subtle;
    flex-shrink: 0;
}

.session-card__speaker-info {
    display: flex;
    flex-direction: column;
}

.session-card__speaker-name {
  font-size: 0.9rem;
  color: $text;
  font-weight: 600;
  margin: 0;
  line-height: 1.2;
}

.session-card__speaker-role {
  font-size: 0.75rem;
  color: $text-muted;
  margin: 0;
  line-height: 1.2;
  margin-top: 2px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.session-card__track {
  display: inline-block;
  font-size: 0.75rem;
  color: $text-muted;
  background: $bg-subtle;
  padding: 2px 6px;
  border-radius: 4px;
  margin: 0 0 0.5rem;
  border: 1px solid $border;
}

.session-card__desc {
  font-size: 0.875rem;
  color: $text-muted;
  line-height: 1.5;
  margin: 0;
}
</style>
