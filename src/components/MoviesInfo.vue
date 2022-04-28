<template>
  <div>
    <div class="moviesinfo__main-content">
      <div class="moviesinfo__left-content">
        <img class="moviesinfo__left-content__img" src="../assets/no-image-available.png" alt="">
      </div>
      <div class="moviesinfo__right-content">
        <div class="moviesinfo__right-content__title-wrapper">
          <span class="moviesinfo__right-content__movie-title">The Batman</span>
          <span class="moviesinfo__right-content__movie-sinopsis">SINOPSE</span>
          <span class="moviesinfo__right-content__movie-description">In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.</span>
        </div>
        <div>
          <div>
            <span>RATING</span>
            <div>7.8</div>
          </div>
          <div>
            <span>Director</span>
            <div>Matt Reeves</div>
        </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoviesInfo',
  data() {
    return {}
  },
};
</script>

<style scoped>
img {
  width: 500px;
}
</style>
