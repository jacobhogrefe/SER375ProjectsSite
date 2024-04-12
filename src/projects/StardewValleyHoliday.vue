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
  name: 'StardewValleyHoliday',
  components: {
    twoColumnTemplate
  },
  data() {
    return {
      backgroundColor: "blue",
      projectTitle: "Stardew Valley Holiday",
      author: "Smellie Smelea",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt a, commodi debitis! Ducimus.",
      story: "Write your project's story here. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt a, commodi debitis! Ducimus.",
      struggles: "Write your project's struggles here. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt a, commodi debitis! Ducimus.",
      triumphs: "Write your project's triumphs here. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt a, commodi debitis! Ducimus.",
      pictures: [sampleImage],
      video: "sampleVideo" //get rid of the quotes when putting in your video variable
    }
  },
  info: {
    title: 'Stardew Valley Holiday',
    author: 'Smellie Smelea',
    tags: ["Stardew", "SMAPI", "Modding"]
  }
}
</script>
  