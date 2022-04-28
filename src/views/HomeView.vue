<template>
  <div>
    <HeroImage />
    <MoviesGrid />
    <LoadMore />
  </div>
</template>

<script>
import HeroImage from '../components/HeroImage.vue'
import MoviesGrid from '../components/MoviesGrid.vue'
import LoadMore from '../components/LoadMore.vue'

export default {
  name: 'HomeView',
  components: {
    HeroImage,
    MoviesGrid,
    LoadMore,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
