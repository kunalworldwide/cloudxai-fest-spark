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

      <!-- Timeline Schedule -->
      <section class="timeline-schedule">
        <template v-for="(group, index) in timelineGroups" :key="index">
          <!-- Venue-wide break or single hall session -->
          <div v-if="group.type === 'single'" class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <!-- Break card -->
              <div v-if="group.isBreak" class="break-card" :class="{ 'break-card--long': isLongSession(group.time) }">
                <div class="card-time">{{ group.time }}</div>
                <h3 class="break-card__title">{{ group.sessions[0].title }}</h3>
                <p v-if="group.sessions[0].description" class="break-card__desc">
                  {{ group.sessions[0].description }}
                </p>
              </div>
              
              <!-- Single hall session -->
              <article 
                v-else 
                class="session-card" 
                :class="[
                  { 'session-card--long': isLongSession(group.time) },
                  `hall-border--${getHallIndex(group.sessions[0].hall)}`
                ]"
              >
                <div class="card-time">{{ group.time }}</div>
                <span class="session-card__hall" :class="`hall-badge--${getHallIndex(group.sessions[0].hall)}`">
                  {{ group.sessions[0].hall }}
                </span>
                <h3 class="session-card__title">{{ group.sessions[0].title }}</h3>
                
                <!-- Speakers -->
                <div v-if="group.sessions[0].speaker && group.sessions[0].speaker.length > 0" class="session-card__speakers">
                  <div 
                    v-for="speakerId in group.sessions[0].speaker" 
                    :key="speakerId"
                    class="session-card__speaker-item"
                  >
                    <template v-if="getSpeakerDetails(speakerId)">
                      <div class="speaker-avatar">
                        <img 
                          v-if="getSpeakerDetails(speakerId).image"
                          :src="`/images/speakers/${getSpeakerDetails(speakerId).image}`" 
                          :alt="getSpeakerDetails(speakerId).name"
                          class="speaker-avatar__img"
                        />
                        <span v-else class="speaker-avatar__initials">
                          {{ getInitials(getSpeakerDetails(speakerId).name) }}
                        </span>
                      </div>
                      <div class="session-card__speaker-info">
                        <p class="session-card__speaker-name">{{ getSpeakerDetails(speakerId).name }}</p>
                        <p class="session-card__speaker-role">
                          {{ getSpeakerDetails(speakerId).agendaRole || getSpeakerDetails(speakerId).role }}
                        </p>
                      </div>
                    </template>
                  </div>
                </div>
                
                <p v-if="group.sessions[0].description" class="session-card__desc">
                  {{ group.sessions[0].description }}
                </p>
              </article>
            </div>
          </div>

          <!-- Parallel sessions -->
          <div v-else-if="group.type === 'parallel'" class="timeline-item timeline-item--parallel">
            <div class="timeline-marker"></div>
            <div class="timeline-content timeline-content--full">
              <!-- Parallel sessions indicator -->
              <div class="parallel-indicator">
                <div class="parallel-indicator__badge">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2L14 8L8 14M8 2L2 8L8 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Parallel Sessions Begin — {{ group.hallCount }} Halls
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2L14 8L8 14M8 2L2 8L8 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <svg class="parallel-indicator__lines" viewBox="0 0 800 60" preserveAspectRatio="none">
                  <path v-for="(hall, idx) in group.halls" :key="idx"
                    :d="getParallelPath(idx, group.halls.length)"
                    :stroke="getHallColor(idx)"
                    stroke-width="3"
                    fill="none"
                  />
                </svg>
              </div>

              <!-- Hall headers -->
              <div class="hall-grid-header">
                <div 
                  v-for="(hall, idx) in group.halls" 
                  :key="hall"
                  class="hall-header"
                  :class="`hall-header--${idx}`"
                >
                  {{ hall }}
                </div>
              </div>

              <div class="hall-grid hall-grid--parallel">
                <template v-for="(item, itemIdx) in group.gridItems" :key="itemIdx">
                  <!-- Break within parallel sessions -->
                  <div v-if="item.type === 'break'" 
                    class="parallel-break"
                    :style="{ '--row-start': item.rowStart, '--col-span': HALL_ORDER.length }"
                  >
                    <div class="parallel-break__content">
                      <div class="card-time card-time--inline">{{ item.data.time }}</div>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="parallel-break__icon">
                        <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M10 6V10L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                      <span class="parallel-break__title">{{ item.data.title }}</span>
                    </div>
                  </div>

                  <!-- Regular sessions -->
                  <div v-else-if="item.type === 'session'" 
                    class="hall-grid__cell"
                    :style="{ 
                      '--row-start': item.rowStart, 
                      '--row-span': item.rowSpan, 
                      '--col-start': item.hallIndex + 1 
                    }"
                  >
                    <article 
                      class="session-card session-card--compact" 
                      :class="[
                        `hall-bg--${item.hallIndex}`,
                        `hall-border--${item.hallIndex}`,
                        { 'session-card--long': isLongSession(item.data.time) }
                      ]"
                    >
                      <div class="card-time">{{ item.data.time }}</div>
                      <span class="session-card__hall session-card__hall--mobile" :class="`hall-badge--${item.hallIndex}`">
                        {{ HALL_ORDER[item.hallIndex] }}
                      </span>
                      <h3 class="session-card__title">{{ item.data.title }}</h3>
                      
                      <!-- Speakers -->
                      <div v-if="item.data.speaker && item.data.speaker.length > 0" class="session-card__speakers">
                        <div 
                          v-for="speakerId in item.data.speaker" 
                          :key="speakerId"
                          class="session-card__speaker-item"
                        >
                          <template v-if="getSpeakerDetails(speakerId)">
                            <div class="speaker-avatar speaker-avatar--small">
                              <img 
                                v-if="getSpeakerDetails(speakerId).image"
                                :src="`/images/speakers/${getSpeakerDetails(speakerId).image}`" 
                                :alt="getSpeakerDetails(speakerId).name"
                                class="speaker-avatar__img"
                              />
                              <span v-else class="speaker-avatar__initials">
                                {{ getInitials(getSpeakerDetails(speakerId).name) }}
                              </span>
                            </div>
                            <div class="session-card__speaker-info">
                              <p class="session-card__speaker-name">{{ getSpeakerDetails(speakerId).name }}</p>
                              <p class="session-card__speaker-role">
                                {{ getSpeakerDetails(speakerId).agendaRole || getSpeakerDetails(speakerId).role }}
                              </p>
                            </div>
                          </template>
                        </div>
                      </div>
                    </article>
                  </div>

                  <!-- Placeholder -->
                  <div v-else-if="item.type === 'placeholder'" 
                    class="hall-grid__cell hall-grid__cell--placeholder"
                    :style="{ '--row-start': item.rowStart, '--col-start': item.hallIndex + 1 }"
                  >
                    <div class="session-card session-card--empty">
                      <p class="session-card__empty-text">Coming Soon</p>
                    </div>
                  </div>
                </template>
              </div>

              <!-- Reconvene indicator -->
              <div v-if="group.reconvenes" class="reconvene-indicator">
                <svg class="reconvene-indicator__lines" viewBox="0 0 800 60" preserveAspectRatio="none">
                  <path v-for="(hall, idx) in group.halls" :key="idx"
                    :d="getReconvenePath(idx, group.halls.length)"
                    :stroke="getHallColor(idx)"
                    stroke-width="3"
                    fill="none"
                  />
                </svg>
                <div class="reconvene-indicator__label">All Halls Reconvene</div>
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

const HALL_ORDER = ["Hall A", "Hall B", "Hall C", "Board Room"];

// Helper to get end time from a time range string (e.g., "09:00 - 10:00")
function getEndTime(timeRange) {
  if (!timeRange || typeof timeRange !== 'string') return null;
  const parts = timeRange.split(' - ');
  return parts.length > 1 ? parts[1] : parts[0]; // If no range, assume start is end for comparison
}

// Group agenda items into timeline groups
const timelineGroups = computed(() => {
  const groups = [];
  const timeMap = {};
  
  // Group by start time
  agendaData.forEach(item => {
    const startTime = item.time.split(' - ')[0];
    if (!timeMap[startTime]) {
      timeMap[startTime] = [];
    }
    timeMap[startTime].push(item);
  });
  
  const times = Object.keys(timeMap).sort((a, b) => a.localeCompare(b));
  
  let currentParallelGroup = null;
  let activeMaxEndTime = '00:00';
  
  const pushCurrentParallel = () => {
    if (currentParallelGroup) {
      finalizeParallelGroup(currentParallelGroup);
      groups.push(currentParallelGroup);
      currentParallelGroup = null;
      activeMaxEndTime = '00:00';
    }
  };

  times.forEach((time, index) => {
    const items = timeMap[time];
    const isBreak = items.length === 1 && items[0].hall === null;
    const isMultiple = items.length > 1;
    
    if (isBreak) {
      pushCurrentParallel();
      groups.push({
        type: 'single',
        time: items[0].time,
        isBreak: true,
        sessions: items
      });
      return;
    }

    // Determine if we should be in/continue parallel mode
    // We stay in parallel if:
    // 1. Multiple sessions start at this time
    // 2. We are already in parallel mode AND this session starts before the previous ones end
    const shouldBeParallel = isMultiple || (currentParallelGroup && time < activeMaxEndTime);

    if (shouldBeParallel) {
      if (!currentParallelGroup) {
        currentParallelGroup = {
          type: 'parallel',
          halls: HALL_ORDER,
          hallCount: HALL_ORDER.length,
          scheduledItems: [],
          reconvenes: false
        };
      }
      
      items.forEach(item => {
        currentParallelGroup.scheduledItems.push({
          type: 'session',
          time: time,
          data: item
        });
        const endTime = getEndTime(item.time);
        if (endTime > activeMaxEndTime) activeMaxEndTime = endTime;
      });
    } else {
      pushCurrentParallel();
      groups.push({
        type: 'single',
        time: items[0].time,
        isBreak: false,
        sessions: items
      });
      // Track end time even for single sessions to potentially start a parallel block if something overlaps
      const endTime = getEndTime(items[0].time);
      activeMaxEndTime = endTime;
    }
  });
  
  pushCurrentParallel();
  
  return groups;
});

function finalizeParallelGroup(group) {
  // 1. Identify all row boundary times
  const boundaryTimes = new Set();
  group.scheduledItems.forEach(item => {
    if (item.type === 'session') {
      boundaryTimes.add(item.time); // start
      const endTime = getEndTime(item.data.time);
      if (endTime) boundaryTimes.add(endTime);
    } else {
      boundaryTimes.add(item.time);
    }
  });
  
  const sortedBoundaries = [...boundaryTimes].sort((a, b) => a.localeCompare(b));
  const rowIntervals = [];
  for (let i = 0; i < sortedBoundaries.length - 1; i++) {
    rowIntervals.push({
      start: sortedBoundaries[i],
      end: sortedBoundaries[i+1]
    });
  }
  
  group.rows = rowIntervals;
  
  // 2. Map sessions and breaks to grid positions
  const gridPositions = []; // { hallIndex, rowStart, rowSpan, type, data }
  const occupied = Array.from({ length: rowIntervals.length }, () => Array(HALL_ORDER.length).fill(false));
  
  group.scheduledItems.forEach(item => {
    if (item.type === 'session') {
      const hallIndex = HALL_ORDER.indexOf(item.data.hall);
      if (hallIndex === -1) return;
      
      const rowStart = rowIntervals.findIndex(r => r.start === item.time);
      const sessionEnd = getEndTime(item.data.time);
      const rowEndIndex = rowIntervals.findIndex(r => r.end === sessionEnd);
      const rowSpan = (rowEndIndex === -1 ? 1 : rowEndIndex - rowStart + 1);
      
      gridPositions.push({
        hallIndex,
        rowStart: rowStart + 1, // 1-indexed for CSS grid
        rowSpan,
        type: 'session',
        data: item.data
      });
      
      for (let r = rowStart; r < rowStart + rowSpan; r++) {
        if (occupied[r]) occupied[r][hallIndex] = true;
      }
    } else {
      // Break spans all halls
      const rowStart = rowIntervals.findIndex(r => r.start === item.time);
      gridPositions.push({
        hallIndex: 1, // Start at 1
        colSpan: HALL_ORDER.length,
        rowStart: rowStart + 1,
        rowSpan: 1,
        type: 'break',
        data: item.data
      });
      
      if (occupied[rowStart]) {
        for (let c = 0; c < HALL_ORDER.length; c++) occupied[rowStart][c] = true;
      }
    }
  });
  
  // 3. Add placeholders
  for (let r = 0; r < rowIntervals.length; r++) {
    for (let c = 0; c < HALL_ORDER.length; c++) {
      if (!occupied[r][c]) {
        gridPositions.push({
          hallIndex: c,
          rowStart: r + 1,
          rowSpan: 1,
          type: 'placeholder'
        });
        occupied[r][c] = true;
      }
    }
  }
  
  group.gridItems = gridPositions;
  group.reconvenes = true;
}

// Helper functions
function getSpeakerDetails(id) {
  if (!id) return null;
  return speakersData.find(s => s.id === id) || null;
}

function getInitials(name) {
  if (!name) return '';
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function getHallIndex(hallName) {
  if (!hallName) return -1;
  return HALL_ORDER.indexOf(hallName);
}

function getHallColor(index) {
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#a855f7'];
  return colors[index] || '#64748b';
}

function getParallelPath(index, total) {
  const startY = 30;
  const endY = 60;
  const width = 800;
  const spacing = width / (total + 1);
  const x = spacing * (index + 1);
  
  return `M 400 ${startY} Q ${(400 + x) / 2} ${(startY + endY) / 2} ${x} ${endY}`;
}

function getReconvenePath(index, total) {
  const startY = 0;
  const endY = 30;
  const width = 800;
  const spacing = width / (total + 1);
  const x = spacing * (index + 1);
  
  return `M ${x} ${startY} Q ${(400 + x) / 2} ${(startY + endY) / 2} 400 ${endY}`;
}

function getDuration(time) {
  if (!time || !time.includes(' - ')) return 0;
  const [start, end] = time.split(' - ');
  const [startH, startM] = start.split(':').map(Number);
  const [endH, endM] = end.split(':').map(Number);
  return (endH * 60 + endM) - (startH * 60 + startM);
}



function isLongSession(time) {
  return getDuration(time) > 30;
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
$bg-page: #f1f5f9;
$break-bg: #ecfdf5;
$break-border: #6ee7b7;
$radius: 12px;
$shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
$shadow-hover: 0 4px 12px rgba(30, 58, 138, 0.12);
$timeline-color: #14b8a6;

.agenda-page {
  background: $bg-page;
  min-height: 100vh;
}

.agenda-page__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;

  @media (min-width: 975px) {
    padding: 3rem 2rem 4rem;
  }
}

/* Header */
.agenda-header {
  text-align: center;
  margin-bottom: 3rem;
}

.agenda-header__title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  color: $text;
  margin: 0 0 0.75rem;
  letter-spacing: -0.02em;
}

.agenda-header__accent {
  color: $primary;
}

.agenda-header__meta {
  font-size: 1.125rem;
  color: $text-muted;
  margin: 0 0 0.5rem;
  font-weight: 500;
}

.agenda-header__subtitle {
  font-size: 1rem;
  color: $text-muted;
  margin: 0;
}

/* Timeline Schedule */
.timeline-schedule {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline-item {
  position: relative;
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 975px) {
    gap: 2.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: 11px;
    top: 24px;
    bottom: -2rem;
    width: 3px;
    background: linear-gradient(to bottom, $timeline-color 0%, rgba($timeline-color, 0.3) 100%);
  }

  // &:last-child::before {
  //   display: none;
  // }
}

.timeline-marker {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: $timeline-color;
  border: 4px solid $bg-page;
  box-shadow: 0 0 0 3px rgba($timeline-color, 0.2);
  position: relative;
  z-index: 2;
  margin-top: 2px;
}

.timeline-content {
  flex: 1;
  min-width: 0;
}

.timeline-content--full {
  width: 100%;
}

.card-time {
  font-size: 0.8125rem;
  font-weight: 600;
  color: $timeline-color;
  margin-bottom: 0.5rem;
  font-style: italic;
  display: block;

  &--inline {
    margin-bottom: 0;
  }
}

/* Break Card */
.break-card {
  background: $break-bg;
  border: 2px solid $break-border;
  border-radius: $radius;
  padding: 1.25rem 1.5rem;
  transition: all 0.2s ease;

  &--long {
    border-width: 3px;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15);
  }
}

.break-card__title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #059669;
  margin: 0 0 0.5rem;
}

.break-card__desc {
  font-size: 0.9375rem;
  color: #047857;
  margin: 0;
  line-height: 1.5;
}

/* Session Card */
.session-card {
  background: #fff;
  border: 1px solid $border;
  border-radius: $radius;
  padding: 1.5rem;
  box-shadow: $shadow;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      box-shadow: $shadow-hover;
      transform: translateY(-2px);
    }
  }

  &--long {
    border-width: 2px;
    border-style: solid;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.1);
    
    .card-time {
      font-weight: 700;
    }

    &.hall-border--0 { border-color: #3b82f6; .card-time { color: #3b82f6; } }
    &.hall-border--1 { border-color: #10b981; .card-time { color: #10b981; } }
    &.hall-border--2 { border-color: #f59e0b; .card-time { color: #f59e0b; } }
    &.hall-border--3 { border-color: #a855f7; .card-time { color: #a855f7; } }
  }
}

.session-card--compact {
  padding: 1.25rem;
}

.session-card--empty {
  background: $bg-subtle;
  border-style: dashed;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.session-card__empty-text {
  color: $text-muted;
  font-style: italic;
  margin: 0;
}

.session-card__hall {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

// Color-coded hall badges
.hall-badge--0 {
  background: rgba(59, 130, 246, 0.15);
  color: #1e40af;
}

.hall-badge--1 {
  background: rgba(16, 185, 129, 0.15);
  color: #047857;
}

.hall-badge--2 {
  background: rgba(245, 158, 11, 0.15);
  color: #b45309;
}

.hall-badge--3 {
  background: rgba(168, 85, 247, 0.15);
  color: #6b21a8;
}

  .hall-bg--0{
    background: rgba(59, 130, 246, 0.05); // Light blue for Hall A
  }
  
  .hall-bg--1 {
    background: rgba(16, 185, 129, 0.05); // Light green for Hall B
  }
  
  .hall-bg--2 {
    background: rgba(245, 158, 11, 0.05); // Light orange for Hall C
  }
  
.hall-bg--3{
    background: rgba(168, 85, 247, 0.05); // Light purple for Board Room
  }

.session-card__title {
  font-size: 1.125rem;
  font-weight: 600;
  color: $text;
  line-height: 1.4;
  margin: 0 0 1rem;
}

.session-card--compact .session-card__title {
  font-size: 1rem;
  margin-bottom: 0.875rem;
}

/* Speakers */
.session-card__speakers {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  margin-bottom: 1rem;
}

.session-card__speaker-item {
  display: flex;
  align-items: center;
  gap: 0.875rem;
}

.speaker-avatar {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  background: $bg-subtle;
  border: 2px solid $border;
  display: flex;
  align-items: center;
  justify-content: center;
}

.speaker-avatar--small {
  width: 40px;
  height: 40px;
}

.speaker-avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.speaker-avatar__initials {
  font-size: 0.875rem;
  font-weight: 600;
  color: $text-muted;
}

.speaker-avatar--small .speaker-avatar__initials {
  font-size: 0.75rem;
}

.session-card__speaker-info {
  flex: 1;
  min-width: 0;
}

.session-card__speaker-name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: $text;
  margin: 0 0 2px;
  line-height: 1.3;
}

.session-card--compact .session-card__speaker-name {
  font-size: 0.875rem;
}

.session-card__speaker-role {
  font-size: 0.8125rem;
  color: $text-muted;
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.session-card--compact .session-card__speaker-role {
  font-size: 0.75rem;
  
}

.session-card__desc {
  font-size: 0.9375rem;
  color: $text-muted;
  line-height: 1.6;
  margin: 0;
}

/* Parallel Sessions */
.timeline-item--parallel {
  &::before {
    display: none;
  }
}

.parallel-indicator {
  margin-bottom: 1.5rem;
}

.parallel-indicator__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #1e293b;
  color: #fff;
  padding: 0.625rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0 auto 1rem;
  display: flex;
  justify-content: center;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;

  svg {
    flex-shrink: 0;
  }
}

.parallel-indicator__lines {
  width: 100%;
  height: 60px;
  display: block;
}

/* Hall Grid */
.hall-grid-header {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
  margin-bottom: 1rem;
  position: sticky;
  top: 60px;
  z-index: 10;
  background: $bg-page;
  padding-top: 0.5rem;

  @media (min-width: 975px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.hall-header {
  padding: 0.75rem 1rem;
  border-radius: 8px 8px 0 0;
  font-weight: 700;
  font-size: 0.875rem;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hall-header--0 {
  background: #3b82f6;
}

.hall-header--1 {
  background: #10b981;
}

.hall-header--2 {
  background: #f59e0b;
}

.hall-header--3 {
  background: #a855f7;
}

.parallel-time-slot {
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
}

/* Parallel Break */
.parallel-break {
  margin-bottom: 1.5rem;
}

.parallel-break__content {
  background: $break-bg;
  border: 2px solid $break-border;
  border-radius: $radius;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.parallel-break__icon {
  flex-shrink: 0;
  color: #10b981;
}

.parallel-break__title {
  font-size: 1rem;
  font-weight: 600;
  color: #059669;
  text-align: center;
}

.hall-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;

  @media (min-width: 975px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.hall-grid--parallel {
  @media (min-width: 975px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: dense;

    .hall-grid__cell {
      grid-row: var(--row-start) / span var(--row-span, 1);
      grid-column: var(--col-start);
    }

    .parallel-break {
      grid-row: var(--row-start);
      grid-column: 1 / span var(--col-span);
      margin-bottom: 0;
    }
  }
}

.hall-grid__cell {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  height: 100%;

  &--placeholder {
    @media (max-width: 939px) {
      display: none;
    }
  }

  // Ensure all cards have equal height
  .session-card {
    flex: 1;
    display: flex;
    flex-direction: column;
    
    &--compact {
      padding: 1rem;
    }
    
    &--empty {
      min-height: 150px;
    }
  }
}

/* Reconvene Indicator */
.reconvene-indicator {
  margin-top: 2rem;
  position: relative;
}

.reconvene-indicator__lines {
  width: 100%;
  height: 60px;
  display: block;
  margin-bottom: 0.5rem;
}

.reconvene-indicator__label {
  text-align: center;
  font-size: 0.9375rem;
  font-weight: 600;
  color: $text;
  padding: 0.5rem;
}

/* Responsive adjustments */
@media (max-width: 939px) {
  .timeline-item {
    gap: 1rem;
  }

  .timeline-marker {
    width: 20px;
    height: 20px;
  }

  .timeline-item::before {
    left: 8px;
  }

  // Hide hall headers on mobile
  .hall-grid-header {
    display: none;
  }

  // Hide parallel indicator arrows on mobile
  .parallel-indicator__lines {
    display: none;
  }

  // Hide reconvene indicator arrows on mobile
  .reconvene-indicator__lines {
    display: none;
  }

  // Single column layout for mobile
  .hall-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  // Remove column background colors on mobile
  .hall-grid__cell {
    background: transparent !important;
    padding: 0;
    border-radius: 0;
    
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }

  // Show hall badge on mobile
  .session-card__hall--mobile {
    display: inline-block !important;
    margin-bottom: 0.75rem;
  }

  .parallel-indicator__badge {
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
  }

  .session-card {
    padding: 1.25rem;
  }
  
  .session-card--compact {
    margin-bottom: 1rem;
  }
}

// Hide mobile hall badge on desktop
@media (min-width: 940px) {
  .session-card__hall--mobile {
    display: none;
  }
}
</style>
