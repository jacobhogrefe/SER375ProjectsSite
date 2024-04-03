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
            </div>
            <div class="right">
                <div v-for="(picture, index) in pictures" :key="index">
                    <img :src="picture" alt="Project Image">
                </div>
                <video :src="video" controls></video>
            </div>
        </div>
    </div>
</template>

<script>
// import projectData from '../../projects/projects.json'
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

.right video {
    width: 90%;
}

.left p {
    max-width: 90%;
}

h1,
h2,
h3 {
    color: white;
}

h3{
    padding-bottom: 5vh;
}

p {
    padding-bottom: 10vh;
}

h1 {
    padding-bottom: 2vh;
}

img {
    padding-bottom: 5vh;
}

</style>

