<template>
  <div class="container">
    <div>{{ header[0] }}</div>
    <div>{{ header[1] }}</div>
    <div>{{ header[2] }}</div>
    <div>{{ header[3] }}</div>
    <div>{{ header[4] }}</div>
  </div>
</template>
<script>
export default {
  name: 'itemHeader',
  data() {
    return {
      header: ['Workflow Name', 'Status', 'Total Jobs', 'Start Time', 'ETA']
    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  font-size: 14px;
  /* padding: 5px 5px 5px 5px; */
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(206, 204, 204, 0.3);
}
</style>
