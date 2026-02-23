<template>
  <v-dialog
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    max-width="600px"
    max-height="750px"
  >
    <v-card class="speaker-card " rounded="lg" >
      
      
      <v-card-text class="pa-0">
        <div class="d-flex flex-column">
          <v-avatar size="120" class="mb-4">
             <v-img
              :src="speaker.image ? `/images/speakers/${speaker.image}` : '/images/defaultAvatar.png'"
              :alt="speaker.name"
              cover
            ></v-img>
          </v-avatar>
          
          <h2 class="text-h5 font-weight-bold mb-1">{{ speaker.name }}</h2>
          <div class="text-subtitle-1 mb-1">{{ speaker.role }}</div>
          <div class="text-subtitle-2 text-grey-lighten-1 mb-4">{{ speaker.company || '' }}</div>
          
      
          <div class="text-body-2 text-left w-100 mb-6 speaker-bio">
            <h3 class="text-h6 font-weight-bold mb-2">Bio</h3>
            {{ speaker.bio }}
          </div>
          
          <div v-if="speakerTalks.length > 0" class="text-body-2 text-left w-100 speaker-bio">
            <h3 class="text-h6 font-weight-bold mb-2">{{ speakerTalks.length > 1 ? 'Talks' : 'Talk' }}</h3>
            <div v-for="(talk, index) in speakerTalks" :key="index" class="mb-3">
              <div class="font-weight-bold text-subtitle-1">{{ talk.title }}</div>
              <div class="text-caption  mb-1">
                
                <v-chip size="small" color="primary" variant="tonal"><v-icon size="small" class="mr-1">mdi-clock-outline</v-icon> {{ talk.time }}</v-chip> <v-chip v-if="talk.hall" size="small" color="primary" variant="tonal"> {{ talk.hall }}</v-chip>
              </div>
            </div>
          </div>
          <div v-if="speaker.description" class="text-body-2 speaker-description ">{{ speaker.description }}</div>

          
          <div class="d-flex gap-4 mt-6">
            <a
              v-for="social in speaker.socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
              <v-icon color="grey-darken-2">{{ social.icon }}</v-icon>
            </a>
          </div>
        </div>
      </v-card-text>
      
       <v-card-actions style="min-height:auto !important" class="justify-end pa-0">
        <v-btn variant="text"  @click="$emit('update:modelValue', false)">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  speaker: {
    type: Object,
    required: true,
    default: () => ({})
  }
});

defineEmits(['update:modelValue']);

import agendaData from "~/assets/data/agenda.json";

const speakerTalks = computed(() => {
  if (!props.speaker || !props.speaker.id) return [];
  return agendaData.filter(item => 
    item.speaker && Array.isArray(item.speaker) && item.speaker.includes(props.speaker.id)
  );
});
</script>

<style scoped>
.speaker-card {
  border-radius: 16px;
  padding: 24px;
  @media(max-width:500px){
    padding:16px;
  }
}

.speaker-bio, .speaker-description {
  line-height: 1.3;
  opacity: 0.9;
}

.speaker-bio{
  white-space: pre-line;
}

.speaker-description {
  white-space: pre-wrap;
}

.social-link {
  text-decoration: none;
  transition: opacity 0.5s;
}

.social-link:hover {
  opacity: 0.7;
}

.gap-4 {
  gap: 16px;
}

.close-btn {
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    padding: 8px 16px;
    border-radius: 4px;
    transition: background-color 0.2s;
}
</style>