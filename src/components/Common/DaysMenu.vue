<template>
  <v-menu>
    <template v-slot:activator="{ on }">
      <v-text-field label="Select a day" v-on="on"></v-text-field>
    </template>
    <v-list v-for="(day, index) in days" :key="index" dense light>
      <v-list-tile @click="">
        <v-list-tile-title>{{ day }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ]
    }
  }
}
</script>
