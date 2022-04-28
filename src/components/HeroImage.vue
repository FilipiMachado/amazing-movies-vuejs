<template>
  <div>
    <div :style="{ backgroundImage: `url(${popularMoviesBackgroundImg})` }" class="heroimage-container">
      <div class="heroimage-wrapper">
        <div class="heroimage-text__wrapper">
          <span class="heroimage-text__title">{{ popularMovieTitle }}</span>
          <span class="heroimage-text__description">{{ popularMovieDescription }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroImage',
  data() {
    return {
      popularMovieTitle: undefined,
      popularMovieDescription: undefined,
      popularMoviesBackgroundImg: undefined,
    }
  },
  mounted() {
    this.getMostPopularMovie()
  },
  methods: {
    async getMostPopularMovie() {
      const API_URL = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=d34609fd1a782372f150c40ad84616df&language=pt-BR")
      const data = await API_URL.json()

      this.popularMovieTitle = data.results[0].original_title
      this.popularMovieDescription = data.results[0].overview
      this.popularMoviesBackgroundImg = "http://image.tmdb.org/t/p/w780" + data.results[0].backdrop_path
    },
  },
};
</script>

<style scoped>
.heroimage-container {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 650px;
  position: relative;
}
.heroimage-text__wrapper {
  max-width: 800px;
  position: absolute;
  bottom: 40px;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  background-color: #1c1c1c9a;
  padding: 30px;
  border-radius: 10px;
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
