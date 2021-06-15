<template>
  <article
      class="about-me__article"
  >
    <h2 id="header__article">Alexandr Vasilchenko</h2>
    <div id="img-wrapper__article">
      <img
          class="photo__article"
          src="../../public/about_photo.png"
      >
    </div>
    <span id="text__article">
      I am young and open to new fullstask web-developer. My specialization is business logic for
      frontend development in Vue ecosystem and "Vanilla" JavaScript. I think the main skill of any developer
      is learning to new, learning anytime and in any situation.
    </span>
  </article>
</template>

<script>
export default {
  name: "AboutMe"
}
</script>

<style scoped lang="scss">
.about-me__article{
  display: grid;
  grid-template-areas:
    "photo header"
    "photo text";
  grid-template-rows:  4em 1fr;
  grid-template-columns: 1fr 4fr;
  grid-gap: 16px;
  width: 100%;
  padding: 4px;
}
#header__article{
  grid-area: header;
  text-align: start;
}
#img-wrapper__article{
  grid-area: photo;
}
#text__article{
  grid-area: text;
  text-align: justify;
  padding: 0 16px 8px 0;
}
.photo__article{
  width: 100%;
  max-width: 100%;
  max-height: 100%;
}
@media all and (max-width: 700px) {
  .about-me__article {
    grid-template-areas:
    "photo"
    "header"
    "text";
    grid-template-rows:  6em  4em 1fr;
    grid-template-columns: 1fr;
  }
  .photo__article{
    height: 100%;
    width: auto;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>