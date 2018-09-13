<template>
  <v-app>
    <navbar />
    <v-content>
      <v-container fluid>
        <nuxt/>
      </v-container>
    </v-content>
    <v-snackbar v-if="snackbarModel"
      v-model="snackbarModel"
      :timeout="getSnackbarNote.timeout"
      :color="getSnackbarNote.color"
      bottom
      multi-line
    >
      {{ getSnackbarNote.text }}
      <v-btn
      dark flat fab small @click.native="snackbarModel = false">
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-footer app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import {mapGetters} from 'vuex'

export default {
  components: { Navbar },
  async created () {
    await this.$store.dispatch('auth/authenticate')
  },
  computed: {
    ...mapGetters([
      'getSnackbarNote'
    ]),
    snackbarModel: {
      get () {
        return !!this.getSnackbarNote.text || false
      },
      set () {
        this.$store.commit('setSnackbarNote', {text: null, color: null, timeout: 0})
      }
    }
  }
}
</script>
