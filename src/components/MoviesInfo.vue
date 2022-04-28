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
        <div class="moviesinfo__right-content__more-info__wrapper">
          <div class="moviesinfo__right-content__more-info__rating-wrapper">
            <span class="moviesinfo__right-content__more-info__rating-title">RATING</span>
            <div class="moviesinfo__right-content__more-info__rating">7.8</div>
          </div>
          <div class="moviesinfo__right-content__more-info__director-wrapper">
            <span class="moviesinfo__right-content__more-info__director-title">Director</span>
            <div class="moviesinfo__right-content__more-info__director">Matt Reeves</div>
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
.moviesinfo__main-content {
  display: flex;
  padding: 0 10px;
  background-color: rgb(0, 204, 255);
}
img {
  width: 500px;
}
</style>
