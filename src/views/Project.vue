<template>
    <div>
      <div v-if="projectTitle === 'sampleproject'">
        <SampleProject/>
      </div>
      <div v-else>
        <h1 style="padding: 45vh;">Invalid project!</h1>
      </div>
    </div>
  </template>
  
  <script>
  import SampleProject from '../projects/SampleProject.vue'
  
  export default {
    name: 'Project',
    components: {
      SampleProject,
    },
    mounted() {
      console.log(this.$route.params.projectTitle)
      this.projectTitle = this.$route.params.projectTitle
    },
    data() {
      return {
        projectTitle: ''
      }
    }
  }
  </script>
  