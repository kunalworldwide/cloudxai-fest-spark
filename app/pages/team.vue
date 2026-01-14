<template>
  <v-main>
    <v-container fluid class="pb-0" style="max-width: 1800px">
      <v-row class="my-10">
        <v-col cols="12" class="text-center">
          <h1 class="text-h2">TEAM</h1>
          <p>Meet the people behind the event</p>

          <v-container fluid class="mt-8">
            <v-row justify="center" align="center">
              <v-col md="3" sm="6" cols="12" xl="2" xxl="2" v-for="member in team" :key="member.name">
                <v-card variant="flat" rounded="lg">
                  <v-avatar :size="width>600?200:150">
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
const {width} = useDisplay()
import teamData from "~/assets/data/team.json";

const team = ref(teamData);
</script>

<style scoped>
</style>