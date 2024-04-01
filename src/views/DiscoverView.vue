<template>
  <div class="discover">
    <h1>Search for a project.</h1>
    <Search></Search>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';

export default {
  components: {
    Search
  }
};
</script>

<style scoped>
* {
  margin-top: 10vh;
}

.discover {
  background-color: rgb(32, 33, 38);
  height: 100vh;
}
</style>