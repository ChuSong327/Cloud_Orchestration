<template>
  <div class="IconWrapper">
    <svg class="Icon" :stroke="color" :width="width" height="height">
      <use v-bind="{ 'xlink:href': '/app-sprite.svg#' + name }"></use>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: '#CFCFCF'
    }
  }
}
</script>
<style lang="stylus" scoped>
.IconWrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
}

.Icon {
  // stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  margin-right: 6px;
}
</style>
