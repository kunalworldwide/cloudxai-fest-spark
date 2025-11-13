<template>
  <section class="event-list">
    <div class="event-list__container">
     
      <div class="event-list__header">
        <div class="event-list__label">
          <span class="event-list__label-rule"></span>
          <span class="event-list__label-text">Event List</span>
        </div>
        <h1 class="event-list__title">
          OUR <span>EVENTS LIST</span>
        </h1>
      </div>


      <div class="event-list__tabs">
        <button
          v-for="day in days"
          :key="day.id"
          :class="['event-list__tab', { 'event-list__tab--active': selectedDay === day.id }]"
          @click="selectedDay = day.id"
        >
          <div class="event-list__tab-day">{{ day.label }}</div>
          <div class="event-list__tab-date">{{ day.date }}</div>
        </button>
      </div>


      <v-carousel
        v-model="currentPage"
        height="auto"
        hide-delimiters
        :show-arrows="false"
        class="event-list__carousel"
      >
        <v-carousel-item
          v-for="page in totalPages"
          :key="page"
          :value="page"
        >
          <div class="event-list__grid">
            <v-card
              v-for="event in getEventsForPage(page)"
              :key="event.id"
              class="event-card"
              rounded="xl"
            >
              <div class="event-card__content">
                <div class="event-card__image">
                  <v-img
                    :src="event.image"
                    :alt="event.title"
                    cover
                    height="100%"
                  ></v-img>
                </div>
                <div class="event-card__info">
                  <h3 class="event-card__title">{{ event.title }}</h3>
                  <div class="event-card__meta">
                    <div class="event-card__meta-item">
                      <v-icon size="16" class="event-card__icon">mdi-clock-outline</v-icon>
                      <span>{{ event.time }}</span>
                    </div>
                    <div class="event-card__meta-item">
                      <v-icon size="16" class="event-card__icon">mdi-calendar-blank</v-icon>
                      <span>{{ event.date }}</span>
                    </div>
                  </div>
                  <p class="event-card__description">{{ event.description }}</p>
                  <v-btn
                    color="#2562FF"
                    variant="flat"
                    rounded="xl"
                    class="event-card__button text-none"
                    size="large"
                  >
                    Learn More
                  </v-btn>
                </div>
              </div>
            </v-card>
          </div>
        </v-carousel-item>
      </v-carousel>

  
      <div class="event-list__pagination">
        <button
          v-for="page in totalPages"
          :key="page"
          :class="['event-list__dot', { 'event-list__dot--active': currentPage === page }]"
          @click="currentPage = page"
        ></button>
      </div>
    </div>


    
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';

const selectedDay = ref(4);
const currentPage = ref(1);
const itemsPerPage = ref(4);


const updateItemsPerPage = () => {
  if (window.innerWidth < 500) {
    itemsPerPage.value = 2;
  } else {
    itemsPerPage.value = 4;
  }
};

onMounted(() => {
  updateItemsPerPage();
  window.addEventListener('resize', updateItemsPerPage);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateItemsPerPage);
});

const days = ref([
  { id: 1, label: 'DAY 1', date: 'Feb 22, 2024' },
  { id: 2, label: 'DAY 2', date: 'Feb 23, 2024' },
  { id: 3, label: 'DAY 3', date: 'Feb 24, 2024' },
  { id: 4, label: 'DAY 4', date: 'Feb 25, 2024' },
  { id: 5, label: 'DAY 5', date: 'Feb 26, 2024' },
]);

// Events organized by day
const eventsByDay = ref({
  1: [
    {
      id: 1,
      title: 'Opening Keynote 2024',
      time: '9:00 - 10:30 AM',
      date: 'Feb 22, 2024',
      description: 'A day-long Open House for prospective Math students at Yale.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Climate Workshop',
      time: '11:00 AM - 1:00 PM',
      date: 'Feb 22, 2024',
      description: 'Event featuring a reception for prospective Math students to enjoy at Yale.',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80',
    },
  ],
  2: [
    {
      id: 3,
      title: 'Innovation Summit',
      time: '9:00 - 11:00 AM',
      date: 'Feb 23, 2024',
      description: 'A day-long Open House for prospective Math students at Yale.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Panel Discussion',
      time: '2:00 - 4:00 PM',
      date: 'Feb 23, 2024',
      description: 'A day for prospective Math students to visit Yale and meet faculty.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    },
  ],
  3: [
    {
      id: 5,
      title: 'Tech Trends 2024',
      time: '10:00 - 12:00 PM',
      date: 'Feb 24, 2024',
      description: 'Explore the future of artificial intelligence with industry leaders.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Networking Event',
      time: '3:00 - 5:00 PM',
      date: 'Feb 24, 2024',
      description: 'Hands-on workshop covering modern web development practices.',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80',
    },
  ],
  4: [
    {
      id: 7,
      title: 'Digital Discussion 2024',
      time: '9:00 - 9:30 PM',
      date: 'Feb 25, 2024',
      description: 'A day-long Open House for prospective Math students at Yale.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      title: 'Global Climate Act',
      time: '9:00 - 9:30 PM',
      date: 'Feb 25, 2024',
      description: 'Event featuring a reception for prospective Math students to enjoy at Yale.',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 9,
      title: 'Digital Innovation 2024',
      time: '9:00 - 9:30 PM',
      date: 'Feb 25, 2024',
      description: 'A day-long Open House for prospective Math students at Yale.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 10,
      title: 'Tech Talk 2024',
      time: '9:00 - 9:30 PM',
      date: 'Feb 25, 2024',
      description: 'A day for prospective Math students to visit Yale and meet faculty.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 73,
      title: 'Digital Discussion 2024',
      time: '9:00 - 9:30 PM',
      date: 'Feb 25, 2024',
      description: 'A day-long Open House for prospective Math students at Yale.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 82,
      title: 'Global Climate ',
      time: '9:00 - 9:30 PM',
      date: 'Feb 25, 2024',
      description: 'Event featuring a reception for prospective Math students to enjoy at Yale.',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 92,
      title: 'Digital Innovation 2024',
      time: '9:00 - 9:30 PM',
      date: 'Feb 25, 2024',
      description: 'A day-long Open House for prospective Math students at Yale.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 102,
      title: 'Tech Talk 2024',
      time: '9:00 - 9:30 PM',
      date: 'Feb 25, 2024',
      description: 'A day for prospective Math students to visit Yale and meet faculty.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    },
  ],
  5: [
    {
      id: 11,
      title: 'Closing Ceremony',
      time: '10:00 - 11:30 AM',
      date: 'Feb 26, 2024',
      description: 'Join us for the grand closing ceremony and awards.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 12,
      title: 'Farewell Reception',
      time: '2:00 - 4:00 PM',
      date: 'Feb 26, 2024',
      description: 'Network and say goodbye to fellow attendees.',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80',
    },
  ],
});


const currentDayEvents = computed(() => {
  return eventsByDay.value[selectedDay.value] || [];
});

const totalPages = computed(() => {
  return Math.ceil(currentDayEvents.value.length / itemsPerPage.value);
});


const getEventsForPage = (page) => {
  const start = (page - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return currentDayEvents.value.slice(start, end);
};


watch(selectedDay, () => {
  currentPage.value = 1;
});


watch(itemsPerPage, () => {
  const maxPage = Math.ceil(currentDayEvents.value.length / itemsPerPage.value);
  if (currentPage.value > maxPage) {
    currentPage.value = maxPage || 1;
  }
});


</script>

<style scoped lang="scss">
.event-list {
  background-color: #0a1435;
  padding: 80px 64px;
  position: relative;
}

.event-list__container {
  max-width: 1500px;
  margin: 0 auto;
}

.event-list__header {
  text-align: center;
  margin-bottom: 48px;
}

.event-list__label {
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.18em;
  color: #2562ff;
  font-weight: 600;
  margin-bottom: 16px;
}

.event-list__label-rule {
  display: inline-block;
  width: 32px;
  height: 2px;
  background-color: currentColor;
  margin-right: 12px;
}

.event-list__title {
  margin: 16px 0 0;
  font-size: clamp(2.5rem, 4vw + 1rem, 4rem);
  font-weight: 300;
  line-height: 1.2;
  color: #ffffff;

  span {
    font-weight: 700;
  }
}

.event-list__tabs {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: 64px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 60px;
  padding: 8px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.event-list__tab {
  background: transparent;
  border: none;
  color: #ffffff;
  padding: 20px 40px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 50px;
  min-width: 140px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  &--active {
    background-color: #90fff2 !important;
    color: #0a1435 !important;

    .event-list__tab-day,
    .event-list__tab-date {
      color: #0a1435 !important;
      opacity: 1 !important;
    }
  }
}

.event-list__tab-day {
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 4px;
  color: inherit;
}

.event-list__tab-date {
  font-size: 0.875rem;
  opacity: 0.9;
  color: inherit;
}

.event-list__carousel {
  margin-bottom: 48px;
  background: transparent !important;
  box-shadow: none !important;

  :deep(.v-window__container) {
    background: transparent !important;
  }

  :deep(.v-carousel__controls) {
    display: none;
  }
}

.event-list__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  padding: 20px 0;
}

.event-card {
  background-color: #1a2b5e !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(37, 98, 255, 0.3);
  }
}

.event-card__content {
  display: flex;
  height: 100%;
}

.event-card__image {
  width: 40%;
  height: 100%;
  
  :deep(.v-img) {
    height: 100% !important;
  }
}

.event-card__info {
  width: 60%;
  padding: 32px;
  display: flex;
  flex-direction: column;
}

.event-card__title {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  line-height: 1.3;
}

.event-card__meta {
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.event-card__meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
}

.event-card__icon {
  color: #90fff2;
}

.event-card__description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 24px;
  flex-grow: 1;
}

.event-card__button {
  align-self: flex-start;
  padding: 12px 32px !important;
  font-weight: 500;
}

.event-list__pagination {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
}

.event-list__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5) !important;
  }

  &--active {
    background-color: #90fff2 !important;
    width: 32px !important;
    border-radius: 6px !important;
  }
}



@media (max-width: 1200px) {
  .event-list {
    padding: 64px 32px;
  }

  .event-list__grid {
    gap: 24px;
  }

  .event-card__info {
    padding: 24px;
  }
}

@media (max-width: 968px) {
  .event-list {
    padding: 48px 24px;
  }

  .event-list__tabs {
    flex-wrap: wrap;
    gap: 8px;
    padding: 12px;
    border-radius: 24px;
  }

  .event-list__tab {
    padding: 16px 24px;
    min-width: auto;
    flex: 1 1 calc(33.333% - 16px);
  }

  .event-list__grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .event-card__image {
    min-height: 250px;
  }

  .event-card__info {
    padding: 20px;
  }

  .scroll-top-btn {
    display: flex;
  }
}

@media (max-width: 600px) {
  .event-list {
    padding: 32px 16px;
  }

  .event-list__header {
    margin-bottom: 32px;
  }

  .event-list__tabs {
    margin-bottom: 40px;
  }

  .event-list__tab {
    padding: 12px 16px;
    flex: 1 1 calc(50% - 8px);
  }

  .event-list__tab-day {
    font-size: 1rem;
  }

  .event-list__tab-date {
    font-size: 0.75rem;
  }

  .event-card__title {
    font-size: 1.25rem;
  }

  .event-card__info {
    padding: 20px;
  }

  .event-card__description {
    font-size: 0.9375rem;
  }

  .scroll-top-btn {
    bottom: 24px;
    right: 24px;
  }
}

@media (max-width: 500px) {
  .event-card__content {
    flex-direction: column;
  }

  .event-card__image {
    width: 100%;
    height: 200px;
    min-height: 200px;
    max-height: 200px;

    :deep(.v-img) {
      height: 200px !important;
    }
  }

  .event-card__info {
    width: 100%;
    padding: 20px;
  }

  .event-card__title {
    font-size: 1.125rem;
  }

  .event-card__description {
    font-size: 0.875rem;
  }
}
</style>