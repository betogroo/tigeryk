<script setup lang="ts"></script>

<template>
  <v-app-bar>
    <div class="d-flex justify-center">
      <v-btn :to="{ name: 'HomeView' }">Home</v-btn>
      <v-btn :to="{ name: 'AboutView' }">About</v-btn>
    </div>
  </v-app-bar>
</template>
