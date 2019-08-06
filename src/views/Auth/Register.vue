<template>
  <div Auth>
    <v-layout justify-start row>
      <img :src="logo" alt="logo" class="Logo">
    </v-layout>
    <div class="Register Auth__Container">
      <div class="Register__Container">
        <v-layout justify-center>
          <h1 class="Auth__Header">Sign Up Free</h1>
        </v-layout>
        <v-layout justify-center>
          <p class="Auth__SubHeader">
            Already have an account? 
            <router-link class="Auth__SubHeader-Link" :to="{ name: 'Login'}">Sign In</router-link>
          </p>
        </v-layout>
        <v-layout justify-center align-center row>
          <v-form v-model="isFormValid" @submit="onSubmit">
            <v-flex>
              <v-text-field
                :value="email.toLowerCase()"
                ref="email"
                autofocus
                id="register-input-email"
                class="LoginUser"
                @input="str => (email = str.trim())"
                @change="str => (email = str.trim())"
                label="Your work email"
                type="email"
                autocomplete="new-email"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                :value="firstname.toLowerCase()"
                ref="firstname"
                autofocus
                id="register-input-firstname"
                @input="str => (firstname = str.trim())"
                @change="str => (firstname = str.trim())"
                label="First name"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                :value="lastname.toLowerCase()"
                ref="lastname"
                autofocus
                id="register-input-lastname"
                @input="str => (lastname = str.trim())"
                @change="str => (lastname = str.trim())"
                label="Last name"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                :value="accountname.toLowerCase()"
                ref="accountname"
                autofocus
                id="register-input-accountname"
                @input="str => (accountname = str.trim())"
                @change="str => (accountname = str.trim())"
                label="Company"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-btn
                :loading="isLoading"
                :disabled="!isFormValid"
                color="primary"
                block
                type="submit"
                @click="onSubmit"
                >Sign Up</v-btn
              >
            </v-flex>
          </v-form>
        </v-layout>
        <v-layout justify-center align-center row>
          <p class="Auth__Acknowledgement">* By signing up, I agree to the 
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
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'Register',
  data() {
    return {
      logo: require('@/assets/images/ZyZx-Logo-C7.png'),
      isFormValid: false,
      email: '',
      firstname: '',
      lastname: '',
      accountname: '',
      isAcceptTerms: true,
      token: '',
      isLoading: false
    }
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

      router.push({ name: 'resetPassword' })
      
      await this.registerUser({
        email: this.email,
        firstName: this.firstname,
        lastName: this.lastname,
        company: this.accountname,
        accountType: "BETA"
      })
      // this.getSession()
    },
    ...mapActions('auth', {
      registerUser: 'registerUser',
      // getSession: 'getSession'
    })
  },
  mounted() {
    this.setAuthenticationRequired(false)
    // const { email, token } = this.$route.params
    // if (!(email && token)) {
    //   return this.$router.push({ name: 'Login' })
    // }
    // this.email = email
    // this.token = token
  }
}
</script>

