<template>
    <div class="bg">
        <tags></tags>
    </div>
</template>

<script>
import tags from '../components/tags.vue'
export default {
    components: {
        tags,
    }
}
</script>

<style scoped>
.bg {
    padding: 0vh 10vw 25vh 10vw;
    /* top right bottom left */
    background-color: rgb(32, 33, 38);
    min-height: 100vh;
    margin-top: 10vh;
}
</style>