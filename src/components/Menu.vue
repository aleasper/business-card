<template>
  <nav class="navigation collapsed">
    <input id="menu-toggle" type="checkbox" />
    <label class="menu-btn" for="menu-toggle">
      <span></span>
    </label>
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
  flex-direction: row;
  justify-content: start;
  align-items: center;

  background: #000000;
  color: #FFFFFF;
}
.menu-link {
  text-decoration: none;
  margin: 0.2em 1em;
  color: #FFFFFF;
  font-size: 0.9em;
}
.mav-links {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
}
/* скрываем чекбокс */
#menu-toggle {
  opacity: 0;
}
@media all and (max-width: 700px) {
  .navigation{
    flex-direction: column;
    justify-content: start;
  }
  .mav-links {
    margin: 24px 0 0 0;
    display: flex;
    flex-direction: column;
  }
  .menu-link {
    margin: 0.4em 0.1em;
  }
  .collapsed {
    width: 40px;
  }
  .collapsed > .mav-links{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    display: none;
  }
  .collapsed > .menu-link{
    display: none;
  }
  /* стилизуем кнопку */
  .menu-btn {
    display: flex; /* используем flex для центрирования содержимого */
    align-items: center;  /* центрируем содержимое кнопки */
    position: fixed;
    top: 20px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 1;
  }
  /* добавляем "гамбургер" */
  .menu-btn > span,
  .menu-btn > span::before,
  .menu-btn > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #616161;
  }
  .menu-btn > span::before {
    content: '';
    top: -8px;
  }
  .menu-btn > span::after {
    content: '';
    top: 8px;
  }

  #menu-toggle:checked ~ .menu-btn > span {
    transform: rotate(45deg);
  }
  #menu-toggle:checked ~ .menu-btn > span::before {
    top: 0;
    transform: rotate(0);
  }
  #menu-toggle:checked ~ .menu-btn > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  #menu-toggle:checked ~ .menu-box {
    visibility: visible;
    left: 0;
  }
  .menu-btn > span,
  .menu-btn > span::before,
  .menu-btn > span::after {
    transition-duration: .25s;
  }
  .menu-box {
    transition-duration: .25s;
  }
  .menu-item {
    transition-duration: .25s;
  }
}



</style>
