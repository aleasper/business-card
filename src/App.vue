<template>
  <div id="app">
    <Menu
        id="menu"
    />
    <router-view
        id="main"
    />
    <FooterInfo
        id="footer"
    ></FooterInfo>
  </div>
</template>
<script>
import Menu from '@/components/Menu.vue'
import FooterInfo from '@/components/FooterInfo.vue'
export default {
  name: 'App',
  components: {
    Menu,
    FooterInfo
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: grid;
  grid-template-areas:
    "navigation"
    "main"
    "footer";
  grid-template-rows: 4em 1fr 2em;
  grid-template-columns: 1fr;
  grid-gap: 8px;
  height: 100%;
  margin: 0;
}

@media all and (max-width: 700px) {
  #app {
    grid-template-areas: "navigation main"
                          "footer footer";
    grid-template-rows: 1fr 2em;
    grid-template-columns: clamp(40px, 6em, 10em) 1fr;
  }
}

#menu {
  grid-area: navigation
}
#main {
  grid-area: main;
}
#footer {
  grid-area: footer;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
