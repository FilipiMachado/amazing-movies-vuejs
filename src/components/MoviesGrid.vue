<template>
  <div class="moviesgrid__main-content">
    <div class="moviesgrid__title-wrapper">
      <span class="moviesgrid__title">Filmes em Alta</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoviesGrid',
  data() {
    return {}
  },
};
</script>

<style scoped>
.moviesgrid__main-content {}
.moviesgrid__title-wrapper {}
.moviesgrid__title {
  font-size: 2rem;
  font-weight: 600;
}
</style>
