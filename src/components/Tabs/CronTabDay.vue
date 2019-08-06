<template>
<v-radio-group v-model="day.cronEvery">
     <v-layout row align-center class="Compose__CronTab-Row">
        <v-radio value="1"></v-radio>
        <span class="Compose__CronTab-Text">Every day</span>
    </v-layout>

    <v-layout row align-center class="Compose__CronTab-Row">
        <v-radio value="2"></v-radio>
        <span class="Compose__CronTab-Text">Every</span>
            <v-icon class="Input__Icon">mdi-minus</v-icon>
            <v-text-field
                class="Input" 
                v-model="week.incrementIncrement" 
                type="number" 
                :min="1" 
                :max="7">
            </v-text-field>
            <v-icon class="Input__Icon">mdi-plus</v-icon>
        <span class="Compose__CronTab-Text">day(s) starting on </span>
            <v-select 
                :items="weekDays" 
                item-text="name" 
                item-value="value" 
                v-model="week.incrementStart">
            </v-select>
    </v-layout>

    <v-layout row align-center class="Compose__CronTab-Row">
        <v-radio value="3"></v-radio>
        <span class="Compose__CronTab-Text">Every</span>
            <v-icon class="Input__Icon">mdi-minus</v-icon>
            <v-text-field
                class="Input" 
                type="number" 
                v-model="day.incrementIncrement" 
                :min="1" 
                :max="31">
            </v-text-field>
            <v-icon class="Input__Icon">mdi-plus</v-icon>
        <span class="Compose__CronTab-Text">day(s) starting at the</span>
            <v-icon class="Input__Icon">mdi-minus</v-icon>
            <v-text-field
                class="Input" 
                type="number" 
                v-model="day.incrementStart" 
                :min="1" 
                :max="31">
            </v-text-field>
            <v-icon class="Input__Icon">mdi-plus</v-icon>
        <span class="Compose__CronTab-Text">of the month</span>
    </v-layout>

    <v-layout row align-center class="Compose__CronTab-Row">
        <v-radio value="4"></v-radio>
        <span class="Compose__CronTab-Text">Specific day of the week (choose one or many)</span>
            <v-select 
                class="Compose__CronTab-Select" 
                :items="weekDays" 
                item-text="name" 
                item-value="name" 
                v-model="week.specificSpecific" 
                multiple chips deletable-chips small>
            </v-select>
    </v-layout>

    <v-layout row align-center class="Compose__CronTab-Row">
        <v-radio value="5"></v-radio>
        <span class="Compose__CronTab-Text">Specific day of month (choose one or many)</span>
            <v-select 
                class="Compose__CronTab-Select" 
                :items="generateList(31)" 
                v-model="day.specificSpecific" 
                multiple chips deletable-chips small>
            </v-select>
    </v-layout>

    <v-layout row align-center class="Compose__CronTab-Row">
        <v-radio value="6"></v-radio>
        <span class="Compose__CronTab-Text">On the last day of the month</span>
    </v-layout>

    <v-layout row align-center class="Compose__CronTab-Row">
        <v-radio value="7"></v-radio>
        <span class="Compose__CronTab-Text">On the last weekday of the month</span>
    </v-layout>

    <v-layout row align-center class="Compose__CronTab-Row">
        <v-radio value="8"></v-radio>
        <span class="Compose__CronTab-Text">On the last</span>
            <v-select 
                :items="weekDays" 
                item-text="name" 
                item-value="value" 
                v-model="day.cronLastSpecificDomDay">
            </v-select>
        <span class="Compose__CronTab-Text">of the month</span>
    </v-layout>

    <v-layout row align-center class="Compose__CronTab-Row">
        <v-radio value="9"></v-radio>
            <v-icon class="Input__Icon">mdi-minus</v-icon>
            <v-text-field
                class="Input" 
                type="number" 
                v-model="day.cronDaysBeforeEomMinus" 
                :min="1" 
                :max="31">
            </v-text-field>
            <v-icon class="Input__Icon">mdi-plus</v-icon>
        <span class="Compose__CronTab-Text">day(s) before the end of the month</span>
    </v-layout>

    <v-layout row align-center class="Compose__CronTab-Row">
        <v-radio value="10"></v-radio>
        <span class="Compose__CronTab-Text">Nearest weekday (Monday to Friday) to the</span>
            <v-icon class="Input__Icon">mdi-minus</v-icon>
            <v-text-field
                class="Input" 
                type="number" 
                v-model="day.cronDaysNearestWeekday" 
                :min="1" 
                :max="31">
            </v-text-field>
            <v-icon class="Input__Icon">mdi-plus</v-icon>
        <span class="Compose__CronTab-Text">of the month</span>
    </v-layout>

    <v-layout row align-center class="Compose__CronTab-Row">
        <v-radio value="11"></v-radio>
        <span class="Compose__CronTab-Text">On the</span>
            <v-icon class="Input__Icon">mdi-minus</v-icon>
            <v-text-field
                class="Input" 
                type="number" 
                v-model="week.cronNthDayNth" 
                :min="1" 
                :max="5">
            </v-text-field>
            <v-icon class="Input__Icon">mdi-plus</v-icon>
            <v-select 
                class="Compose__CronTab-Select" 
                :items="weekDays" 
                item-text="name" 
                item-value="value" 
                v-model="week.cronNthDayDay"></v-select>
    </v-layout>
</v-radio-group>
</template>

<script>
export default {
    props: {
        day: Object,
        generateList: Function,
        week: Object,
        weekDays: Array
    }
}
</script>