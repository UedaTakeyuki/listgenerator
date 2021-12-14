<template>
  <v-app>

    <Navbar titleStr="Link Generator" :links="links">
    </Navbar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import {Navbar} from 'vuetify-nav'

export default {
  components: {
    Navbar,
  },
  data: () => ({
    links: [
      { icon: 'home', text: 'Home', route: '/'},
      { icon: 'home', text: 'fromChannel', route: '/fromChannel'},
    ]
    //
  }),
};
</script>
