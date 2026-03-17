<template>
  <v-dialog
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    max-width="600px"
    max-height="750px"
  >
    <v-card class="session-dialog-card" rounded="lg">
      <v-card-text class="pa-0">
        <div class="d-flex flex-column">
          <div class="d-flex flex-wrap gap-2 mb-4">
            <v-chip size="small" color="primary" variant="tonal">
              <v-icon size="small" class="mr-1">mdi-clock-outline</v-icon>
              {{ session.time }}
            </v-chip>
            <v-chip
              v-if="session.hall"
              size="small"
              color="primary"
              variant="tonal"
            >
              {{ session.hall }}
            </v-chip>
          </div>

          <h2 class="text-h5 font-weight-bold mb-4">{{ session.title }}</h2>

          <v-btn
            v-show="session.youtubeLink"
            variant="tonal"
            color="error"
            append-icon="mdi-youtube"
            style="width: 180px"
            class="mb-2"
            aria-label="YouTube"
            :href="session.youtubeLink"
            target="_blank"
          >
            Watch Session
          </v-btn>
          <div
            v-if="session.description"
            class="text-body-2 text-left w-100 mb-6 session-description"
          >
            <h3 class="text-h6 font-weight-bold mb-2">About the Session</h3>
            {{ session.description }}
          </div>

          <div
            v-if="sessionSpeakers && sessionSpeakers.length > 0"
            class="text-body-2 text-left w-100"
          >
            <h3 class="text-h6 font-weight-bold mb-4">
              {{ sessionSpeakers.length > 1 ? "Speakers" : "Speaker" }}
            </h3>
            <div class="d-flex flex-column gap-3">
              <div
                v-for="speaker in sessionSpeakers"
                :key="speaker.id"
                class="d-flex align-center"
              >
                <v-avatar size="60" class="mr-4">
                  <v-img
                    :src="
                      speaker.image
                        ? `/images/speakers/${speaker.image}`
                        : '/images/defaultAvatar.png'
                    "
                    :alt="speaker.name"
                    cover
                  ></v-img>
                </v-avatar>
                <div>
                  <div class="font-weight-bold text-subtitle-1">
                    {{ speaker.name }}
                  </div>
                  <div class="text-caption text-grey-darken-1">
                    {{ speaker.agendaRole || speaker.role }}
                  </div>
                  <div
                    v-if="speaker.company"
                    class="text-caption text-grey-darken-1"
                  >
                    {{ speaker.company }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card-text>

      <v-card-actions
        style="min-height: auto !important"
        class="justify-end pa-0 mt-6"
      >
        <v-btn variant="text" @click="$emit('update:modelValue', false)"
          >Close</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { computed } from "vue";
import speakersData from "~/assets/data/speakers.json";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  session: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

defineEmits(["update:modelValue"]);

const sessionSpeakers = computed(() => {
  if (
    !props.session ||
    !props.session.speaker ||
    !Array.isArray(props.session.speaker)
  )
    return [];
  return props.session.speaker
    .map((id) => speakersData.find((s) => s.id === id))
    .filter(Boolean);
});
</script>

<style scoped>
.session-dialog-card {
  border-radius: 16px;
  padding: 24px;
  @media (max-width: 500px) {
    padding: 16px;
  }
}

.session-description {
  line-height: 1.5;
  opacity: 0.9;
  white-space: pre-line;
}

.gap-2 {
  gap: 8px;
}

.gap-3 {
  gap: 12px;
}
</style>
