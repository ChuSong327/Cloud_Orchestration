<template>
    <v-card class="Schedules__Card">
        <v-layout align-center>
              <v-card-title>
                <h4>{{ schedule.name }}</h4>
              </v-card-title>
              <v-menu bottom left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    flat
                    icon
                    color="grey"
                    class="Schedules__Card-Button">
                  <v-icon v-on="on">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-tile :to="{ path: `/compose/${schedule.name}` }">
                    <v-list-tile-action>
                      <v-icon>mdi-lead-pencil</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Edit</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon>mdi-delete</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Delete</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-layout>
            <v-card-text>Total Tasks: {{ schedule.tatalTask }}</v-card-text>
    </v-card>   
</template>

<script>
export default {
    props: {
        schedule: Object
    }
}
</script>