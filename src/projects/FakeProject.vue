<template>
    <div>
        <twoColumnTemplate :backgroundColor="backgroundColor" :projectTitle="projectTitle" :author="author"
            :description="description" :story="story" :struggles="struggles" :triumphs="triumphs" :pictures="pictures"
            :video="video" />
    </div>
</template>
    
<script>
import twoColumnTemplate from '../components/templates/twoColumnTemplate.vue'
import sampleImage from '../projects/project_images/ProjectSampleImage.jpeg';
// import sampleVideo from '../projects/project_videos/<VIDEO TITLE>'

export default {
    name: 'FakeProject',
    components: {
        twoColumnTemplate
    },
    data() {
        return {
            backgroundColor: "black",
            projectTitle: "Fake Project",
            author: "Billy Bob",
            description: "oh yeahhhh",
            story: "oh yeahhhh",
            struggles: "oh yeahhhh",
            triumphs: "oh yeahhhh",
            pictures: [sampleImage],
            video: "sampleVideo" //get rid of the quotes when putting in your video variable
        }
    },
    info: {
        title: 'Fake Project',
        author: 'Billy Bob',
        tags: ["Redbull", "Rush", "Celsius", "AHHH"]
    }
}
</script>
    