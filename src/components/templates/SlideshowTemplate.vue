<template>
    <div class="data">
        <h1>{{ projectTitle }}</h1>
        <h3>{{ author }}</h3>
        <slot name="slideshow"></slot>
        <div class="container">
            <div class="left">
                <h1>What is this project?</h1>
                <p>{{ description }}</p>
                <h1>Story</h1>
                <p>{{ story }}</p>
            </div>
            <div class="right">
                <h1>Struggles and Triumphs</h1>
                <p>{{ struggles }}</p>
                <p>{{ triumphs }}</p>
            </div>
        </div>
        <video :src="video" controls></video>
    </div>
</template>

<script>
import 'vueperslides/dist/vueperslides.css'
import tags from '../tags.vue'

export default {
    components: { tags },
    props: [
        'backgroundColor',
        'projectTitle',
        'author',
        'tags',
        'description',
        'story',
        'struggles',
        'triumphs',
        'pictures',
        'video',
    ]
}
</script>

<style scoped>
.data {
    margin-top: 10vh;
}

.container {
    display: flex;
    flex-direction: row;
}

.left {
    float: left;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.right {
    float: right;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.left p {
    max-width: 90%;
}

.right p {
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

video {
    width: 70%;
    padding-bottom: 10vh;
}
</style>
