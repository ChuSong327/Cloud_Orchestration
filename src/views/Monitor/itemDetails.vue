<template>
  <div class="container">
    <div>{{ details.name }}</div>
    <div>{{ details.state }}</div>
    <div>{{ details.totalJobs }}</div>
    <div>{{ details.startTime }}</div>
    <div>{{ details.eta }}</div>
  </div>
</template>

<script>
export default {
  name: 'itemDetails',
  props: {
    details: Object
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  font-size: 16px;
  padding: 10px 5px 5px 10px;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f4f5f7;
}
</style>
