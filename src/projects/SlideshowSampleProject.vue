<template>
    <div>
        <slideshowTemplate :backgroundColor="backgroundColor" :projectTitle="projectTitle" :author="author"
            :description="description" :story="story" :struggles="struggles" :triumphs="triumphs" :pictures="pictures"
            :video="video">
            <template v-slot:slideshow>
                <vueper-slides fade :touchable="false" class="slideshow">
                    <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
                </vueper-slides>
            </template>
        </slideshowTemplate>
    </div>
</template>
    
<script>
import slideshowTemplate from '../components/templates/SlideshowTemplate.vue';

//import images
import one from '../projects/project_images/1.png';
import two from '../projects/project_images/2.png';
import three from '../projects/project_images/3.png';

//import video
// import video from '../projects/project_videos/<YOUR VIDEO>'

// Import VueperSlides and VueperSlide from vueperslides
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
    name: 'SlideshowSampleProject',
    components: {
        slideshowTemplate,
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            backgroundColor: "black",
            projectTitle: "Slideshow Sample Project",
            author: "John Smith",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt a, commodi debitis! Ducimus.",
            story: "Write your project's story here. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt a, commodi debitis! Ducimus.",
            struggles: "Write your project's struggles here. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt a, commodi debitis! Ducimus.",
            triumphs: "Write your project's triumphs here. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt a, commodi debitis! Ducimus.",
            video: "sampleVideo", //get rid of the quotes when putting in your video variable
            slides: [
                {
                    image: one
                },
                {
                    image: two
                },
                {
                    image: three
                }
            ]

        }
    },
    info: {
        title: 'Slideshow Sample Project',
        author: 'John Smith',
        tags: ["Sample", "Templates", "Open Source", "Help"]
    }
}
</script>

<style scoped>
.slideshow {
    padding-bottom: 10vh;
}
</style>
