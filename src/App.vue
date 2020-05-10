<template>
  <v-app>
    <Header class="header"/>
    <!-- <Contact/> -->
    <Footer/>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style scoped>
 .header {
    position: sticky;
    top: 0;
  }
</style>