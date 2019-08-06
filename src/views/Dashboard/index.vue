<template>
  <div class="Dashboard">
    <NavigationAppSubHeader />
    <v-container fluid>
      <div class="MyGrid">
        <div class="box a">
          <stacked-area title="Scheduled Jobs"/>
        </div>
        <div class="box c">
          <rose-chart title="Scheduled Jobs" :chartData="chartData"/>
        </div>
        <div class="box d">
          DLorem ipsum dolor, sit amet consectetur adipisicing elit.
          Consequuntur fuga eos amet quis accusamus quae. Accusamus libero vitae
          alias. Harum atque expedita tempore magni nesciunt quas labore vero
          fuga doloribus.
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
import Breadcrumbs from "@/mixins/breadcrumbs"

import RoseChart from '@/components/Charts/RosePie'
import StackedArea from '@/components/Charts/StackedArea'
export default {
  mixins:[Breadcrumbs],
  components: {
    RoseChart,
    StackedArea
  },
  data() {
    return {
      chartData: {
        Pum: 6,
        Malware: 5,
        Exploit: 4,
        Pup: 3,
        Ransomware: 2,
        Website: 1
      }
    }
  },
  created(){
    this.setBreadcrumbs([
      {text: this.$route.name, disabled: false}
    ])
  }
}
</script>

<style lang="stylus" scoped>
.Dashboard {
  background: #fff;
}

.MyGrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 10px;
  background: transparent;
}

.box {
  border: 1px solid #fafafa;
  color: #444;
  border-radius: 5px;
  padding: 20px;
  background: #FBFBFB;
}

// .box:hover {
// box-shadow: 0 25px 55px rgba(0, 0, 0, 0.2), 0 16px 28px rgba(0, 0, 0, 0.24);
// }
.a {
  grid-column: 1 / 4;
  grid-row: 1;
}

.b {
  grid-column: 3;
  grid-row: 2 / 3;
}

.c {
  grid-column: 1 / 3;
  grid-row: 2;
}

.d {
  grid-column: 3;
  grid-row: 2;
}
</style>
