<template>
  <div Auth>
    <v-layout justify-start row>
      <img :src="logo" alt="logo" class="Logo">
    </v-layout>
    <div class="ResetPassword Auth__Container">
      <div class="ResetPassword__Container">
        <v-layout justify-center>
          <h1 class="Auth__Header">Reset your password</h1>
        </v-layout>
        <v-layout justify-center>
          <p class="Auth__SubHeader">
            Enter your new password
          </p>
        </v-layout>
        <v-layout justify-center align-center row>
          <v-form
            style="width: 100%"
            v-model="state.isFormValid"
            @submit="onSubmit"
          >
            <v-flex>
              <v-text-field
                v-model="values.code"
                label="Verification code"
                type="code"
                :disabled="state.isUserBlocked"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="values.password"
                label="New Password"
                :disabled="state.isUserBlocked"
                type="password"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="values.confirmPassword"
                label="Password Confirm"
                :disabled="state.isUserBlocked"
                type="password"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-btn
                v-if="state.isUserBlocked"
                color="primary"
                block
                @click="onCodeResendClick">Resend Code</v-btn>
              <v-btn
                block
                v-else
                :disabled="!state.isFormValid"
                :loading="state.isLoading"
                color="primary"
                type="submit"
                >Reset Password</v-btn>
              <p class="ResetPassword__ButtonLink">
                <router-link :to="{ name: 'forgotPassword' }">
                  Re-enter email
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
import router from '@/router'

export default {
  name: 'ResetPassword',
  data() {
    return {
      logo: require('@/assets/images/ZyZx-Logo-C7.png'),
      state: {
        isLoading: false,
        isUserBlocked: false,
        isFormValid: false
      },
      values: {
        password: '',
        confirmPassword: '',
        code: ''
      }
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      this.state.isLoading = true
      router.push({ name: 'Login' })
      // const data = {
      //   password: this.values.password,
      //   code: this.values.code,
      //   email: this.$route.params.email
      // }
      // const payload = await this.resetPassword(data)

      // if (payload.isUserBlocked) {
      //   this.state.isUserBlocked = true
      // }
      this.state.isLoading = false
    },
    onCodeResendClick() {
      this.state.isUserBlocked = false
      this.restoreForgotPassword({ email: this.$route.params.email })
    },
    ...mapActions('auth', {
      resetPassword: 'resetPassword',
      restoreForgotPassword: 'restoreForgotPassword'
    })
  }
}
</script>

