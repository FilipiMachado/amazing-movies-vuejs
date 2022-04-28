<template>
  <div>
    <nav @click="goToHomePage" class="header-container">
      <img class="header-img" src="@/assets/tmdb_logo.svg" alt="" />
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: [
    'isHomePage'
  ],
  data() {
    return {}
  },
  mounted() {
    /* console.log(this.isHomePage) */
  },
  methods: {
    goToHomePage() {
      this.$emit('getHomePageValue', this.isHomePage)
    },
  },
};
</script>

<style scoped>
.header-container {
  display: flex;
  background-color: #222;
  align-items: center;
  padding: 10px 0px;
  margin: 0 auto;
  justify-content: space-between;
}
.header-img {
  width: 120px;
  margin: 10px 30px;
  cursor: pointer;
}
</style>
