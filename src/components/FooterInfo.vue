<template>
 <footer>
   <a href="https://github.com/aleasper" target="_blank">Github</a>
   <a href="https://vk.com/alexandrvasilchenko" target="_blank">Vk</a>
   <a href="https://ru.linkedin.com/" target="_blank">LinkedIn</a>
 </footer>
</template>

<script>
export default {
  name: "FooterInfo"
}
</script>

<style scoped>
footer{
  width: calc(100% - 64px);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 32px;
}
a {
  color: #FFFFFF;
  text-decoration: none;
}
a:hover{
  color: #4c93f6;
  text-decoration: underline;
}
</style>