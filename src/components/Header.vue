<template>
  <div class="header" id="top">
    <b-navbar>
          <v-tabs>
            <h2>shuhei's portfolio</h2>
          </v-tabs>

          <v-tabs right>
                
            <v-tab>
              <v-icon>mdi-home</v-icon>
              トップ
            </v-tab>

            <v-tab>
              <v-icon>mdi-card-account-details-outline</v-icon>
              このサイトについて
            </v-tab>

            <v-tab>
              <v-icon>mdi-folder-search-outline</v-icon>
              ポートフォリオ
            </v-tab>

            <v-tab>
              <v-icon>mdi-account</v-icon>
              連絡先
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