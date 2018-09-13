<template>
  <div>
    <v-toolbar app fixed dark color="cyan">
      <v-toolbar-side-icon @click="navbarDrawer = !navbarDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-toolbar-items>
        <v-btn flat v-if="!user" to="/login">login</v-btn>
      </v-toolbar-items>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="navbarDrawer" absolute temporary>
      <v-list>
        <v-list-tile class="drawer-list-tile">
          <v-list-tile-content class="drawer-list-header">
            <v-list-tile-title>Drawer List</v-list-tile-title>
            <v-list-tile-sub-title>Drawer list sub header</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>        
        <v-divider />
        <v-list-group
          v-for="item in items"
          v-model="item.active"
          :key="item.title"
          :prepend-icon="item.icon"
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
            v-for="subItem in item.items"
            :key="subItem.title"
            :to="subItem.action"
          >
            <v-list-tile-content>
              <v-list-tile-title :to="subItem.action">{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>{{ subItem.icon }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
      <v-btn flat color="primary" @click="logout">LogOut</v-btn>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      navbarDrawer: false,
      items: [
        {
          icon: 'restaurant',
          title: 'Posts',
          active: true,
          items: [
            { title: 'Posts', action: 'posts' },
            { title: 'Categories', action: 'categories' }
          ]
        },
        {
          icon: 'school',
          title: 'Education',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          icon: 'directions_run',
          title: 'Family',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          icon: 'healing',
          title: 'Health',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          icon: 'content_cut',
          title: 'Office',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          icon: 'local_offer',
          title: 'Promotions',
          items: [
            { title: 'List Item' }
          ]
        }
      ]
    }
  },
  methods: {
    ...mapActions('auth', { authLogout: 'logout' }),
    logout() {
      this.authLogout().then(() => this.$router.push('/login'));
    }
  },
  computed: {
    ...mapState('auth', { user: 'payload' })
  }
}
</script>

<style lang="scss">

</style>
