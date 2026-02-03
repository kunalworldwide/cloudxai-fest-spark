<template>
  <v-main class="agenda-page">
    <v-container fluid class="agenda-page__container">
      <!-- Header -->
      <header class="agenda-header">
        <h1 class="agenda-header__title">
          Conference <span class="agenda-header__accent">Agenda</span>
        </h1>
        <p class="agenda-header__meta">
          March 14, 2026 · Bengaluru
        </p>
        <p class="agenda-header__subtitle">
          Parallel sessions across Main Hall, Hall 1, Hall 2 & Hall 3
        </p>
      </header>

      <!-- Schedule -->
      <section class="agenda-schedule">
        <!-- Desktop: column headers -->
        <div class="agenda-schedule__header">
          <div class="agenda-schedule__header-time">Time</div>
          <div
            v-for="(hall, i) in hallOrder"
            :key="hall"
            class="agenda-schedule__header-hall"
            :class="`agenda-schedule__header-hall--${i}`"
          >
            {{ hall }}
          </div>
        </div>

        <template v-for="(items, time) in agendaByTime" :key="time">
          <!-- Venue-wide break -->
          <div
            v-if="isVenueWide(items)"
            class="agenda-row agenda-row--break"
          >
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

          <!-- Parallel sessions -->
          <div v-else class="agenda-row agenda-row--sessions">
            <div class="agenda-row__time">
              <span class="agenda-row__time-text">{{ time }}</span>
            </div>
            <div class="agenda-row__cells">
              <div
                v-for="(hall, hallIndex) in hallOrder"
                :key="hall"
                class="agenda-row__cell"
              >
                <template v-if="getSessionForHall(items, hall)">
                  <article
                    class="session-card"
                    :class="[
                      `session-card--${getSessionForHall(items, hall).type}`,
                      `session-card--hall-${hallIndex}`,
                    ]"
                  >
                    <span class="session-card__hall">{{ hall }}</span>
                    <h3 class="session-card__title">
                      {{ getSessionForHall(items, hall).title }}
                    </h3>
                    <p
                      v-if="getSessionForHall(items, hall).speaker"
                      class="session-card__speaker"
                    >
                      {{ getSessionForHall(items, hall).speaker }}
                    </p>
                    <p
                      v-if="getSessionForHall(items, hall).track"
                      class="session-card__track"
                    >
                      {{ getSessionForHall(items, hall).track }}
                    </p>
                    <p
                      v-if="getSessionForHall(items, hall).description"
                      class="session-card__desc"
                    >
                      {{ getSessionForHall(items, hall).description }}
                    </p>
                  </article>
                </template>
                <div v-else class="agenda-row__empty" />
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

const HALL_ORDER = ["Main Hall", "Hall 1", "Hall 2", "Hall 3"];

const hallOrder = ref(HALL_ORDER);

const agendaByTime = computed(() => {
  const byTime = {};
  for (const item of agendaData) {
    if (!byTime[item.time]) byTime[item.time] = [];
    byTime[item.time].push(item);
  }
  return byTime;
});

function isVenueWide(items) {
  if (items.length !== 1) return false;
  return items[0].hall == null || items[0].type === "break";
}

function getSessionForHall(items, hall) {
  return items.find((item) => item.hall === hall) || null;
}

definePageMeta({
  layout: "default",
});

useHead({
  title: "Agenda - CLOUDxAI Conference 2026 Bengaluru",
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

  @media (min-width: 600px) {
    padding: 2.5rem 1.5rem 4rem;
  }

  @media (min-width: 960px) {
    padding: 3rem 2rem 4rem;
  }
}

/* Header */
.agenda-header {
  text-align: center;
  margin-bottom: 2.5rem;
  padding: 0 0.5rem;

  @media (min-width: 960px) {
    margin-bottom: 3rem;
  }
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

/* Schedule wrapper */
.agenda-schedule {
  background: #fff;
  border-radius: $radius;
  border: 1px solid $border;
  overflow: hidden;
  box-shadow: $shadow;
}

/* Column headers (desktop) */
.agenda-schedule__header {
  display: none;
  grid-template-columns: 100px repeat(4, 1fr);
  gap: 0;
  background: $primary;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  @media (min-width: 960px) {
    display: grid;
  }
}

.agenda-schedule__header-time {
  padding: 0.875rem 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.15);
}

.agenda-schedule__header-hall {
  padding: 0.875rem 1rem;
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.15);

  &:last-child {
    border-right: none;
  }
}

/* Row: break */
.agenda-row {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: stretch;
  border-bottom: 1px solid $border;
  min-height: 52px;

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 960px) {
    grid-template-columns: 100px 1fr;
    gap: 0;
  }
}

.agenda-row__time {
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;

  @media (min-width: 960px) {
    padding: 0.875rem 1rem;
    border-right: 1px solid $border;
    background: $bg-subtle;
  }
}

.agenda-row__time-text {
  font-size: 0.8125rem;
  font-weight: 600;
  color: $primary;
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
  border-left: 3px solid $break-border;

  @media (min-width: 960px) {
    border-left: none;
    padding: 0.875rem 1.25rem;
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
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  padding: 0.75rem 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0.875rem 1rem;
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    padding: 0;
  }
}

.agenda-row__cell {
  min-height: 0;

  @media (min-width: 960px) {
    border-right: 1px solid $border;
    padding: 0.75rem;

    &:last-child {
      border-right: none;
    }
  }
}

.agenda-row__empty {
  min-height: 88px;
  background: $bg-subtle;
  border: 1px dashed $border;
  border-radius: 6px;

  @media (min-width: 960px) {
    min-height: 72px;
  }
}

/* Session card */
.session-card {
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid $border;
  background: #fff;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
  }

  &--keynote::before {
    background: $primary;
  }

  &--hall-0::before {
    background: $primary;
  }

  &--hall-1::before {
    background: #0d9488;
  }

  &--hall-2::before {
    background: #7c3aed;
  }

  &--hall-3::before {
    background: #c2410c;
  }

  &--session::before {
    background: $text-muted;
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: $shadow-hover;
      border-color: rgba($primary, 0.2);
    }
  }

  @media (min-width: 960px) {
    padding: 0.875rem 1rem;
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
}

.session-card--keynote .session-card__hall {
  color: $primary;
}

.session-card__title {
  font-size: 0.9375rem;
  font-weight: 600;
  color: $text;
  line-height: 1.35;
  margin: 0 0 0.375rem;

  @media (min-width: 960px) {
    font-size: 0.875rem;
  }
}

.session-card--keynote .session-card__title {
  color: $primary;
  font-weight: 700;
}

.session-card__speaker {
  font-size: 0.8125rem;
  color: $primary-light;
  font-weight: 500;
  margin: 0 0 0.25rem;
}

.session-card__track {
  font-size: 0.75rem;
  color: $text-muted;
  margin: 0 0 0.25rem;
}

.session-card__desc {
  font-size: 0.8125rem;
  color: $text-muted;
  line-height: 1.45;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: 960px) {
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
}
</style>
