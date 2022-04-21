<template>
  <nav class="header-container">
    <router-link to="/">
      <img class="header-img" src="./assets/tmdb_logo.svg" alt="">
    </router-link>
  </nav>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Abel', sans-serif;
  box-sizing: border-box;
}
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
}
</style>
