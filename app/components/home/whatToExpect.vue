<template>
  <section class="event-list">
    <div class="event-list__container">
     
      <div class="event-list__header">
        <div class="event-list__label">
          <span class="event-list__label-rule"></span>
          <span class="event-list__label-text">What To Expect</span>
        </div>
        <h1 class="event-list__title">
          Our <span>THEME</span>
        </h1>
      </div>

      <v-container
      fluid
        class="event-list__carousel pa-0"
      >
        
          <div class="event-list__grid">
            <v-card
              v-for="event in eventsByDay"
              :key="event.id"
              class="event-card"
              rounded="xl"
            >
              <div class="event-card__content">
                
                <div class="event-card__info">
                  <h3 class="event-card__title">{{ event.title }}</h3>
                  
                  <p class="event-card__description">{{ event.description }}</p>
                  
                </div>
              </div>
            </v-card>
          </div>
      </v-container>

    </div>

  </section>
</template>

<script setup>









const eventsByDay = [
    {
      id: 1,
      title: 'Opening Keynote 2024',
      time: '9:00 - 10:30 AM',
      date: 'Feb 22, 2024',
      description: 'A day-long Open House for prospective Math students at Yale.',
    },
    {
      id: 2,
      title: 'Climate Workshop',
      time: '11:00 AM - 1:00 PM',
      date: 'Feb 22, 2024',
      description: 'Event featuring a reception for prospective Math students to enjoy at Yale.',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Climate Workshop',
      time: '11:00 AM - 1:00 PM',
      date: 'Feb 22, 2024',
      description: 'Event featuring a reception for prospective Math students to enjoy at Yale.',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80',
    },
  ]



</script>

<style scoped lang="scss">
.event-list {
  background-color: #0a1435;
  padding: 64px 80px ;

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
  grid-template-columns: repeat(3, 1fr);
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


.event-card__info {
  width: 100%;
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





.event-card__description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 24px;
  flex-grow: 1;
}




@media (max-width: 1200px) {
  .event-list {
    padding: 64px 32px;
    // padding:0px 32px 64px 32px;
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
    // padding: 0px 24px 48px 24px;
padding: 48px 24px;
  }



  .event-list__grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }


  .event-card__info {
    padding: 20px;
  }

}

@media (max-width: 600px) {
  .event-list {
    padding: 32px 16px;
  }

  .event-list__header {
    margin-bottom: 32px;
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


}

@media (max-width: 500px) {
  .event-card__content {
    flex-direction: column;
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