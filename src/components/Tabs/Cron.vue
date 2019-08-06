<template>
<div class="Compose__CronTab">
    <v-card flat>
        <v-card-text class="Compose__CronTab-Header">{{ this.cron }}</v-card-text>
        <v-tabs>
            <v-tab v-for="(tab, index) in tabName" :key="index">{{ tab }}</v-tab>
            <!-- Seconds -->
            <v-tab-item>
                <TabsCronTabGeneral 
                    :type="second" 
                    :generateList="generateList"
                    :num="60" />
            </v-tab-item>   

            <!-- Minutes -->
            <v-tab-item>
                <TabsCronTabGeneral 
                    :type="minute"
                    :generateList="generateList"
                    :num="60"/>
            </v-tab-item>

            <!-- Hours -->
            <v-tab-item>
                <TabsCronTabGeneral 
                    :type="hour"
                    :generateList="generateList"
                    :num="24" />
            </v-tab-item>

            <!-- Day -->
            <v-tab-item>
                <TabsCronTabDay
                    :day="day" 
                    :week="week"
                    :weekDays="weekDays"
                    :generateList="generateList" />
            </v-tab-item>

            <!-- Month -->
            <v-tab-item>
                <TabsCronTabGeneral 
                    :type="month"
                    :generateList="generateList"
                    :num="13"/>
            </v-tab-item>

            <!-- Year -->
            <v-tab-item>
                <TabsCronTabGeneral 
                    :type="year"
                    :generateList="generateList"
                    :num="2099"/>
            </v-tab-item>
        </v-tabs>
         <div class="bottom">
        <v-btn color="primary" @click="change">Save</v-btn>
        <v-btn type="primary" @click="changeEditMode" flat>Cancel</v-btn>
    </div>
    </v-card>
</div>
</template>

<script>
import cron from "@/mixins/cron"
import CronTabGeneral from "./CronTabGeneral"
import CronTabDay from "./CronTabDay"
import { mapMutations } from 'vuex';

export default {
    mixins: [cron],
    computed: {
        secondsText() {
            let seconds = '';
            let cronEvery=this.second.cronEvery;
            switch (cronEvery.toString()){
                case '1':
                    seconds = '*';
                    break;
                case '3':
                    this.second.specificSpecific.map(val=> {
                        seconds += val+','
                    });
                    seconds = seconds.slice(0, -1);
                    break;
                case '4':
                    seconds = this.second.rangeStart+'-'+this.second.rangeEnd+'/'+this.second.incrementIncrement;
                    break;
            }
            return seconds;
        },
        minutesText() {
            let minutes = '';
            let cronEvery=this.minute.cronEvery;
            switch (cronEvery.toString()){
                case '1':
                    minutes = '*';
                    break;
                case '3':
                    this.minute.specificSpecific.map(val=> {
                        minutes += val+','
                    });
                    minutes = minutes.slice(0, -1);
                    break;
                case '4':
                    minutes = this.minute.rangeStart+'-'+this.minute.rangeEnd + '/' + this.minute.incrementIncrement;
                    break;
            }
            return minutes;
        },
        hoursText() {
            let hours = '';
            let cronEvery=this.hour.cronEvery;
            switch (cronEvery.toString()){
                case '1':
                    hours = '*';
                    break;
                case '3':
                    this.hour.specificSpecific.map(val=> {
                        hours += val+','
                    });
                    hours = hours.slice(0, -1);
                    break;
                case '4':
                    hours = this.hour.rangeStart+'-'+this.hour.rangeEnd + '/' + this.hour.incrementIncrement;
                    break;
            }
            return hours;
        },
        daysText() {
            let days='';
            let cronEvery=this.day.cronEvery;
            switch (cronEvery.toString()){
                case '1':
                    break;
                case '2':
                    break;
                case '4':
                    break
                case '11':
                    days = '?';
                    break;
                case '3':
                    days = this.day.incrementStart+'/'+this.day.incrementIncrement;
                    break;
                case '5':
                    this.day.specificSpecific.map(val=> {
                        days += val+','
                    });
                    days = days.slice(0, -1);
                    break;
                case '6':
                    days = "L";
                    break;
                case '7':
                    days = "LW";
                    break;
                case '8':
                    days = this.day.cronLastSpecificDomDay + 'L';
                    break;
                case '9':
                    days = 'L-' + this.day.cronDaysBeforeEomMinus;
                    break;
                case '10':
                    days = this.day.cronDaysNearestWeekday+"W";
                    break
            }
            return days;
        },
        weeksText() {
            let weeks = '';
            let cronEvery=this.day.cronEvery;
            switch (cronEvery.toString()){
                case '1':
                case '3':
                case '5':
                    weeks = '?';
                    break;
                case '2':
                    weeks = this.week.incrementStart+'/'+this.week.incrementIncrement;
                    break;
                case '4':
                    this.week.specificSpecific.map(val=> {
                        weeks += val.slice(0,3).toUpperCase()+','
                    });
                    weeks = weeks.slice(0, -1);
                    break;
                case '6':
                case '7':
                case '8':
                case '9':
                case '10':
                    weeks = "?";
                    break;
                case '11':
                    weeks = this.week.cronNthDayDay+"#"+this.week.cronNthDayNth;
                    break;
            }
            return weeks;
        },
        monthsText() {
            let months = '';
            let cronEvery=this.month.cronEvery;
            switch (cronEvery.toString()){
                case '1':
                    months = '*';
                    break;
                case '2':
                    months = this.month.incrementStart+'/'+this.month.incrementIncrement;
                    break;
                case '3':
                    this.month.specificSpecific.map(val=> {
                        months += val+','
                    });
                    months = months.slice(0, -1);
                    break;
                case '4':
                    months = this.month.rangeStart+'-'+this.month.rangeEnd;
                    break;
            }
            return months;
        },
        yearsText() {
            let years = '';
            let cronEvery=this.year.cronEvery;
            switch (cronEvery.toString()){
                case '1':
                    years = '*';
                    break;
                case '2':
                    years = this.year.incrementStart+'/'+this.year.incrementIncrement;
                    break;
                case '3':
                    this.year.specificSpecific.map(val=> {
                        years += val+','
                    });
                    years = years.slice(0, -1);
                    break;
                case '4':
                    years = this.year.rangeStart+'-'+this.year.rangeEnd;
                    break;
            }
            return years;
        },
        cron(){
            return `${this.secondsText||'*'} ${this.minutesText||'*'} ${this.hoursText||'*'} ${this.daysText||'*'} ${this.monthsText||'*'} ${this.weeksText||'?'} ${this.yearsText||'*'}`
        },
    },
    methods: {
        ...mapMutations("compose", {
            updateCronSchedule: "updateCronSchedule",
        }),
        ...mapMutations("common", {
            changeEditMode: "changeEditMode"
        }),
        getValue(){
            return this.cron;
        },
        change(){
            // this.$emit('change',this.cron);
            this.changeEditMode()
            this.updateCronSchedule(this.cron)
        },
        rest(data){
            for(let i in data){
                if(data[i] instanceof Object){
                    this.rest(data[i])
                }else{
                    switch(typeof data[i]){
                        case 'object':data[i]=[];break;
                        case 'string':data[i]='';break;
                    }
                }
            }
        }
    },
    props: {
        editMode: Boolean
    },
    updated() {
        
    }
}</script>