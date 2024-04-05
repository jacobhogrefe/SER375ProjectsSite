<template>
  <div>
    <div v-if="isValidProject">
      <component :is="componentMap[projectTitle]"></component>
    </div>
    <div v-else>
      <h1 style="padding: 45vh;">Invalid project!</h1>
    </div>
  </div>
</template>

<script>

const { getProjectComponent } = require('../projects/projects-gatherer.js')

export default {
  name: 'Project',
  computed: {
    isValidProject() {
      return Object.keys(this.componentMap).length > 0
    }
  },
  mounted() {
    this.projectTitle = this.$route.params.projectTitle
    const projectComponent = getProjectComponent(this.projectTitle)
    this.componentMap = projectComponent? { [this.projectTitle]: projectComponent } : {}
  },
  data() {
    return {
      projectTitle: '',
      componentMap: {}
    }
  }
}
</script>
