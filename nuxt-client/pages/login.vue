<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="title">Login</h1>
        <form @submit.prevent="login({ valid, user })">
          <v-text-field label="Email address" type="text" v-model="user.email" />
          <v-text-field label="Password" type="password" v-model="user.password" />
          <v-btn type="submit" color="primary">Login</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
        
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      valid: true,
      user: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions('localAuth', ['login']),
  },
}
</script>
