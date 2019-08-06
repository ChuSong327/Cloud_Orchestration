<template>
  <v-navigation-drawer
    absolute
    v-model="appViewState.drawer"
    app
    clipped
    temporary
    class="NavDrawer"
  >
    <v-list>
      <v-list-tile
        v-for="(link, index) in links"
        :key="index"
        router
        :to="link.route"
        :title="link.title"
        @click="handleMenuClick($event)"
      >
        <v-list-tile-action>
          <v-icon>mdi-{{ link.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ link.title }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import Breadcrumbs from '@/mixins/breadcrumbs';
// import { AppIcon } from '@/components'

export default {
  name: 'NavDrawer',
  mixins: [Breadcrumbs],
  // components: {
  //   AppIcon
  // },
  data() {
    return {
      logo: require('@/assets/images/zx.jpeg'),
      bigLogo: require('@/assets/images/ZyZx-Logo-C9.png'),
      links: [
        { title: 'Dashboard', icon: 'desktop-mac-dashboard', route: '/' },
        { title: 'Schedules', icon: 'settings', route: '/Schedules' },
        { title: 'Monitor', icon: 'monitor', route: '/monitor' },
        { title: 'Marketplace', icon: 'cart', route: '/marketplace' },
        { title: 'Billing', icon: 'account', route: '/billing' }
        // { title: 'Compose', icon: 'piano', route: '/compose' },
        // { title: 'Execute', icon: 'gesture-tap', route: '/execute' },
        // { title: 'Calendar', icon: 'calendar', route: '/calendar' },
        
      ]
    }
  },
  computed: {
    ...mapState('common', {
      appViewState: 'appViewState',
      activeColor: 'activeColor'
    })
  },
  methods: {
    ...mapActions('common', {
      setAppViewState: 'setAppViewState'
     
    }),
    toggleDrawer() {
      this.setAppViewState({ drawer: !this.appViewState.drawer })
    },
    handleMenuClick($event){
      const target = [{
        text: event.target.innerText,
        disabled: false,
      }]
      this.setBreadcrumbs(target)
    }
  }
}
</script>

