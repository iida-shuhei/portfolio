<template>
  <v-app>
    <Header class="header"/>
    <ImageTop/>
    <AboutSite/>
    <AboutMe/>
    <Contents/>
    <Myself/>
    <Contact/>
    <Footer/>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import ImageTop from '@/components/ImageTop'
import Myself from '@/components/Myself'
import Contents from '@/components/Contents'
import AboutSite from '@/components/AboutSite'
import AboutMe from '@/components/AboutMe'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
export default {
  components: {
    Header,
    ImageTop,
    Myself,
    Contents,
    AboutSite,
    AboutMe,
    Footer,
    Contact
  },
}
</script>

<style scoped>
 .header {
    position: sticky;
    top: 0;
  }
</style>