<template>
  <div class="header" id="top">
    <b-navbar>
      <v-tabs><h2>shuhei's portfolio</h2></v-tabs>
      <v-tabs right>
        <v-tab @click="toPage('/')"><v-icon>mdi-home</v-icon>トップ</v-tab>
        <v-tab @click="toPage('/aboutSite')"><v-icon>mdi-card-account-details-outline</v-icon>このサイトについて</v-tab>
        <v-menu offset-y>
          <template v-slot:activator="{on}">
            <v-tab v-on="on"><v-icon>mdi-folder-search-outline</v-icon>ポートフォリオ</v-tab>
          </template>
          <v-list>
            <v-list-item v-for="item in items" :key="item" :to="item.link">
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
          <v-tab @click="toPage('/contact')"><v-icon>mdi-account</v-icon>連絡先</v-tab>
      </v-tabs>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    toPage(path) {
      this.$router.push(path);
    },
  },
  components: {
  },

  data() {
    return {
      items:[
        { title: '私について', link: { name: 'AboutMe' } },
        { title: '私の作品集', link: { name: 'Contents' } },
        { title: '私の年表', link: { name: 'Myself' } },
      ]
    }
  } 
};
</script>

<style scoped>
  h2 {
    font-family: 'Bradley Hand',sans-serif;
    color:black;
  }
  .header {
    background: white;
    opacity: 0.8;
    z-index: 1;
  }
</style>