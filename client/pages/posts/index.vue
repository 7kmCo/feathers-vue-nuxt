<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="display-1">
          Add new post
        </h1>
      </v-flex>
      <v-flex xs12>
        <v-form @submit.prevent="newPost" v-model="valid">
          <v-text-field
            label="Post title"
            v-model="post.title"
            :rules="notEmptyRules"
            required
          />
          <v-text-field
            label="Post content"
            v-model="post.content"
            :rules="notEmptyRules"
            required
          />
            <v-select
              :items="categories"
              item-text="title"
              item-value="id"
              v-model="post.terms"
              label="categories"
              multiple
              chips
            ></v-select>
          <v-btn type="submit" :disabled="!valid">Create the post</v-btn>
        </v-form>
      </v-flex>
      <v-flex xs12>
        <h1 class="display-1">
          All posts
        </h1>
      </v-flex>
      <v-flex xs12>
        <v-list three-line subheader>
          <v-list-tile
            v-for="post in posts"
            :key="post.id"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ post.title }}</v-list-tile-title>
              <v-list-tile-title class="text--primary font-weight-bold">Category: 
                <v-chip small v-for="category in post.categories" :key="category.id">
                  {{ category.title }}
                </v-chip>
              </v-list-tile-title>
              <v-list-tile-sub-title>{{ post.content }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { notEmptyRules } from '~/plugins/validators'

export default {
  data() {
    return {
      valid: false,
      post: {
        title: '',
        content: '',
        terms: []
      },
      notEmptyRules,
    }
  },
  mounted() {
    this.findPosts({query: {}})
      .then(res => {
        const posts = res.data || res
      })
    this.findCategories({query: {}})
    .then(res => {
      const categories = res.data || res
    })
  },
  methods: {
    ...mapActions('posts', { findPosts: 'find' }),
    ...mapActions('categories', { findCategories: 'find' }),
    ...mapActions(['setSnackbarNote']),
    async newPost() {
      if (this.valid) {
        const { Post } = this.$FeathersVuex
        const newPost = new Post(this.post)
        const createdPost = await newPost.save({})
        if (createdPost) {
          this.setSnackbarNote({
            text: 'New post with title of "' + this.post.title + '" created',
            color: 'cyan darken-2',
            timeout: 6000
          })
        }
      }
    }
  },
  computed: {
    ...mapState('auth', { user: 'payload' }),
    ...mapGetters('posts', { findPostsInStore: 'find' }),
    ...mapGetters('categories', { findCategoriesInStore: 'find' }),
    posts () {
      return this.findPostsInStore({query: {}}).data
    },
    categories () {
      return this.findCategoriesInStore({query: {}}).data
    }
  }
}
</script>

