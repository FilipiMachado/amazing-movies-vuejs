<template>
  <div>
    <nav>
      <router-link to="/">
        <img src="../assets/pop-movies-logo.png" alt="movies logo" />
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {}
  },
};
</script>

<style scoped></style>
