<template>
  <div Auth>
    <v-layout justify-start row>
      <img :src="logo" alt="logo" class="Logo">
    </v-layout>
    <div class="Login Auth__Container">
      <div class="Login__Container">
        <v-layout justify-center>
          <h1 class="Auth__Header">Sign In</h1>
        </v-layout>
        <v-layout justify-center>
          <p class="Auth__SubHeader">
            New to ZyZx? 
            <router-link class="Auth__SubHeader-Link" :to="{ name: 'Register' }">Sign Up Free</router-link>
          </p>
        </v-layout>
        <v-layout justify-center align-center row>
          <v-form
            v-model="isFormValid"
            @submit="onSubmit"
            autocomplete="off"
            class="Login__Form"
          >
            <v-flex>
              <v-text-field
                :value="email.toLowerCase()"
                ref="email"
                autofocus
                id="login-input-email"
                class="Login__LoginUser"
                @input="str => (email = str.trim())"
                @change="str => (email = str.trim())"
                label="Email Address"
                type="email"
                autocomplete="new-email"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="password"
                label="Password"
                id="login-input-password"
                type="password"
                autocomplete="new-password"
                ref="password"
              ></v-text-field>
            </v-flex>
            <v-layout>
              <v-checkbox
                v-model="isRememberEmail"
                label="Stay signed in"
              ></v-checkbox>
              <p>
                <router-link 
                class="Login__ForgotPassword" 
                :to="{ name: 'forgotPassword'}">
                Forgot Password?
              </router-link>
              </p>
            </v-layout>
            <v-flex>
              <v-btn
                :disabled="!(email && password)"
                :loading="isLoading"
                color="primary"
                block
                type="submit"
                >Sign In</v-btn
              >
            </v-flex>
            
          </v-form>
        </v-layout>
        <v-layout justify-center align-center row>
          <p class="Auth__Acknowledgement">* By signing in, I agree to the 
            <a 
              class="Auth__Acknowledgement-Link" 
              href="https://www.zyzx.io" 
              target="_blank">Privacy Policy</a> 
            and 
            <a 
              class="Auth__Acknowledgement-Link" 
              href="https://www.zyzx.io" 
              target="_blank">Terms of Service</a>
          </p>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      logo: require('@/assets/images/ZyZx-Logo-C7.png'),
      isFormValid: false,
      email: '',
      password: '',
      isRememberEmail: true,
      isConfirmationDialog: false,
      isLoading: false
    }
  },
  mounted() {
    this.setAuthenticationRequired(false)
  },
  methods: {
    ...mapMutations('common', {
      setAuthenticationRequired: 'setAuthenticationRequired'
    }),
    async onSubmit(event) {
      event.preventDefault()
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
      this.setAuthenticationRequired(true)
      router.push({ name: 'Dashboard' })
      // await this.registerUser({
      //   password: this.password,
      //   email: this.email,
      //   token: this.token
      // })
      // this.getSession()
    }
  }
}
</script>