<template>
  <div>
    <div class="moviesgrid__title-wrapper">
      <span class="moviesgrid__title">Filmes em Alta</span>
    </div>
    <div class="moviesgrid__main-content">
      <div v-for="movie in moviesData" :key="movie.id" class="moviesgrid__grid-container">
      <div class="moviesgrid__movie-wrapper">
        <a class="moviesgrid__movie-link" href="">
          <img class="moviesgrid__movie-image" :src="'http://image.tmdb.org/t/p/w780' + movie.backdrop_path" alt="" srcset="">
        </a>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoviesGrid',
  data() {
    return {
      moviesData: undefined,
    }
  },
  mounted() {
    this.getMovieNames()
  },
  methods: {
    async getMovieNames() {
      const API_URL = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=d34609fd1a782372f150c40ad84616df&language=pt-BR")
      const data = await API_URL.json()

      this.moviesData = data.results

      console.log(this.moviesData)
    },
  },
};
</script>

<style scoped>
.moviesgrid__main-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}
.moviesgrid__title-wrapper {
  padding: 20px;
}
.moviesgrid__title {
  font-size: 2rem;
  font-weight: 600;
  color: #353535;
}
.moviesgrid__grid-container {
}
.moviesgrid__movie-wrapper {
}
.moviesgrid__movie-link {}
.moviesgrid__movie-image {
  border-radius: 30px;
}
</style>
