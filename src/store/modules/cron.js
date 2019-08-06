const state = {
    tabName: ["Seconds", "Minutes", "Hours", "Day", "Month", "Year"],
    weekDays:[
        {name: 'Sunday', value: 1},
        {name: 'Monday', value: 2},
        {name: 'Tuesday', value: 3},
        {name: 'Wednesday', value: 4},
        {name: 'Thursday', value: 5},
        {name: 'Friday', value: 6},
        {name: 'Saturday', value: 7}],
    second:{
        name: "second",
        cronEvery:'',
        incrementStart:'3',
        incrementEnd: "",
        incrementIncrement:'5',
        rangeStart:'',
        rangeEnd:'',
        specificSpecific:[],
        input: {
            min: 0,
            max: 60,
        }
    },
    minute:{
        name: "minute",
        cronEvery:'',
        incrementStart:'3',
        incrementIncrement:'5',
        rangeStart:'',
        rangeEnd:'',
        specificSpecific:[],
        input: {
            min: 0,
            max: 60,
        }
    },
    hour:{
        name: "hour",
        cronEvery:'',
        incrementStart:'3',
        incrementIncrement:'5',
        rangeStart:'',
        rangeEnd:'',
        specificSpecific:[],
        input: {
            min: 0,
            max: 24
        }
    },
    day:{
        name: "day",
        cronEvery:'',
        incrementStart:'1',
        incrementIncrement:'1',
        rangeStart:'',
        rangeEnd:'',
        specificSpecific:[],
        cronLastSpecificDomDay:1,
        cronDaysBeforeEomMinus:'',
        cronDaysNearestWeekday:'',
    },
    week:{
        name: "week",
        cronEvery:'',
        incrementStart:'1',
        incrementIncrement:'1',
        specificSpecific:[],
        cronNthDayDay:1,
        cronNthDayNth:'1',
    },
    month:{
        name: "month",
        cronEvery:'',
        incrementStart:'3',
        incrementIncrement:'5',
        rangeStart:'',
        rangeEnd:'',
        specificSpecific:[],
        input: {
            min: 0,
            max: 12
        }
    },
    year:{
        name: "year",
        cronEvery:'',
        incrementStart:'2019',
        incrementIncrement:'1',
        rangeStart:'',
        rangeEnd:'',
        specificSpecific:[],
        input: {
            min: 0,
            max: 2119,
        }
    }
}

const actions = {
    generateList(num, type) {
        let result = []
        if(type === 'year') {
            for (let i = 2019; i < num; i++) {
                result.push(i)
            }
        } else {
            for (let i = 0; i < num; i++) {
                result.push(i)
            }
        }
        return result
    },
    
    decrement(model) {
        return model -= 1
    }
}

const mutations = {
    increment(state,type, model) {
        console.log("model", model)
        state[type][model] += 1
    },
}

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
  }