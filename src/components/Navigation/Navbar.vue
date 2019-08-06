<template>
  <nav>
    <NavigationAppHeader />
    <NavigationNavDrawer />
  </nav>
</template>

<script>
import AppHeader from './AppHeader'
import NavDrawer from './NavDrawer'
export default {
  name: 'Navbar',
  components: {
    AppHeader,
    NavDrawer
  },
  data() {
    return {}
  }
}
</script>
