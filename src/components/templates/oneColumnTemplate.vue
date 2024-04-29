<template>
    <div class="data">
        <h1>{{ projectTitle }}</h1>
        <h3>{{ author }}</h3>
        <div class="container">
            <h1>What is this project?</h1>
            <!-- <p>{{ description }}</p> -->
            <slot name="description"> </slot>

            <h1>Story</h1>
            <!-- <p>{{ story }}</p> -->
            <slot name="story"> </slot>

            <h1>Struggles and Triumphs</h1>
            <slot name="strugglesAndTriumphs"> </slot>

            <div v-for="(picture, index) in pictures" :key="index">
                <img :src="picture" alt="Project Image">
            </div>
            <video :src="video" controls></video>
            <h1>Helpful Links</h1>
            <slot name="links"></slot>
        </div>
    </div>
</template>

<script>
import tags from '../tags.vue'

export default {
    name: 'oneColumnTemplate',
    props: [
        'projectTitle',
        'author',
        'tags',
        'description',
        'story',
        'struggles',
        'triumphs',
        'pictures',
        'video',
    ],
    components: {
        tags
    }
}
</script>

<style scoped>
.data {
    margin-top: 10vh;
}

.container {
    display: flex;
    flex-direction: column;
    padding: 5vh 10vw 10vh 10vw;
}

.container h1 {
    font-size: x-large;
}

video {
    width: 100%;
    padding-bottom: 10vh;
}

.left p {
    max-width: 90%;
}

h1,
h2,
h3 {
    color: white;
}

h3 {
    padding-bottom: 5vh;
}

p {
    padding-bottom: 10vh;
    text-align: left;
}

h1 {
    padding-bottom: 2vh;
}

img {
    padding-bottom: 5vh;
    max-width: 100%;
}
</style>

