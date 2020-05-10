<template>
  <div class="header" id="top">
    <b-navbar>
          <v-tabs>
            <h2>shuhei's portfolio</h2>
          </v-tabs>

          <v-tabs right>
                
            <v-tab>
              <router-link to="/">
                <v-icon>mdi-home</v-icon>
                トップ
              </router-link>
            </v-tab>

            <v-tab>
              <router-link to="#about-site">
                <v-icon>mdi-card-account-details-outline</v-icon>
                このサイトについて
              </router-link>
            </v-tab>

            <v-tab>
              <router-link to="#works">
                <v-icon>mdi-folder-search-outline</v-icon>
                ポートフォリオ
              </router-link>
            </v-tab>

            <v-tab>
              <router-link to="#contact">
                <v-icon>mdi-account</v-icon>
                連絡先
              </router-link>
            </v-tab>

          </v-tabs>

    </b-navbar>
  </div>
</template>

<script>
export default {
  components: {
  },

  data() {
    return {
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