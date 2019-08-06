<template>
    <v-form>
        <v-layout row wrap justify-space-around>
            <v-flex xs4>
                <v-text-field label="Enter a task name" v-model="jobModel.jobName" @change="$emit('change', '$event.target.value')"></v-text-field>
            </v-flex>
            <v-flex xs6>
                <v-select
                    :items="Object.keys(connectionList).length !== 0 ? connectionList : dummyList "
                    item-text="name"
                    label="Select a connection"
                    v-model="jobModel.jobConnection"
                    return-object></v-select>
            </v-flex>
            <v-flex xs11 v-if="formType === 'Snowflake'">
                <v-textarea
                    name="input-7-1"
                    label="Type SQL query here..."
                    v-model="jobModel.jobSql"
                    @change="$emit('change', '$event.target.value')"
                ></v-textarea>
            </v-flex>
            <v-flex xs11 v-if="formType === 'S3'">
                <v-flex xs3>
                    <v-select
                        :items="actionType" 
                        label="Select an action"
                        v-model="jobModel.actionSelected"></v-select>
                </v-flex>
                <v-flex xs12 v-if="jobModel.actionSelected !== 'Delete'">
                    <v-text-field 
                        label="Source" 
                        v-model="jobModel.jobSource"
                        @change="$emit('change', '$event.target.value')"></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field 
                        label="Target" 
                        v-model="jobModel.jobTarget"  
                        @change="$emit('change', '$event.target.value')"></v-text-field>
                </v-flex>
            </v-flex>
        </v-layout>
    </v-form>
</template>

<script>
export default {
    props: {
        formType: String,
        dialog: Boolean,
        jobModel: Object,
        connectionList: Array,
        dummyList: Array,
        actionType: Array
    }
}
</script>