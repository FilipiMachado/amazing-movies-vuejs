<template>
  <div>
    <HeroImage />
    <SearchBar />
    <MoviesGrid />
  </div>
</template>

<script>
import HeroImage from '../components/HeroImage.vue'
import SearchBar from '../components/SearchBar.vue'
import MoviesGrid from '../components/MoviesGrid.vue'

export default {
  name: 'HomeView',
  components: {
    HeroImage,
    SearchBar,
    MoviesGrid,
  },
  data() {
    return {}
  },
}
</script>
