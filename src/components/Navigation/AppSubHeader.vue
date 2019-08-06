<template>
    <v-card flat class="AppSubHeader">
        <v-breadcrumbs :items="breadcrumbs">
            <template v-slot:item="props">
                <router-link :to="{ name: props.item.text }" :class="[props.item.disabled && 'disabled']">
                    {{ props.item.text.toUpperCase() }}
                </router-link>
            </template>
        </v-breadcrumbs>
    </v-card>
</template>

<script>
import { mapState } from "vuex"

export default {
    computed: {
        ...mapState('breadcrumbs', {
            breadcrumbs: 'breadcrumbs'
        })
    }
}
</script>