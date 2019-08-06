<template>
  <v-card>
    <v-card-title class="primary">
      <h3 class="px-3 white--text"> {{ type }} a S3 Connection</h3>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm6 md6>
              <v-text-field
                v-model="s3FormInfo.formInput.name"
                label="Connection Name*"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field
                v-model="s3FormInfo.formInput.url"
                label="URL*"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field
                v-model="s3FormInfo.formInput.awsKeyID"
                label="AWS Key ID*"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field
                v-model="s3FormInfo.formInput.awsSecretKey"
                label="AWS Secret Key*"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field
                v-model="s3FormInfo.formInput.decryptionKey"
                label="Decryption Key*"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm12 md12>
              <v-text-field
                v-model="s3FormInfo.formInput.comment"
                label="Comment"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat class="textCapitalize" @click="toggleDialogState"
              >Cancel</v-btn
            >
            <v-btn
              flat
              class="textCapitalize primary"
              @click="
                toggleDialogState()
                handleButtonClick()
              "
              >Submit</v-btn
            >
            <!-- <v-spacer></v-spacer> -->
          </v-card-actions>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('config', {
      selectedConnectionId: 'selectedConnectionId',
      s3FormInfo: 's3FormInfo'
    })
  },
  methods: {
    ...mapMutations('common', {
      toggleDialogState: 'toggleDialogState'
    }),
    ...mapActions('config', {
      createConnection: 'createConnection',
      editConnection: 'editConnection'
    }),
    handleButtonClick() {
      if (this.type === 'Create') {
        this.createConnection({
          formInput: this.s3FormInfo.formInput,
          templateGroupId: this.templateGroupId
        })
      } else if (this.type === 'Edit') {
        this.editConnection({
          formInput: this.s3FormInfo.formInput,
          configId: this.s3FormInfo.id,
          templateGroupId: this.templateGroupId
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
