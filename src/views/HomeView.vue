<template>
  <div>
    <HeroImage />
    <SearchBar />
    <MoviesGrid />
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
  },
  methods: {
  },
}
</script>
