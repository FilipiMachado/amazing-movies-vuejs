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
  padding: 0px 25px;
  background-color: #1c1c1c;
}
.searchbar__wrapper {
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #414141;
  width: 100%;
  height: 55px;
  border-radius: 40px;
}
.searchbar__icon {
  margin-left: 20px; 
  cursor: pointer;
}
.searchbar__input {
  font-size: 18px;
  margin: 8px 0px;
  padding: 0px 0px 0px 10px;
  border: none;
  width: 95%;
  background: transparent;
  height: 40px;
  color: #fff;
  margin-left: 10px; 
}
</style>
