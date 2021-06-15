<template>
  <nav class="navigation">
    <div class="mav-links">
      <router-link to="/" class="menu-link">Main page</router-link>
      <router-link to="/portfolio" class="menu-link">Portfolio</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  },
  mounted() {
    document.getElementById('menu-toggle').addEventListener('click', function () {
      let navs = document.getElementsByClassName('navigation');
      for (let nav of navs){
        nav.classList.toggle('collapsed');
      }
    });
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
  align-items: center;
  width: 100%;
  margin: 24px 0 0 0;
}
/* скрываем чекбокс */
#menu-toggle {
  opacity: 0;
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
}



</style>
