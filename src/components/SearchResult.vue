<!-- SearchResult.vue -->
<template>
    <router-link :to="projectRoute" class="search-result">
        <div class="result-info">
            <h3>{{ title }}</h3>
            <p>by {{ author }}</p>
        </div>
    </router-link>
</template>
  
<script>
export default {
    props: {
        title: String,
        author: String,
        display: String,
    },
    data() {
        return {
            projectRoute: ''
        };
    },
    created() {
        this.projectRoute = `/projects/${this.title.replace(' ', '').toLowerCase()}`;
    },
};
</script>
  
<style scoped>
.search-result {
    display: block;
    margin-bottom: 5vh;
    margin-left: 20vw;
    margin-right: 20vw;
    padding: 10px;
    /* border: 1px solid #000; */
    border-radius: 5px;
    text-decoration: none;
    color: rgb(247, 247, 247);
    transition: background-color 0.3s;
    background-color: rgb(58, 60, 69);
}

.search-result:hover {
    background-color: rgb(47, 48, 56);
}

.result-info {
    text-align: center;

}

.result-info h3 {
    padding-top: 1vh;
}

.result-info p {
    font-size: 14px;
    color: rgb(247, 247, 247);
    padding-top: 2vh;
    padding-bottom: 1vh;
}
</style>
  