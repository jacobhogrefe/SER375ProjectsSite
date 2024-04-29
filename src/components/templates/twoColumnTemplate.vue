<template>
    <div class="data">
        <h1>{{ projectTitle }}</h1>
        <h3>{{ author }}</h3>
        <div class="container">
            <div class="left">
                <h1>What is this project?</h1>
                <p>{{ description }}</p>
                <h1>Story</h1>
                <p>{{ story }}</p>
                <h1>Struggles and Triumphs</h1>
                <p>{{ struggles }}</p>
                <p>{{ triumphs }}</p>
                <div v-if="pictures.length > 1" class="videoSide">
                    <video :src="video" controls></video>
                </div>
            </div>
            <div class="right">
                <div v-for="(picture, index) in pictures" :key="index">
                    <img :src="picture" alt="Project Image">
                </div>
                <div v-if="pictures.length <= 1" class="videoSide">
                    <video :src="video" controls></video>
                </div>
            </div>

        </div>
        <h1>Helpful Links</h1>
        <slot name="links"></slot>
    </div>
</template>

<script>
import tags from '../tags.vue'

export default {
    name: 'twoColumnTemplate',
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
    flex-direction: row;
}

.left {
    width: 50%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.right {
    width: 50%;
    float: right;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.right img {
    width: fit-content;
    max-width: 90%;
}

.right>.videoSide {
    width: 100%;
}

.right>.videoSide>video {
    width: 90%;
    padding-bottom: 10vh;
}

.left>.videoSide {
    width: 100%;
}

.left>.videoSide>video {
    width: 90%;
    padding-bottom: 10vh;
    align-items: center;
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
}

@media screen and (max-width: 600px) {
    .container {
        flex-direction: column;
    }

    .data {
        padding: 2rem;
    }

    .left {
        width: 100%;
        float: center;
    }

    .right {
        width: 100%;
        float: center;
    }
}
</style>

