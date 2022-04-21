<template>
  <div class="searchbar__container">
    <div class="searchbar__wrapper">
      <span class="material-symbols-outlined searchbar__icon">
        search
      </span>
      <input class="searchbar__input" type="text">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {}
  },
};
</script>

<style scoped>
.searchbar__container {
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0px 30px;
  background-color: #1c1c1c;
}
.searchbar__wrapper {
  display: flex;
  align-items: center;
}
.searchbar__icon {
  cursor: pointer;
}
.searchbar__input {}
</style>
