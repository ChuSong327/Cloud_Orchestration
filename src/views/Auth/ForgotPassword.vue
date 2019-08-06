<template>
  <div Auth>
    <v-layout justify-start row>
      <img :src="logo" alt="logo" class="Logo">
    </v-layout>
    <div class="ForgotPassword Auth__Container">
      <div class="ForgotPassword__Container">
        <v-layout justify-center>
          <h1 class="Auth__Header">Forgot your password?</h1>
        </v-layout>
        <v-layout justify-center>
          <p class="ForgotPassword__SubHeader">ZyZx will send you a verification code to your email</p>
        </v-layout>
        <v-layout justify-center align-center row>
          <v-form v-model="isFormValid" @submit="onSubmit">
            <v-flex>
              <v-text-field v-model="email" label="Email Address"></v-text-field>
            </v-flex>
            <v-flex>
              <v-btn
                :disabled="!isFormValid"
                color="primary"
                block
                type="submit"
                :loading="isLoading"
                :to="{ name: 'resetPassword' }"
                >Send</v-btn
              >
            </v-flex>
            <v-flex>
              <p class="ForgotPassword__ButtonLink">
                <router-link
                  :to="{ name: 'Login' }"
                  >Return to login
                </router-link>
              </p>
            </v-flex>
          </v-form>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ForgotPassword',
  data() {
    return {
      logo: require('@/assets/images/ZyZx-Logo-C7.png'),
      isFormValid: false,
      isLoading: false,
      email: ''
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      this.isLoading = true

      // await this.restoreForgotPassword({ email: this.email })

      this.isLoading = false
    },
    ...mapActions('auth', {
      restoreForgotPassword: 'restoreForgotPassword'
    })
  }
}
</script>
