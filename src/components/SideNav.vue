<template>
  <b-sidebar
    id="sidebar-backdrop"
    bg-variant="white"
    text-variant="light"
    backdrop
    shadow
  >
    <div class="px-4 mt-5 mb-5 display-1 font-weight-medium">Menu</div>

    <v-divider/>

      <v-list-item v-for="(item, index) in items" :key="index" @click="getUrl(item.title)">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

  </b-sidebar>
</template>

<script>
export default {
  components: {
  },

  data() {
    return {
      items: [
        { title: 'home', icon: 'mdi-home' },
        { title: 'twitter', icon: '' },
        { title: 'git', icon: 'mdi-home' },
      ]
    }
  },
  methods: {
    getUrl(title) {
      if(title === 'twitter') {
        location.href = "https://twitter.com/"
      } else if (title === 'git') {
        location.href = "https://github.com/"
      } else {
        location.href = `${title}`
      }
    }
  }
};
</script>