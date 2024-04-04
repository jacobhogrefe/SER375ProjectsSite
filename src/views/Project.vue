<template>
  <div>
    <div v-if="isValidProject">
      <component :is="projectTitle"></component>
    </div>
    <div v-else>
      <h1 style="padding: 45vh;">Invalid project!</h1>
    </div>
  </div>
</template>

<script>
const { getProjectComponents } = require('../projects/projects-gatherer.js')
const projectComponents = getProjectComponents()
  
export default {
  name: 'Project',
  components: {
    ...projectComponents
  },
  computed: {
    isValidProject() {
      return !!Object.keys(projectComponents).find(projectComponentKey => projectComponentKey === this.projectTitle)
    }
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
