<template>
  <div>
    <HeroImage />
    <SearchBar />
    <MoviesGrid :moviesData="moviesData"/>
    <LoadMore />
  </div>
</template>

<script>
import HeroImage from '../components/HeroImage.vue'
import SearchBar from '../components/SearchBar.vue'
import MoviesGrid from '../components/MoviesGrid.vue'
import LoadMore from '../components/LoadMore.vue'

export default {
  name: 'HomeView',
  components: {
    HeroImage,
    SearchBar,
    MoviesGrid,
    LoadMore,
  },
  data() {
    return {}
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
}
</script>
