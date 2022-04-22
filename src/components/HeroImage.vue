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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 650px;
  position: relative;
}
.heroimage-text__wrapper {
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
}
.heroimage-text__title {
  font-size: 2.0rem;
  font-weight: 600;
  margin-bottom: 10px;
}
.heroimage-text__description {
  width: 80%;
  font-size: 1.2rem;
}
</style>
