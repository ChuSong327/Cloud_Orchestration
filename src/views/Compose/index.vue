<template>
  <div class="Compose">
    <NavigationAppSubHeader />
    <div class="Compose__Container">
      <v-layout justify-space-between>
        <CardCron />
        <div>
          <v-btn color="primary" flat @click="publishSchedule">Publish</v-btn>
          <v-btn flat @click="deleteSchedule">Delete</v-btn>
        </div>
        <TabsCron v-if="editMode" />
      </v-layout>
      
      <v-layout row>
        <v-flex xs12>
          <CardCompose
            :dataPalette="dataPalette"
            :dataDiagramNode="scheduleObj.taskHierarchy.jobs"
            :dataDiagramLink="scheduleObj.taskHierarchy.links"
            :connectionList="connectionList"
            :getConnectionList="getConnectionList"
            :updateExistingJob="updateExistingJob" />
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Breadcrumbs from "@/mixins/breadcrumbs"

export default {
  mixins:[Breadcrumbs],
  computed: {
    ...mapState("compose", {
      scheduleObj: "scheduleObj",
      dataPalette: "dataPalette",
    }),
    ...mapState("config", {
      connectionList: "connectionList"
    }),
    ...mapState("common", {
      editMode: "editMode"
    })
  },
  methods: {
    ...mapMutations("compose", {
      updateExistingJob: "updateExistingJob",
    }),
    ...mapActions("compose", {
      postSchedule: "postSchedule",
      getSchedule: "getSchedule"
    }),
    ...mapActions("config", {
      getConnectionList: "getConnectionList"
    }),
    publishSchedule() {
      this.postSchedule(this.scheduleObj)
    },
    deleteSchedule() {
      /* Delete schedule when clicked */
    }
  },
  created() {
    /* getSchedule information and store it to scheduleObj */
  },
  mounted(){
    this.setBreadcrumbs([
      { text: "Schedules", disabled: false },
      { text: this.$route.params.scheduleName, disabled: true }])
  }
}
</script>