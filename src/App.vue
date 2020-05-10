<template>
  <v-app>
    <Header class="header"/>
    <ImageTop/>
    <AboutSite ref="about-site"/>
    <AboutMe/>
    <Contents ref="works"/>
    <Myself/>
    <Contact ref="contact"/>
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
  mounted() {
    this.scrollPage();
  },
  watch: {
    '$route' () {
      this.scrollPage();
    }
  },
  methods:{
    scrollPage(){
      const hash = this.$route.hash;
      if (hash) {
        this.$vuetify.goTo(this.$refs[hash.replace('#',"")]);
      } else if (hash === "") {
        this.$vuetify.goTo(0);
      }
    }
  }
}
</script>

<style scoped>
 .header {
    position: sticky;
    top: 0;
  }
</style>