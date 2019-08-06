<template>
  <div>
    <!-- <div class="title px-4">Calendar</div> -->
    <v-container>
      <v-layout justify-space-around class="py-2">
        <v-btn-toggle v-model="text" class="transparent">
          <v-btn small flat value="center" @click="$refs.calendar.prev()"
            >Prev</v-btn
          >
          <v-btn small flat value="right" @click="$refs.calendar.next()"
            >Next</v-btn
          >
        </v-btn-toggle>
        <div class="title px-5">Calender View</div>
        <v-btn-toggle v-model="type" class="transparent">
          <v-btn small value="day" @click="type = 'day'">D</v-btn>
          <v-btn small value="week" @click="type = 'week'">W</v-btn>
          <v-btn small value="month" @click="type = 'month'">M</v-btn>
        </v-btn-toggle>
      </v-layout>
      <v-layout>
        <v-flex xs12 class="mb-3">
          <v-sheet height="500">
            <v-calendar
              :now="today"
              :value="today"
              color="#33324A"
              ref="calendar"
              v-model="start"
              :type="type"
              :end="end"
              light
            >
              <template v-slot:day="{ date }">
                <template v-for="event in eventsMap[date]">
                  <v-menu
                    :key="event.title"
                    v-model="event.open"
                    full-width
                    offset-x
                  >
                    <template v-slot:activator="{ on }">
                      <div
                        v-if="!event.time"
                        v-ripple
                        class="my-event purple--text text--lighten-3"
                        v-on="on"
                        v-html="event.title"
                      ></div>
                    </template>
                    <v-card color="grey lighten-4" min-width="350px" flat>
                      <v-toolbar color="#33324A" dark>
                        <v-btn icon>
                          <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <v-toolbar-title v-html="event.title"></v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                        <v-btn icon>
                          <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <v-card-title primary-title>
                        <span v-html="event.details"></span>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat color="secondary">Cancel</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-menu>
                </template>
              </template>
            </v-calendar>
          </v-sheet>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggle_exclusive: 2,
      text: 'center',
      type: 'month',
      start: '2019-03-01',
      typeOptions: [
        { text: 'Day', value: 'day' },
        { text: 'Week', value: 'week' },
        { text: 'Month', value: 'month' }
      ],
      events: [
        {
          title: '10 jobs',
          details: 'Details...',
          date: '2018-12-30',
          open: false
        },
        {
          title: '15 jobs',
          details: 'Details...',
          date: '2018-12-31',
          open: false
        },
        {
          title: '25 jobs',
          details: 'Details...',
          date: '2019-01-07',
          open: false
        },
        {
          title: '26 jobs',
          details: 'Details...',
          date: '2019-01-03',
          open: false
        },
        {
          title: '53 jobs',
          details: 'Details...',
          date: '2019-01-01',
          open: false
        },
        {
          title: '19 jobs',
          details: 'Details...',
          date: '2019-01-21',
          open: false
        },
        {
          title: '43 jobs',
          details: 'Details...',
          date: '2019-02-01',
          open: false
        },
        {
          title: '10 jobs',
          details: 'Details...',
          date: '2019-03-01',
          open: false
        },
        {
          title: '11 jobs',
          details: 'Details...',
          date: '2019-03-02',
          open: false
        },
        {
          title: '12 jobs',
          details: 'Details...',
          date: '2019-03-03',
          open: false
        },
        {
          title: '13 jobs',
          details: 'Details...',
          date: '2019-03-04',
          open: false
        },
        {
          title: '14 jobs',
          details: 'Details...',
          date: '2019-03-05',
          open: false
        },
        {
          title: '15 jobs',
          details: 'Details...',
          date: '2019-03-06',
          open: false
        },
        {
          title: '16 jobs',
          details: 'Details...',
          date: '2019-03-07',
          open: false
        },
        {
          title: '17 jobs',
          details: 'Details...',
          date: '2019-03-08',
          open: false
        },
        {
          title: '18 jobs',
          details: 'Details...',
          date: '2019-03-09',
          open: false
        },
        {
          title: '19 jobs',
          details: 'Details...',
          date: '2019-03-10',
          open: false
        },
        {
          title: '20 jobs',
          details: 'Details...',
          date: '2019-03-11',
          open: false
        },
        {
          title: '21 jobs',
          details: 'Details...',
          date: '2019-03-12',
          open: false
        },
        {
          title: '10 jobs',
          details: 'Details...',
          date: '2019-03-13',
          open: false
        },
        {
          title: '11 jobs',
          details: 'Details...',
          date: '2019-03-14',
          open: false
        },
        {
          title: '12 jobs',
          details: 'Details...',
          date: '2019-03-15',
          open: false
        },
        {
          title: '13 jobs',
          details: 'Details...',
          date: '2019-03-16',
          open: false
        },
        {
          title: '14 jobs',
          details: 'Details...',
          date: '2019-03-17',
          open: false
        },
        {
          title: '15 jobs',
          details: 'Details...',
          date: '2019-03-18',
          open: false
        },
        {
          title: '5 pending',
          details: 'Details...',
          date: '2019-03-18',
          open: false
        },
        {
          title: '16 jobs',
          details: 'Details...',
          date: '2019-03-19',
          open: false
        },
        {
          title: '17 jobs',
          details: 'Details...',
          date: '2019-03-20',
          open: false
        },
        {
          title: '18 jobs',
          details: 'Details...',
          date: '2019-03-21',
          open: false
        },
        {
          title: '19 jobs',
          details: 'Details...',
          date: '2019-03-22',
          open: false
        },
        {
          title: '20 jobs',
          details: 'Details...',
          date: '2019-03-23',
          open: false
        },
        {
          title: '21 jobs',
          details: 'Details...',
          date: '2019-03-24',
          open: false
        },
        {
          title: '11 jobs',
          details: 'Details...',
          date: '2019-03-25',
          open: false
        },
        {
          title: '12 jobs',
          details: 'Details...',
          date: '2019-03-26',
          open: false
        },
        {
          title: '13 jobs',
          details: 'Details...',
          date: '2019-03-27',
          open: false
        },
        {
          title: '14 jobs',
          details: 'Details...',
          date: '2019-03-28',
          open: false
        },
        {
          title: '15 jobs',
          details: 'Details...',
          date: '2019-03-29',
          open: false
        },
        {
          title: '16 jobs',
          details: 'Details...',
          date: '2019-03-30',
          open: false
        },
        {
          title: '17 jobs',
          details: 'Details...',
          date: '2019-03-31',
          open: false
        }
      ]
    }
  },
  computed: {
    // convert the list of events into a map of lists keyed by date
    eventsMap() {
      const map = {}
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
      return map
    }
  },
  methods: {
    open(event) {
      alert(event.title)
    }
  }
}
</script>
<style lang="stylus" scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #33324A;
  color: #ffffff;
  border: 1px solid #33324A;
  width: 100%;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
}
</style>
