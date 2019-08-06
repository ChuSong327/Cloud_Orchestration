<template>
<v-radio-group v-model="type.cronEvery">
    <v-layout row align-center class="Compose__CronTab-Row">
        <v-radio value="1"></v-radio>
        <span class="Compose__CronTab-Text">Every {{ type.name }}</span>
    </v-layout>

    <v-layout row align-center class="Compose__CronTab-Row">
        <v-radio value="3"></v-radio>
        <span class="Compose__CronTab-Text">Specific {{ type.name }} (choose one or many)</span>
            <v-select 
                class="Compose__CronTab-Select" 
                :items="generateList(num, type.name)" 
                v-model="type.specificSpecific" 
                chips multiple deletable-chips>
            </v-select>
    </v-layout>

    <v-layout row align-center class="Compose__CronTab-Row">
        <v-radio value="4"></v-radio>
        <span class="Compose__CronTab-Text">Every </span>
            <v-icon class="Input__Icon" >mdi-minus</v-icon>
            <v-text-field
                class="Input"  
                v-model="type.incrementIncrement"
                type="number"  
                :min="type.input.min"
                :max="type.input.max - 1">
            </v-text-field>
            <v-icon class="Input__Icon" @click="increment(type.name, 'incrementIncrement')">mdi-plus</v-icon>
        <span class="Compose__CronTab-Text">{{ type.name }} between {{ type.name }}</span>
            <v-icon class="Input__Icon">mdi-minus</v-icon>
            <v-text-field
                class="Input"
                v-model="type.rangeStart"
                type="number"
                :min="type.name === 'month' ? type.input.min + 1 : type.name === 'year' ? 2019 : type.input.min"
                :max="type.input.max - 1">
            </v-text-field>
            <v-icon class="Input__Icon">mdi-plus</v-icon>
                
        <span class="Compose__CronTab-Text">and {{ type.name }}</span>
            <v-icon class="Input__Icon">mdi-minus</v-icon>
            <v-text-field
                class="Input"
                v-model="type.rangeEnd" 
                type="number"
                :min="type.name === 'month' ? type.input.min + 1 : type.name === 'year' ? 2019 : type.input.min"
                :max="type.input.max - 1">
            </v-text-field>
            <v-icon class="Input__Icon">mdi-plus</v-icon>
    </v-layout>
</v-radio-group>
</template>

<script>
export default {
    props: {
        type: Object,
        generateList: Function,
        num: Number
    }
}
</script>