<template>
    <v-card>
        <v-card-title class="primary">
            <h3 class="px-3 white--text">{{ type }} a Snowflake Connection</h3>
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-container>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                v-model="snowflakeFormInfo.formInput.name"
                                label="Connection Name*"
                                required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                v-model="snowflakeFormInfo.formInput.host"
                                label="Host*"
                                required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                v-model="snowflakeFormInfo.formInput.userName"
                                label="User Name*"
                                required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                v-model="snowflakeFormInfo.formInput.pwd"
                                label="PWD*"
                                required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                v-model="snowflakeFormInfo.formInput.database"
                                label="Database*"
                                required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                v-model="snowflakeFormInfo.formInput.warehouse"
                                label="Warehouse*"
                                required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm12 md12>
                            <v-text-field
                                v-model="snowflakeFormInfo.formInput.comment"
                                label="Comment"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn 
                            flat 
                            class="textCapitalize" 
                            @click="toggleDialogState">Cancel</v-btn>
                        <v-btn 
                            flat
                            class="textCapitalize primary"
                            @click="
                                toggleDialogState()
                                handleButtonClick()">Submit</v-btn>
                    </v-card-actions>
                </v-container>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex"

export default {
    computed: {
        ...mapState("config", {
            selectedConnectionId: "selectedConnectionId",
            snowflakeFormInfo: "snowflakeFormInfo"
        })
    },
    methods: {
        ...mapMutations("common", {
            toggleDialogState: "toggleDialogState"
        }),
        ...mapActions("config", {
            createConnection: "createConnection",
            editConnection: "editConnection"
        }),
        handleButtonClick() {
            if (this.type === "Create") {
                this.createConnection({
                    formInput: this.snowflakeFormInfo.formInput, 
                    templateGroupId: this.templateGroupId
                })
            } else if (this.type === "Edit") {
                this.editConnection({
                    formInput: this.snowflakeFormInfo.formInput, 
                    templateGroupId: this.templateGroupId, 
                    configId: this.selectedConnectionId 
                })
            }
        }
    },
    props: {
        dialog: Boolean,
        type: String,
        templateGroupId: String
    }
}
</script>