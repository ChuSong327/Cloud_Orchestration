<template>
  <div>
    <img :src="source" alt="Icon" :class="cssClasses" stroke="red" />
  </div>
</template>

<script>
export default {
  name: 'AppIcon',
  data() {
    return {
      source: '',
      cssClasses: ['AppIcon']
    }
  },
  mounted() {
    if (this.rotate) {
      this.cssClasses.push('AppIcon__rotate')
    }
    if (this.spin) {
      this.cssClasses.push('AppIcon__spin')
    }
    if (this.flipH) {
      this.cssClasses.push('AppIcon__flipH')
    }
    if (this.flipV) {
      this.cssClasses.push('AppIcon__flipV')
    }
    if (this.xs) {
      this.cssClasses.push('AppIcon__lg')
    }
    if (this.sm) {
      this.cssClasses.push('AppIcon__xs')
    }
    if (this.sm) {
      this.cssClasses.push('AppIcon__sm')
    }
    if (this.md) {
      this.cssClasses.push('AppIcon__md')
    }
    if (this.xl) {
      this.cssClasses.push('AppIcon__xl')
    }
    if (this.xxl) {
      this.cssClasses.push('AppIcon__xxl')
    }
    let iconName = ''
    try {
      iconName = this.$slots.default[0].text
    } catch (e) {
      return false
    }
    import(`@/assets/icons/${iconName}.svg`)
      .then(file => {
        this.source = file['default']
      })
      .catch(() => {
        console.error(this.source)
      })
  },
  props: {
    flipH: Boolean,
    flipV: Boolean,
    rotate: Boolean,
    spin: Boolean,
    xs: Boolean,
    sm: Boolean,
    md: Boolean,
    lg: Boolean,
    xl: Boolean,
    xxl: Boolean
  }
}
</script>
<style lang="stylus" scoped>
.AppIcon {
  margin: 0 0.2rem;

  &__flipH {
    transform: scale(-1, 1);
  }

  &__flipV {
    transform: scale(1, -1);
  }

  &__rotate {
    transform: rotate(90deg);
  }

  &__spin {
    animation: spin 1s 0s infinite linear;
  }

  &__sm {
    width: 1rem;
  }

  &__xs {
    width: 24px;
    height: 24px;
  }

  &__md {
    width: 1.3rem;
  }

  &__lg {
    width: 1.5rem;
    max-height: 2rem;
  }

  &__xl {
    width: 2rem;
  }

  &__xxl {
    width: 4rem;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
