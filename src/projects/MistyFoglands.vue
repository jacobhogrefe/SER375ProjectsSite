<template>
  <div>
    <twoColumnTemplate :projectTitle="projectTitle" :author="author" :pictures="pictures" :video="video">
      <template v-slot:description>
        <p>
          Misty Foglands is a new dimension adding a few new items and blocks, meant to be accessed after The End. 
          It features a few custom blocks, items, and world generation.
        </p>
      </template>
      <template v-slot:story>
        <p>
          After playing Minecraft for years, I felt it was appropriate to combine my knowledge of Java and love for 
          Minecraft into a single project. This is the culmination of a semester's worth of research, development, 
          and tears, in a single project. Overall, modding Minecraft showed how difficult it is to add my own things 
          into a preexisting game, and how people do this kind of work for a passion. It was really cool developing 
          this, and seeing the work that goes into a daunting project like this.
        </p>
      </template>
      <template v-slot:strugglesAndTriumphs>
        <p>
          World generation was the hardest thing to get working properly. Getting the shape of the world I wanted with 
          the custom features (trees, mushrooms, and ore) to generate within the dimension took more time than I wish 
          to admit. Making sure the proper names show up in the creative menu, ensuring all of the JSON files were formatted 
          and added properly, and making the textures were all things I was initially uncomfortable with, but really understood 
          as time went on.
        </p>
      </template>
      <template v-slot:links>
        <div style="padding-bottom: 10vh;">
          <a href="https://github.com/jacobhogrefe/misty-foglands">GitHub Link</a>
          <a href="https://moddingtutorials.org/1.18.2/world-gen/">World Generation Discord Link</a>
          <a href="https://discord.com/invite/v6v4pMv">Fabric Discord</a>
          <a href="https://youtube.com/playlist?list=PLKGarocXCE1ECgBI1_Z_Yr4qMdhjVi3kg&si=BMmNDDIH_Q2Nrlbf">Modding Playlist I Used</a>
        </div>
      </template>
    </twoColumnTemplate>
  </div>
</template>
  
<script>
import twoColumnTemplate from '../components/templates/twoColumnTemplate.vue';
import foglands_image from '../projects/project_images/misty_foglands_world.jpg';
import foglands_items from '../projects/project_images/misty_foglands_items.jpg';
import foglands_video from '../projects/project_videos/misty_foglands.mp4';

export default {
  name: 'MistyFoglands',
  components: {
    twoColumnTemplate
  },
  data() {
    return {
      projectTitle: "Misty Foglands",
      author: "Jacob Hogrefe",
      pictures: [foglands_image, foglands_items],
      video: foglands_video //get rid of the quotes when putting in your video variable
    }
  },
  info: {
    title: 'Misty Foglands',
    author: 'Jacob Hogrefe',
    tags: ["Minecraft", "Open Source", "Java", "IntelliJ", "1.18.2", "Fabric"]
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