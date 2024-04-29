<template>
  <div class="home">
    <img :src=randomBackground() alt="Background" class="bg">
    <div class="content">
      <h1>Open Source Development Projects</h1>
      <p>A collection of projects from Quinnipiac’s Open Source Development course.</p>
    </div>
    <div class="secondContent">
      <h1>What is SER375?</h1>
      <p>SER375 is the open source development course at Quinnipiac University, taught by Alex Thimineur. This course
        introduces students into the world of open-source development, which includes subject matter such as how the
        open-source community operates, expanding on existing projects, and how to properly use and manage all resources
        available to computer scientists in order to create large-scale applications, even those outside of an existing
        comfort zone. Each student in this course has a unique project, which can be found on this site. </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    randomBackground() {
      // Load background images dynamically
      const backgrounds = require.context(
        '../projects/project_images',
        true, // Include subdirectories
        /\.(png|jpe?g)$/ // File extension pattern
      );

      const backgroundFiles = backgrounds.keys().map(key => key.slice(2));

      // Get a random index to select a random background image
      const randomIndex = Math.floor(Math.random() * backgroundFiles.length);

      // Use require to load the random background image dynamically
      return require(`../projects/project_images/${backgroundFiles[randomIndex]}`);
    }
  }
}
</script>

<style scoped>
.home {
  margin-top: 10vh;
}

.bg {
  filter: brightness(60%) blur(30px);
  z-index: -1;
  object-fit: cover;
  width: 100vw;
  height: 75vh;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
}

.secondContent {
  padding: 15vh 10vw 25vh 10vw;
  /* top right bottom left */
  background-color: rgb(32, 33, 38);
}

h1,
p {
  color: rgb(247, 247, 247);
}

p {
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 5vh;
}
</style>
