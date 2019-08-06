<template>
  <v-card class="Marketplace__ProviderCard">
    <router-link :to="{ path: `/configure/${provider.name}` }">
      <div class="Marketplace__ProviderCard-Image">
        <v-img
          :src="require(`@/assets/icons/${provider.name}.svg`)"
          :class="provider.name"
        >
        </v-img>
      </div>
      <div class="Marketplace__ProviderCard-Title">
        <h3>{{ provider.name.toUpperCase() }}</h3>
      </div>
    </router-link>
  </v-card>
</template>

<script>
export default {
  props: {
    provider: Object
  }
}
</script>
