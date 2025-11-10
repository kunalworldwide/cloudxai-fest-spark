<template>
  <v-dialog v-model="dialog" persistent width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-card
        class="pa-3 py-10 text-center"
        variant="flat"
        rounded="lg"
        v-bind="activatorProps"
      >
        <v-avatar size="200" color="primary" variant="flat" rounded="lg">
          <!-- <v-icon size="50">mdi-account-outline</v-icon> -->
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/8/88/Bill_Gates_at_the_European_Commission_-_2025_-_P067383-987995_%28cropped%29.jpg"
          ></v-img>
        </v-avatar>
        <h1>Speaker {{ props.item }}</h1>
        <p>Speaker {{ props.item }} is a speaker at the event</p>
      </v-card>
    </template>

    <v-card
      prepend-icon="mdi-map-marker"
      text="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
      title="Use Google's location service?"
    >
      <template v-slot:actions>
        <v-spacer></v-spacer>

        <v-btn @click="dialog = false"> Disagree </v-btn>

        <v-btn @click="dialog = false"> Agree </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup>
const dialog = ref(false);
const props = defineProps({
  item: {
    type: Number,
    required: true,
  },
});
</script>

<style>
</style>