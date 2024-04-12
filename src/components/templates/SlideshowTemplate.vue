<template>
    <div class="data">
        <h1>{{ projectTitle }}</h1>
        <h3>{{ author }}</h3>
        <div class="slideshow">
            <vueper-slides fade :touchable="false">
                <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
            </vueper-slides>
        </div>
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
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import sampleImage from '../../projects/project_images/ProjectSampleImage.jpeg'
import tags from '../tags.vue'

export default {
    components: { VueperSlides, VueperSlide, tags },
    data() {
        return {
            slides: [
                {
                    image: sampleImage
                },
                {
                    image: sampleImage
                }
            ]
        }
    },
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

.slideshow {
    padding-bottom: 10vh;
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
}

h1 {
    padding-bottom: 2vh;
}

video {
    width: 70%;
    padding-bottom: 10vh;
}
</style>
