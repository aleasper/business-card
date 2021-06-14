<template>
  <div
      class="tagline-wrapper"
  >
    <div
      class="tagline"
    >
      <p class="slogan-text">Fullstack web-developer</p>
      <p class="slogan-subtext">"Jack of all trades"</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tagline"
}
</script>

<style scoped lang="scss">
.tagline-wrapper{
  width: 100%;
}
.tagline{
  height: 100%;
}
//.tagline::after {
//  content: "";
//  left: 0;
//  right: 0;
//  top: calc(0px + 4em);
//  position: absolute;
//  z-index: -1;
//  opacity: .2;
//  background-image: url("../../public/fullstack_developer.jpg");
//  background-size: contain;
//  background-repeat: no-repeat;
//  height: inherit;
//  width: inherit;
//}
.slogan-text{
  font-weight: bold;
  font-size: 2em;
}
.slogan-subtext{
  font-size: 1.6em;
}
</style>