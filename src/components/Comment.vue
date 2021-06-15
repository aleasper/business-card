<template>
  <div class="comment-wrapper">
    <p class="username">{{username}}</p>
    <p class="text">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    username: String,
    text: String
  },
}
</script>

<style scoped>
.comment-wrapper{
  width: 100%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.5);
  background: #FFFFFF;
  border-radius: 4px;
  padding: 4px 8px;
}
.username{
  font-weight: bolder;
  text-align: left;
}
p{
  margin: 8px;
}
.text{
  text-align: justify;
}
</style>