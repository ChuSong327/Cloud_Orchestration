<template>
<v-card class="Compose__Cron Compose__Card">
    <v-card-text>
        <v-layout row align-center justify-start>
            <v-flex xs4>
                <v-card-title>Cron Schedule</v-card-title>
            </v-flex>
            <v-flex xs8 v-if='!editMode'>
                <v-card-text>{{ cronSchedule || 'Create a new cron schedule'}}</v-card-text>
            </v-flex>
            <v-flex xs8 v-else>
                <v-form>
                    <v-text-field 
                        v-model='cronSchedule'
                        @focus="toggleDialogState"></v-text-field>
                </v-form>
            </v-flex>
            <v-flex>
                <v-btn
                    v-if='!editMode' 
                    flat 
                    fab 
                    small 
                    color='grey'
                    @click='handleEditClick()'>
                    <v-icon>mdi-lead-pencil</v-icon>
                </v-btn>
                <v-btn
                    v-if='editMode'
                    flat
                    fab
                    small
                    color='green'
                    @click='handleSaveClick()'>
                <v-icon>mdi-check</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-card-text>
</v-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState('compose', {
            cronSchedule: 'cronSchedule'
        }),
        ...mapState("common", {
            dialog: "dialog",
            editMode: "editMode"
        })
    },
    watch: {
        cronSchedule() {
            console.log("heres")
        }
    },
    methods: {
        ...mapMutations('common', {
            toggleDialogState: 'toggleDialogState',
            changeEditMode: "changeEditMode"
        }),
        ...mapMutations('compose', {
            updateCronSchedule: 'updateCronSchedule'
        }),
        handleEditClick() {
            this.changeEditMode()
            // this.editMode = true
        },
        handleSaveClick() {
            this.changeEditMode()
            // this.editMode = false
        }
    },
    created() {
        // console.log("setCronSchedule", this.setCronSchedule)
    }
}
</script>