<template>
    <div>
      <div v-if="projectTitle === 'sampleproject'">
        <SampleProject/>
      </div>
      <div v-else>
        <p>Invalid project!</p>
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
  