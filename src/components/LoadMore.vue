<template>
  <div>
    <button @click="getMoreMovies" class="loadmore__btn">Load More</button>
  </div>
</template>

<script>
export default {
  name: 'LoadMore',
  props: [
    'fullMoviesData'
  ],
  mounted() {
  },
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    async getMoreMovies() {
      const API_URL = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d34609fd1a782372f150c40ad84616df&language=en-US&page=${this.currentPage + 1}`)
      const data = await API_URL.json()

      this.currentPage += 1
      
      this.$emit('loadMoreMovies', data)
    },
  },
};
</script>

<style scoped>
.loadmore__btn {
  display: block;
  background: #222;
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: #fff;
  border: 0px;
  font-size: 30px;
  margin: 30px auto;
  transition: all 0.3s ease 0s;
  outline: none;
  cursor: pointer;
}
.loadmore__btn:hover {
  opacity: 0.8;
}
</style>
