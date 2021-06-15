<template>
  <div class="main-page">
    <Tagline
    ></Tagline>
    <AboutMe
    ></AboutMe>
    <Skills
    ></Skills>
  </div>
</template>

<script>
// @ is an alias to /src
import Tagline from '@/components/Tagline.vue'
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

export default {
  name: 'Home',
  components: {
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
}
</style>
