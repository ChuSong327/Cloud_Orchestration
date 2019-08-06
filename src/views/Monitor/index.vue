<template>
  <div>
    <NavigationAppSubHeader />
    <v-container>
      <v-layout xs12>
        <v-flex xs12>
          <v-text-field
            xs12
            id="searchbar"
            solo
            label="Search"
            prepend-inner-icon="search"
            v-model="filters.type"
            @keyup="filterWorkFlow($event.target.value)"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <div :class="getClass()">
            <div
              id="1"
              class="boxtitle success overflowdiv"
              @click="activeId = 1"
              @dblclick="activeId = 0"
            >
              {{ getTitle(1, 'Success') }}
            </div>
            <div
              id="2"
              class="boxtitle running overflowdiv"
              @click="activeId = 2"
              @dblclick="activeId = 0"
            >
              {{ getTitle(2, 'Running') }}
            </div>
            <div
              id="3"
              class="boxtitle waiting overflowdiv"
              @click="activeId = 3"
              @dblclick="activeId = 0"
            >
              {{ getTitle(3, 'Waiting') }}
            </div>
            <div
              id="4"
              class="boxtitle failed overflowdiv"
              @click="activeId = 4"
              @dblclick="activeId = 0"
            >
              {{ getTitle(4, 'Failed') }}
            </div>
            <div
              id="5"
              class="boxtitle other overflowdiv"
              @click="activeId = 5"
              @dblclick="activeId = 0"
            >
              {{ getTitle(5, 'Other') }}
            </div>
            <div class="box">
              <div v-if="activeId === 1">
                <item-header />
                <div v-for="item in getData('success')" :key="item.slno">
                  <item-details :details="item" />
                </div>
              </div>
              <div
                v-for="item in getData('success')"
                :key="item.slno"
                v-else-if="activeId === 0"
                @click="viewWF(item.name, item.slno)"
                style="cursor:pointer;"
              >
                <item :name="item.name" :state="item.state" />
              </div>
              <div class="collapsed" v-else>
                <div>Success</div>
              </div>
            </div>
            <div class="box">
              <div
                v-if="activeId === 2"
                style="background-color:white!important;"
              >
                <item-header />
                <div v-for="item in getData('running')" :key="item.slno">
                  <item-details :details="item" />
                </div>
              </div>
              <div
                v-for="item in getData('running')"
                :key="item.slno"
                v-else-if="activeId === 0"
                @click="viewWF(item.name, item.slno)"
                style="cursor:pointer;"
              >
                <item :name="item.name" :state="item.state" />
              </div>
              <div class="collapsed" v-else>
                <div>Running</div>
              </div>
            </div>
            <div class="box">
              <div v-if="activeId === 3">
                <item-header />
                <div v-for="item in getData('waiting')" :key="item.slno">
                  <item-details :details="item" />
                </div>
              </div>
              <div
                v-for="item in getData('waiting')"
                :key="item.slno"
                v-else-if="activeId === 0"
                @click="viewWF(item.name, item.slno)"
                style="cursor:pointer;"
              >
                <item :name="item.name" :state="item.state" />
              </div>
              <div class="collapsed" v-else>
                <div>Waiting</div>
              </div>
            </div>
            <div class="box">
              <div v-if="activeId === 4">
                <item-header />
                <div v-for="item in getData('failed')" :key="item.slno">
                  <item-details :details="item" />
                </div>
              </div>
              <div
                v-for="item in getData('failed')"
                :key="item.slno"
                v-else-if="activeId === 0"
                @click="viewWF(item.name, item.slno)"
                style="cursor:pointer;"
              >
                <item :name="item.name" :state="item.state" />
              </div>
              <div class="collapsed" v-else>
                <div>Failed</div>
              </div>
            </div>
            <div class="box">
              <div v-if="activeId === 5">
                <item-header />
                <div v-for="item in getData('other')" :key="item.slno">
                  <item-details :details="item" />
                </div>
              </div>
              <div
                v-for="item in getData('other')"
                :key="item.slno"
                v-else-if="activeId === 0"
              >
                <item :name="item.name" :state="item.state" />
              </div>
              <div class="collapsed" v-else>
                <div>Other</div>
              </div>
            </div>
          </div>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-btn primary @click="activeId = 0" flat>Reset View</v-btn>
          <hr />
          Data
          <hr />
          <div>{{ wfdata }}</div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import Breadcrumbs from '@/mixins/breadcrumbs'
import Item from './item'
import ItemHeader from './itemHeader'
import ItemDetails from './itemDetails'
// import wfData from '../assets/workflowData.json'
// import { mapState, mapActions } from 'vuex'

export default {
  name: 'monitor',
  mixins: [Breadcrumbs],
  components: {
    Item,
    ItemHeader,
    ItemDetails
  },
  computed: {
    // ...mapState('monitor', {
    //   workflowMonitorData: 'workflowMonitorData',
    //   isWorkflowMonitorDataLoading: 'isWorkflowMonitorDataLoading'
    // })
    workflowMonitorData() {
      return require('@/assets/data/workflowData.json')
    }
  },
  data() {
    return {
      msg: 'Welcome to My Vue.js App powered by webpack',
      activeId: 0,
      activeClass: 'wrapper',
      wfdata: [],
      filters: {
        type: ''
      }
    }
  },
  mounted() {
    // this.getWMData()
    this.wfdata = this.workflowMonitorData
  },
  methods: {
    // ...mapActions('monitor', {
    //   getWorkflowMonitorData: 'getWorkflowMonitorData'
    // }),
    // async getWMData () {
    // //   await this.getWorkflowMonitorData()
    //   this.wfdata = this.workflowMonitorData
    // },
    viewWF(name, id) {
      // console.log(name + ':' + id)
      this.$router.push({
        name: 'Workflow',
        params: { wfName: name, wfId: id }
      })
    },
    getData(state) {
      return this.wfdata.filter(d => d.state === state)
    },
    getDataCount(state) {
      return this.wfdata.filter(d => d.state === state).length
    },
    getTitle(id, state) {
      return this.activeId === id
        ? state + ' (' + this.getDataCount(state.toLowerCase()) + ')'
        : this.activeId === 0
        ? state + ' (' + this.getDataCount(state.toLowerCase()) + ')'
        : state.split('')[0] +
          ' (' +
          this.getDataCount(state.toLowerCase()) +
          ')'
    },
    getClass() {
      switch (this.activeId) {
        case 1:
          this.activeClass = 'wrapperA'
          break
        case 2:
          this.activeClass = 'wrapperB'
          break
        case 3:
          this.activeClass = 'wrapperC'
          break
        case 4:
          this.activeClass = 'wrapperD'
          break
        case 5:
          this.activeClass = 'wrapperE'
          break
        default:
          this.activeClass = 'wrapper'
      }
      return this.activeClass
    },
    filterWorkFlow(e) {
      if (e.length > 0) {
        // console.log(e)
        // flattens the array and returns distinct match
        this.wfdata = [
          ...this.wfdata.filter(d =>
            d.name.toLowerCase().includes(e.toLowerCase())
          )
        ]
        // .reduce((r, i) => !r.some(j => !Object.keys(i).some(k => i[k] !== j[k])) ? [...r, i] : r, [])
      } else {
        this.wfdata = this.workflowMonitorData
      }
    }
  },
  mounted() {
    this.setBreadcrumbs([
      {
        text: this.$route.name,
        disabled: false
      }
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  background-color: #fff;
  color: #444;
}

.wrapperA {
  display: grid;
  grid-template-columns: 1fr 0.1fr 0.1fr 0.1fr 0.1fr;
  grid-gap: 5px;
  background-color: #fff;
  color: #444;
  font-weight: 100;
}
.wrapperB {
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.1fr 0.1fr 0.1fr;
  grid-gap: 5px;
  background-color: #fff;
  color: #444;
}
.wrapperC {
  display: grid;
  grid-template-columns: 0.1fr 0.1fr 1fr 0.1fr 0.1fr;
  grid-gap: 5px;
  background-color: #fff;
  color: #444;
}
.wrapperD {
  display: grid;
  grid-template-columns: 0.1fr 0.1fr 0.1fr 1fr 0.1fr;
  grid-gap: 5px;
  background-color: #fff;
  color: #444;
}
.wrapperE {
  display: grid;
  grid-template-columns: 0.1fr 0.1fr 0.1fr 0.1fr 1fr;
  grid-gap: 5px;
  background-color: #fff;
  color: #444;
}
.boxtitle {
  background-color: #fff;
  color: #000;
  border-radius: 2px;
  border: rgb(199, 199, 199) 1px solid;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  user-select: none;
  cursor: pointer;
}
.box {
  background-color: #fafafa;
  color: #000;
  border-radius: 2px;
  border: rgb(199, 199, 199) 1px solid;
  padding: 20px;
  font-size: 150%;
  height: 80vh;
}
.item {
  color: #000;
  border-radius: 2px;
  margin-bottom: 10px;
  font-size: 14px;
  padding: 10px;
  text-align: left;
}
.overflowdiv {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.success {
  background-color: darkseagreen;
}
.running {
  background-color: palegoldenrod;
}
.waiting {
  background-color: lightgrey;
}
.failed {
  background-color: rgb(247, 125, 125);
}
.other {
  background-color: rgb(193, 179, 223);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: all 0;
}
.btn {
  color: #fff;
  align-items: center;
  border-radius: 2px;
  display: inline-flex;
  height: 36px;
  background-color: #3164a9 !important;
  border-color: #3164a9 !important;
  flex: 0 0 auto;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  margin: 6px 8px;
  min-width: 88px;
  outline: 0;
  text-transform: uppercase;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
}
.collapsed {
  top: 50%;
  position: relative;
  transform: translateY(-50%);
  text-transform: capitalize;
  transform: rotate(-90deg);
}
#searchbar {
  font-size: 18px;
  background-color: #f9f9f9;
  /* margin-top: 10px;
  margin-bottom: 10px; */
}
.w-full {
  width: 25%;
}
.shadow {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.rounded {
  border-radius: 0.25rem;
}
[type='search'] {
  -moz-appearance: textfield;
  appearance: textfield;
  -webkit-appearance: textfield;
  outline-offset: -2px;
  border: 0 solid #dae4e9;
}
</style>
