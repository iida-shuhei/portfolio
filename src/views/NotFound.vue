<template>
  <div>
    <v-card
    class="mx-auto err"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>404</v-list-item-title>
        <v-list-item-subtitle>ページが見つかりません</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    toPage(path) {
      this.$router.push(path);
    },
  },
}
</script>

<style scoped>
  .err {
    margin-top: 100px;
  }
</style>