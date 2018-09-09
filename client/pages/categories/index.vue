<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="display-1">
          Add new category
        </h1>
      </v-flex>
      <v-flex xs12>
        <v-form @submit.prevent="newCategory">
          <v-text-field label="Category title" v-model="category.title" />
          <v-text-field label="Category slug" v-model="category.slug" />
          <v-btn type="submit">Create the category</v-btn>
        </v-form>
      </v-flex>
      <v-flex xs12>
        <h1 class="display-1">
          All categories
        </h1>
      </v-flex>
      <v-flex xs12>
        <v-list three-line subheader>
          <v-list-tile
            v-for="category in categories"
            :key="category.id"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ category.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      valid: true,
      category: {
        title: '',
        slug: ''
      }
    }
  },
  mounted() {
    this.findCategories({query: {}})
    .then(res => {
      const categories = res.data || res
    })
  },
  methods: {
    ...mapActions('categories', { findCategories: 'find' }),
    ...mapActions(['setSnackbarNote']),
    async newCategory() {
      const { Category } = this.$FeathersVuex;
      const newCategory = new Category(this.category)
      const createdCategory = await newCategory.save({})
      if (createdCategory) {
        this.setSnackbarNote({
          text: 'New category ' + this.category.title + 'created',
          color: 'cyan darken-2',
          timeout: 6000
        })
      }
    }
  },
  computed: {
    ...mapState('auth', { user: 'payload' }),
    ...mapState('categories', { categoryPending: 'isCreatePending' }),
    ...mapGetters('categories', { findCategoriesInStore: 'find' }),
    categories () {
      return this.findCategoriesInStore({query: {}}).data
    }
  }
}
</script>

