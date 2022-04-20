<template>
  <div>
    <div class="heroimage-container">
      <div class="heroimage-wrapper">
        <div class="heroimage-text__wrapper">
          <span class="heroimage-text__title">Spider-Man: No Way Home</span>
          <span class="heroimage-text__description">Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroImage',
  data() {
    return {}
  },
};
</script>

<style scoped>
.heroimage-container {
  background-image: url('../assets/hero-image-example.jpg');
  background-size: 100% cover;
  background-position: center;
  height: 600px;
  position: relative;
}
.heroimage-text__wrapper {}
.heroimage-text__title {}
.heroimage-text__description {}
</style>
