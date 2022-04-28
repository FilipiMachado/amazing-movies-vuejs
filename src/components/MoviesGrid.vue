<template>
  <div>
    <SearchBar @filteredMovies="getFilteredMovies"/>
    <div class="moviesgrid__title-wrapper">
      <span class="moviesgrid__title">Popular Movies</span>
    </div>
    <div class="moviesgrid__main-content">
      <div class="moviesgrid__grid-container">
        <div v-for="movie in moviesData" :key="movie.id" class="moviesgrid__movie-wrapper">
          <a @click="openSingleMoviePage" class="moviesgrid__movie-link">
            <img class="moviesgrid__movie-image" 
                 :src="'http://image.tmdb.org/t/p/w780' + movie.poster_path" 
                 alt="movie_image">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
  name: 'MoviesGrid',
  components: {
    SearchBar,
  },
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
    },
    getFilteredMovies(value) {
      this.moviesData = value
    },
    openSingleMoviePage() {
      this.$router.push('/moviesinfo')
    },
  },
};
</script>

<style scoped>
.moviesgrid__title-wrapper {
  padding: 20px;
}
.moviesgrid__title {
  font-size: 2rem;
  font-weight: 600;
  color: #353535;
}
.moviesgrid__main-content {
  max-width: 1280px;
  margin: 0px auto;
  padding: 0px 20px;
}
.moviesgrid__grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}
.moviesgrid__movie-wrapper {}
.moviesgrid__movie-link {
  cursor: pointer;
}
.moviesgrid__movie-image {
  width: 100%;
  max-width: 720px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
}
</style>
