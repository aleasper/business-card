<template>
  <div class="main-page">
    <Tagline
    ></Tagline>
  </div>
</template>

<script>
// @ is an alias to /src
import Tagline from '@/components/Tagline.vue'

export default {
  name: 'Home',
  components: {
    Tagline
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
