<template>
  <nav class="navigation">
    <div class="mav-links">
      <router-link to="/" class="menu-link">Main page</router-link>
      <div class="page-links" v-if="currentRoute === '/'">
        <a href="#skills__article">Skills</a>
        <a href="#education__article">Education</a>
        <a href="#experience__article">Experience</a>
      </div>
      <router-link to="/portfolio" class="menu-link">Portfolio</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String,
  },
  data: ()=> {return {
    currentRoute : '/'
  }},
  methods: {

  },
  mounted() {

  },
  computed: {
  },
  watch:{
    $route (){
      this.currentRoute = this.$router.history.current['path'];
    }
  },
  updated() {
  }
}
</script>


<style scoped lang="scss">
.navigation{
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  background: #000000;
  color: #FFFFFF;
}
.menu-link {
  text-decoration: none;
  margin: .6em 0.2em;
  color: #FFFFFF;
  font-size: 0.9em;
}
.mav-links {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  width: 100%;
  margin: 24px 0 0 0;
}
/* скрываем чекбокс */
#menu-toggle {
  opacity: 0;
}

.page-links {
  font-size: 0.8em;
  overflow-wrap: break-word;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 8px;
}
.page-links > a {
  cursor: pointer;
  margin: 4px 0;

  color: #FFFFFF;
  text-decoration: none;
}

@media all and (max-width: 700px) {
  .navigation{
    flex-direction: row;
    justify-content: start;
    width: 100%;
  }
  .mav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 0.2em;
  }
  .menu-link {
    margin: 0.2em 0.6em;
  }
  .menu-btn {
    display: none;
  }
  .collapsed > .menu-link{
    display: block;
  }
  .collapsed > .mav-links{
    display: flex;
    align-items: center;
  }
  .page-links {
    flex-direction: row;
  }
  .page-links > a {
    margin: 0 4px;
  }
}



</style>
