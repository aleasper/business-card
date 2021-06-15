<template>
  <div class="main-page">
    <Tagline
    ></Tagline>
    <AboutMe
    ></AboutMe>
    <Skills
    ></Skills>
    <Experience
    ></Experience>
  </div>
</template>

<script>
// @ is an alias to /src
import Tagline from '@/components/Tagline.vue'
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export default {
  name: 'Home',
  components: {
    Experience,
    Tagline,
    AboutMe,
    Skills
  }
}
</script>
<style scoped lang="scss">
.main-page{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 0 8px;
}
</style>
