<template>
  <div class="Configure">
    <NavigationAppSubHeader />
    <!-- Sub Menu -->
    <v-layout row justify-start class="Configure__Menu">
      <v-btn flat color="primary" @click="handleCreate()" style="text-transform:capitalize;"> 
        <v-icon>mdi-plus</v-icon>Create
      </v-btn>

      <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
          @keydown.esc="toggleDialogState()">
        <div v-if="$route.params.appName === 'snowflake'">
          <FormsSnowflake :type="formAction" :templateGroupId="templateGroupId" />
        </div>
        <div v-else-if="$route.params.appName === 's3'">
          <FormsAmazonS3 :type="formAction" :templateGroupId="templateGroupId" />
        </div>
      </v-dialog>
      <div>{{ this.message }}</div>
    </v-layout>
    <!-- /Sub Menu -->

    <!-- Connection Table -->
    <TablesDataTable :connectionList="connectionList" :templateGroupId="templateGroupId"/>
    <!-- /Connection Table -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Breadcrumbs from '@/mixins/breadcrumbs'

export default {
  mixins: [Breadcrumbs],
  computed: {
    ...mapState('common', {
      dialog: 'dialog'
    }),
    ...mapState('config', {
      connectionList: 'connectionList',
      providerTemplateList: 'providerTemplateList',
      templateGroupId:'templateGroupId',
      formAction: 'formAction',
      message: "message",
    }),
    ...mapState('marketplace', {
      providerList: 'providerList' 
    })
  },
  watch: {
    message: function() {
      this.getConnectionList({ templateGroupId : this.templateGroupId })
      this.setMessage("")
    }
  },
  methods: {
    ...mapMutations('common', {
      toggleDialogState: 'toggleDialogState'
    }),
    ...mapMutations('config', {
      setFormAction: 'setFormAction',
      setTemplateGroupId: 'setTemplateGroupId',
      setMessage: "setMessage",
      clearS3FormInput:"clearS3FormInput",
      clearSnowflakeFormInput: "clearSnowflakeFormInput"
    }),
    ...mapActions('marketplace', {
      getProviderTemplates: 'getProviderTemplates',
    }),
    ...mapActions('config', {
      getConnectionList: 'getConnectionList'
    }),
    handleCreate() {
      this.toggleDialogState()
      this.setFormAction('Create')
      this.clearS3FormInput('')
      this.clearSnowflakeFormInput('')
    }
  },
  created() {
    /** The variable is used to store the provider's template group ID. 
     * Template group ID is needed when creating a new connection.
     */
    const templateGroupId = (this.providerList.length > 0) ? this.providerList.filter(
      d => d.name === this.$route.params.appName
    )[0].id : undefined
    this.setTemplateGroupId(templateGroupId)

     /** If templateGroupId exists, trigger action:
      * this.getConnectionList to GET the connection list for selected provider
      * this.getProviderTemplates to GET the template mapping for selected provider (Connection 
      * form is hard-coded for MVP1, response for this api call is not used)
      */
    if (templateGroupId) { 
     
      // routes/config, /s/:templateGroupId, getConfigs
      this.getConnectionList({ templateGroupId: templateGroupId }) 
      // routes/providers, /config_templates/:templateGroupId
      // this.getProviderTemplates({ templateGroupId: templateGroupId })
    }
    
    /** Display current and parent sections in breadcrumbs */
    this.setBreadcrumbs([
      { text: 'Marketplace', disabled: false },
      { text: this.$route.params.appName, disabled: true }
    ])

    this.setMessage("")

    console.log("this.connectionList",this.connectionList)
  }
}
</script>
