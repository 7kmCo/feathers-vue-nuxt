<template>
  <v-app>
    <navbar />
    <v-content>
      <router-view/>
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
import Navbar from '@/components/Navbar'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: { Navbar },
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
