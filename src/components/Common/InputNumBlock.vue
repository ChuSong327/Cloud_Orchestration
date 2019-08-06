<template>
<v-layout row align-center>
    <v-icon class="Input__Icon">mdi-minus</v-icon>
        <v-text-field
            class="Input"  
            v-model="model"
            type="number"  
            :min="min"
            :max="max">
        </v-text-field>
    <v-icon class="Input__Icon">mdi-plus</v-icon>
</v-layout>  
</template>

<script>
export default {
    props: {
        model: String,
        type: String,
        min: Number,
        max: Number
    }
}
</script>