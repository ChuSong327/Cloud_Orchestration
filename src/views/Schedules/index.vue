<template>
  <div class='Schedules'>
    <NavigationAppSubHeader />
    <!-- Sub Menu -->
    <v-layout row justify-start class='Schedules__Menu'>
      <v-btn @click='toggleDialogState()' class='textCapitalize'>
        <v-icon>mdi-plus</v-icon>
        Create a New Schedule
      </v-btn>

      <v-dialog
        v-model='dialog'
        persistent
        max-width='600px'
        @keydown.esc='toggleDialogState()'>
        <v-card>
          <v-form @submit='onSubmit'>
            <v-container>
              <v-text-field
                v-model='scheduleName' 
                label="Please enter the schedule's name" 
                required>
              </v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click='toggleDialogState()' class='textCapitalize'>Cancel</v-btn>
                <v-btn 
                  class='textCapitalize'
                  @click='
                    toggleDialogState()
                    onSubmit()'
                >Enter</v-btn>
              </v-card-actions>
            </v-container>
          </v-form>
        </v-card>
      </v-dialog>
    </v-layout>
    <!-- /Sub Menu -->
    
    <!-- Schedules List -->
    <v-container grid-list-md fluid class='Schedules__Container'>
      <v-layout row wrap justify-start>
        <v-flex 
            v-for='(schedule, index) in scheduleList'
            :key='index'
            shrink>
          <CardSchedule :schedule='schedule' />
        </v-flex>
    </v-layout>
    </v-container>
    <!-- /Schedules List -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Breadcrumbs from '@/mixins/breadcrumbs'

export default {
  mixins:[Breadcrumbs],
  data() {
    return {
      scheduleName: ''
    }
  },
  computed: {
    ...mapState('common', {
      dialog: 'dialog',
    }),
    ...mapState('schedules', {
      scheduleList: 'scheduleList',
    })
  },
  methods: {
    ...mapMutations('common', {
      toggleDialogState: 'toggleDialogState',
    }),
    ...mapActions('schedules', {
      getScheduleList: 'getScheduleList',
    }),
    onSubmit() {
      this.$router.push(`/compose/${this.scheduleName}`)
      
    }
  },
  created() {
    this.getScheduleList()
  },
  mounted() {
    this.setBreadcrumbs([{
      text: this.$route.name, disabled: false
    }])
  }
}
</script>
