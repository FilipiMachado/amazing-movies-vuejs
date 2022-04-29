<template>
  <div v-if="movieData">
    <div :style="{ backgroundImage: `url(http://image.tmdb.org/t/p/w780${movieInfo.backdrop_path})` }" class="moviesinfo__main-content">
      <div class="moviesinfo__left-content">
        <img class="moviesinfo__left-content__img" :src="'http://image.tmdb.org/t/p/w780' + movieInfo.poster_path"  alt="">
      </div>
      <div class="moviesinfo__right-content">
        <div class="moviesinfo__right-content__title-wrapper">
          <span class="moviesinfo__right-content__movie-title">{{ movieData.original_title }}</span>
          <span class="moviesinfo__right-content__movie-synopsis">SYNOPSIS</span>
          <span class="moviesinfo__right-content__movie-description">{{ movieData.overview }}</span>
        </div>
        <div class="moviesinfo__right-content__more-info__wrapper">
          <div class="moviesinfo__right-content__more-info__rating-wrapper">
            <span class="moviesinfo__right-content__more-info__rating-title">RATING</span>
            <div class="moviesinfo__right-content__more-info__rating">{{ movieData.vote_average }}</div>
          </div>
          <div class="moviesinfo__right-content__more-info__director-wrapper">
            <span class="moviesinfo__right-content__more-info__director-title">RELEASE DATE</span>
            <div class="moviesinfo__right-content__more-info__director">{{ movieData.release_date }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="moviesinfo__movie-budget__container">
      <div class="moviesinfo__movie-budget__wrapper">
        <div class="moviesinfo__movie-budget__content">
          <span class="moviesinfo__movie-budget__content-text">Runtime: {{ convertMinsToHours(movieData.runtime) }}h</span>
        </div>
        <div class="moviesinfo__movie-budget__content">
          <span class="moviesinfo__movie-budget__content-text">Budget: ${{ movieData.budget.toLocaleString('en-US') }}</span>
        </div>
        <div class="moviesinfo__movie-budget__content">
          <span class="moviesinfo__movie-budget__content-text">Revenue: ${{ movieData.revenue.toLocaleString('en-US') }}</span>
        </div>
      </div>
    </div>
    <div class="moviesinfo__actors__container">
      <span class="moviesinfo__actors__title">Actors</span>
      <div class="moviesinfo__actors__rows-container">
        <div v-for="cast in movieCast" :key="cast.id" class="moviesinfo__actors__row">
          <img class="moviesinfo__actors__row-img" 
               :src="cast.profile_path ? 'http://image.tmdb.org/t/p/w780' + cast.profile_path : require('../assets/no-image-available.png')" 
               alt="">
          <span class="moviesinfo__actors__row-actor-name">{{ cast.name }}</span>
          <span class="moviesinfo__actors__row-character-name">{{ cast.character }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoviesInfo',
  props: [
    'movieInfo'
  ],
  mounted() {
    setTimeout(() => {
      this.getAllMovies()
      this.getAllCast()
    }, 500);
  },
  data() {
    return {
      movieData: undefined,
      movieCast: undefined,
    }
  },
  methods: {
    async getAllMovies() { 
      const movieId = await this.movieInfo.id
      const API_URL = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d34609fd1a782372f150c40ad84616df&language=en-US`)
      const data = await API_URL.json()

      this.movieData = data
      
      //console.log(this.movieData)
    },
    async getAllCast() { 
      const movieId = await this.movieInfo.id
      const API_URL = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d34609fd1a782372f150c40ad84616df&language=en-US`)
      const data = await API_URL.json()

      this.movieCast = data.cast
      
      console.log(this.movieCast)
    },
    convertMinsToHours(e) {
      console.log(e)
      let h = Math.floor(e / 60);
      let m = e % 60;
      h = h < 10 ? '0' + h : h; 
      m = m < 10 ? '0' + m : m; 
      return h + ':' + m;
    }
  },
};
</script>

<style scoped>
.moviesinfo__main-content {
  display: flex;
  padding: 30px;
  background-size: cover;
  background-repeat: no-repeat;
}
.moviesinfo__left-content {}
.moviesinfo__left-content__img {
  width: 100%;
  max-width: 720px;
  transition: all 0.3s ease 0s;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
}
.moviesinfo__right-content {
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  background-color: hsla(0, 0%, 11%, 0.604);
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
  font-weight: 500;
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
.moviesinfo__movie-budget__container {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  min-height: 100px;
  background-color: #1c1c1c;
  padding: 0px 20px;
}
.moviesinfo__movie-budget__wrapper {
  display: flex;
  max-width: 1280px;
  width: 100%;
  margin: 0px auto;
}
.moviesinfo__movie-budget__content {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #494949;
  border-radius: 20px;
  margin: 0px 20px;
  flex: 1 1 0%;
  padding: 15px 0px;
}
.moviesinfo__movie-budget__content-text {
  color: #fff;
}
.moviesinfo__actors__container {
  max-width: 1280px;
  margin: 0px auto;
  padding: 20px;
}
.moviesinfo__actors__title {
  font-size: 34px;
  font-weight: bold;
  margin: 10px 5px;
  display: block;
}
.moviesinfo__actors__rows-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}
.moviesinfo__actors__row {
  color: #fff;
  background-color: #1c1c1c;
  border-radius: 8px;
  padding: 5px;
  text-align: center;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  display: flex;
  flex-direction: column;
}
.moviesinfo__actors__row-img {
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
}
.moviesinfo__actors__row-actor-name {
  display: block;
  padding: 0px 0px 10px 0px;
}
.moviesinfo__actors__row-character-name {
  display: block;
  padding: 0px 0px 10px 0px;
}

img {
  width: 500px;
}
</style>
