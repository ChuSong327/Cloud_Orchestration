<template>
  <div :class="['item', 'overflowdiv', state]">{{ this.name }}</div>
</template>

<script>
export default {
  name: 'item',
  props: {
    name: String,
    state: String
  }
}
</script>

<style scoped>
.item {
  background-color: #fff;
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
  /* background-color: #8fbc8f; */
  border-left: #8fbc8f 5px solid;
  border-top: rgba(143, 188, 143, 0.3) 1px solid;
  border-bottom: rgba(143, 188, 143, 0.3) 1px solid;
  border-right: rgba(143, 188, 143, 0.3) 1px solid;
}
.running {
  /* background-color:palegoldenrod; */
  border-left: palegoldenrod 5px solid;
  border-top: palegoldenrod 1px solid;
  border-bottom: palegoldenrod 1px solid;
  border-right: palegoldenrod 1px solid;
}
.waiting {
  /* background-color:lightgrey; */
  border-left: lightgrey 5px solid;
  border-top: lightgrey 1px solid;
  border-bottom: lightgrey 1px solid;
  border-right: lightgrey 1px solid;
}
.failed {
  /* background-color:rgb(247, 125, 125); */
  border-left: rgb(247, 125, 125) 5px solid;
  border-top: rgb(247, 125, 125) 1px solid;
  border-bottom: rgb(247, 125, 125) 1px solid;
  border-right: rgb(247, 125, 125) 1px solid;
}
.other {
  /* background-color:rgb(193, 179, 223); */
  border-left: rgb(193, 179, 223) 5px solid;
  border-top: rgb(193, 179, 223) 1px solid;
  border-bottom: rgb(193, 179, 223) 1px solid;
  border-right: rgb(193, 179, 223) 1px solid;
}
</style>
