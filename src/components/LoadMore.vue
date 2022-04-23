<template>
  <div>
    <button class="loadmore__btn">Load More</button>
  </div>
</template>

<script>
export default {
  name: 'LoadMore',
  data() {
    return {}
  },
};
</script>

<style scoped>
.loadmore__btn {
  display: block;
  background: #222;
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: #fff;
  border: 0px;
  font-size: 30px;
  margin: 30px auto;
  transition: all 0.3s ease 0s;
  outline: none;
  cursor: pointer;
}
.loadmore__btn:hover {
  opacity: 0.8;
}
</style>
