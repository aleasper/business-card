<template>
  <article
      class="skills__article"
  >
    <h2 id="skills-header">Skills</h2>
    <h2 id="education-header">Education</h2>
    <span id="skills__article">
    <ul>
      <li>
        <p>JavaScript ES6</p>
      </li>
      <li>
        <p>HTML5</p>
      </li>
      <li>
        <p>CSS, SASS, SCSS</p>
      </li>
      <li>
        <p>Vue.js, VueX, Vue.js + Typescript</p>
      </li>
            <li>
        <p>Python3 + Flask</p>
      </li>
    </ul>
  </span>
    <span id="education__article">
    <ul>
      <li>
        <p>СПБГТИ(ТУ) 2022, Software Engineer</p>
      </li>
            <li>
        <a href="https://stepik.org/users/57353496/certificates" target="_blank">Stepik online courses</a>
      </li>

    </ul>
  </span>
  </article>
</template>

<script>
export default {
  name: "Skills"
}
</script>

<style scoped>
.skills__article{
  display: grid;
  grid-template-areas:
    "header-skills header-education"
    "skills education";
  grid-template-rows:  2em 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  width: 100%;
  padding: 4px;
}
#skills-header {
  grid-area: header-skills;
}
#education-header {
  grid-area: header-education;
}
#skills__article {
  grid-area: skills;
}
#education__article {
  grid-area: education;
}
ul {
  text-align: start;
}
@media all and (max-width: 700px) {
  .skills__article{
     grid-template-areas:
    "header-skills"
    "skills"
    "header-education"
    "education";
  grid-template-rows:  2em 1fr 2em 0.6fr;
  grid-template-columns: 1fr;
  }
}
</style>