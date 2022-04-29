<template>
  <div class="searchbar__container">
    <div class="searchbar__wrapper">
      <span @click="searchMovie" class="material-symbols-outlined searchbar__icon">
        search
      </span>
      <input class="searchbar__input" 
             type="text" 
             v-model="searchItem"
             placeholder="Search for a movie">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchItem: undefined,
      filteredMoviesData: undefined,
    }
  },
  mounted() {
  },
  methods: {
    async getMovieNames() {
      const API_URL = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d34609fd1a782372f150c40ad84616df&language=en-US&query=${this.searchItem}&page=1&include_adult=false`)
      const data = await API_URL.json()

      this.filteredMoviesData = data.results

      this.$emit('filteredMovies', this.filteredMoviesData)
    },
    searchMovie() {
      this.getMovieNames()
    },
  },
};
</script>

<style scoped>
.searchbar__container {
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0px 25px;
  background-color: #1c1c1c;
}
.searchbar__wrapper {
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #414141;
  width: 100%;
  height: 55px;
  border-radius: 40px;
}
.searchbar__icon {
  margin-left: 20px; 
  cursor: pointer;
}
.searchbar__input {
  font-size: 18px;
  margin: 8px 0px;
  padding: 0px 0px 0px 10px;
  border: none;
  width: 95%;
  background: transparent;
  height: 40px;
  color: #fff;
  margin-left: 10px; 
}
</style>
