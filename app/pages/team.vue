<template>
  <v-main>
    <v-container fluid class="pb-0" style="max-width: 1800px">
      <v-row class="my-10">
        <v-col cols="12" class="text-center">
          <h1 class="text-h2">Team</h1>

          <v-container fluid>
            <v-row>
              <v-col md="4" v-for="member in team" :key="member.name">
                <v-card variant="flat" rounded="lg">
                  <img
                    :src="
                      member.image
                        ? `/images/team/${member.image}`
                        : '/images/defaultAvatar.png'
                    "
                    width="100%"
                    :alt="member.name"
                  />
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
import teamData from "~/assets/data/team.json";

const team = ref(teamData);
</script>

<style>
</style>