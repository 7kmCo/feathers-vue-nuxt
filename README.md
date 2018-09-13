# feathers-nuxt-starter


## About

This is a starter template for [Feathers](http://feathersjs.com/) in the server and [Nuxt.js](https://nuxtjs.org/) or [vuejs](https://vuejs.org/) in client.
For datastore, mySql have been used.

Both clients implementing [feathers-vuex](https://github.com/feathers-plus/feathers-vuex).

## Getting Started

First make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed also you have [mysql](https://www.mysql.com/) installed and its running. Personally I'm using [MAMP](https://www.mamp.info/) on mac.

1. Download or clone this repo.

2. Install your dependencies of both server and client directories

    ```
    cd path/to/feathers-nuxt-starter/server && npm install
    cd path/to/feathers-nuxt-starter/nuxt-client && npm install
    cd path/to/feathers-nuxt-starter/vue-client && npm install
    ```

3. Start server

    ```
    npm rund dev # With auto reload on file changes
    ```

4. Start client

    ```
    npm rund dev # For nuxt with Hot Module Replacement
    npm rund serve # For vue with Hot Module Replacement
    ```

You can find more details in each directory.


## Changelog

__0.1.0__

- Initial release


## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
