<template>
  <nav>
    <router-link to="/">
      <img src="./assets/pop-movies-logo.png" alt="movies logo">
    </router-link>
  </nav>
  <router-view/>
</template>

<style scoped>
nav {
  background-color: #222;
}
img {
  width: 120px;
}
</style>
