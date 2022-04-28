<template>
  <div>
    <div class="moviesinfo__main-content">
      <div class="moviesinfo__left-content">
        <img class="moviesinfo__left-content__img" src="../assets/no-image-available.png" alt="">
      </div>
      <div class="moviesinfo__right-content">
        <div class="moviesinfo__right-content__title-wrapper">
          <span class="moviesinfo__right-content__movie-title">The Batman</span>
          <span class="moviesinfo__right-content__movie-synopsis">SYNOPSIS</span>
          <span class="moviesinfo__right-content__movie-description">In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.</span>
        </div>
        <div class="moviesinfo__right-content__more-info__wrapper">
          <div class="moviesinfo__right-content__more-info__rating-wrapper">
            <span class="moviesinfo__right-content__more-info__rating-title">RATING</span>
            <div class="moviesinfo__right-content__more-info__rating">7.8</div>
          </div>
          <div class="moviesinfo__right-content__more-info__director-wrapper">
            <span class="moviesinfo__right-content__more-info__director-title">DIRECTOR</span>
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
  padding: 30px;
  background-color: rgb(0, 171, 214);
}
.moviesinfo__left-content {}
.moviesinfo__left-content__img {}
.moviesinfo__right-content {
  display: flex;
  flex-direction: column;
  background-color: rgb(1, 204, 255);
  padding: 30px;
}
.moviesinfo__right-content__title-wrapper {
  display: flex;
  flex-direction: column;
}
.moviesinfo__right-content__movie-title {
  font-size: 34px;
  font-weight: bold;
  color: #fff;
}
.moviesinfo__right-content__movie-synopsis {
  font-size: 18px;
  font-weight: bold;
  padding: 15px 0px;
  color: #fff;
}
.moviesinfo__right-content__movie-description {
  font-size: 16px;
  font-weight: 500;
  padding: 10px 0px;
  color: #fff;
}
.moviesinfo__right-content__more-info__wrapper {
  display: flex;
  padding: 30px 0px;
}
.moviesinfo__right-content__more-info__rating-wrapper {
  margin-right: 30px;
}
.moviesinfo__right-content__more-info__rating-title {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}
.moviesinfo__right-content__more-info__rating {
  background-color: #fff;
  padding: 10px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0px;
}
.moviesinfo__right-content__more-info__director-wrapper {}
.moviesinfo__right-content__more-info__director-title {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}
.moviesinfo__right-content__more-info__director {
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  margin: 10px 0px;
  color: #fff;
  font-weight: 500;
}

img {
  width: 500px;
}
</style>
