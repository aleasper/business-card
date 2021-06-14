<template>
  <nav class="navigation">
    <router-link to="/" class="menu-link">Main page</router-link>
    <router-link to="/portfolio" class="menu-link">Portfolio</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss">
.navigation{

  display: flex;
  flex-direction: row;
  justify-content: start;
}
.menu-link {
  text-decoration: none;
  margin: 0.2em 1em;
}
@media all and (max-width: 700px) {
  .navigation{
    flex-direction: column;
    justify-content: start;
  }
  .menu-link {
    margin: 0.6em 0.1em;
  }
}
</style>
