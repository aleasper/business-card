<template>
  <article
      id="experience__article"
  >
    <h2
        id="experience__article__header"
    >Work experience</h2>
    <span
        id="prof-job"
    >
      <h3>Professional Job</h3>
      <ul>
        <li>
          <b>Траектория (08.2020 - now)</b>
          <p>Fullstack web-developer</p>
        </li>
      </ul>
    </span>
    <span
        id="freelance-job"
    >
      <h3>Part-time Job</h3>
      <ul>
        <li>
          <b>Freelance exchange (02.2018 - 04.2018)</b>
          <p>Copywriter/Rewriter in Russian</p>
        </li>
        <li>
          <b>Freelance exchange of student works (09.2019 - now)</b>
          <p>The author of student works in IT-sphere</p>
        </li>
      </ul>
    </span>
  </article>
</template>

<script>
export default {
  name: "Experience"
}
</script>

<style scoped lang="scss">
#experience__article{
  display: grid;
  grid-template-areas:
    "header header"
    "prof-job freelance-job";
  grid-template-rows:  2em 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  width: 100%;
}
#experience__article__header {
  grid-area: header;
}
#prof-job {
  grid-area: prof-job;
}
#freelance-job {
  grid-area: freelance-job;
}
@media all and (max-width: 700px) {
  #experience__article{
    grid-template-areas:
    "header"
    "prof-job"
    "freelance-job";
    grid-template-rows:  3em 1fr 1fr;
    grid-template-columns: 1fr;
  }
}
li {
  text-align: left;
}
</style>