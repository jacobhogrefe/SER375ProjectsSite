<template>
  <div>
    <twoColumnTemplate :projectTitle="projectTitle" :author="author" :pictures="pictures" :video="video">
      <template v-slot:description>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur
          quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt
          a, commodi debitis! Ducimus.</p>
      </template>
      <template v-slot:story>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur
          quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt
          a, commodi debitis! Ducimus.</p>
      </template>
      <template v-slot:strugglesAndTriumphs>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur
          quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt
          a, commodi debitis! Ducimus.</p>
      </template>
      <template v-slot:links>
        <div style="padding-bottom: 10vh;">
          <a href="https://www.google.com">google</a>
        </div>
      </template>
    </twoColumnTemplate>
  </div>
</template>
  
<script>
import twoColumnTemplate from '../components/templates/twoColumnTemplate.vue'
import sampleImage from '../projects/project_images/ProjectSampleImage.jpeg';
// import sampleVideo from '../projects/project_videos/<VIDEO TITLE>'

export default {
  name: 'TwoColumnSampleProject',
  components: {
    twoColumnTemplate
  },
  data() {
    return {
      projectTitle: "Two Column Sample Project",
      author: "John Smith",
      pictures: [sampleImage],
      video: "sampleVideo" //get rid of the quotes when putting in your video variable
    }
  },
  info: {
    title: 'Two Column Sample Project',
    author: 'John Smith',
    tags: ["Sample", "Templates", "Open Source", "Help"]
  }
}
</script>

<style scoped>
a {
  color: white;
}

h1,
h2,
h3 {
  color: white;
  max-width: 90%;
}

h3 {
  padding-bottom: 5vh;
}

p {
  padding-bottom: 10vh;
  text-align: left;
  max-width: 90%;
}

h1 {
  padding-bottom: 2vh;
}
</style>