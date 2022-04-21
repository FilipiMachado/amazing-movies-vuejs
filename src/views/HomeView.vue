<template>
  <div>
    <HeroImage />
    <SearchBar />
  </div>
</template>

<script>
import HeroImage from '../components/HeroImage.vue'
import SearchBar from '../components/SearchBar.vue'

export default {
  name: 'HomeView',
  components: {
    HeroImage,
    SearchBar,
  },
  data() {
    return {}
  },
}
</script>
