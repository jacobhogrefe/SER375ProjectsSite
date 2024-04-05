import { markRaw } from 'vue'

// returns a list of all file names that end with .vue inside of the projects folder
// e.g. if there were files in the projects folder named "SampleProject1.vue" and "SampleProject2.vue", this function would return ['SampleProject1.vue', 'SampleProject2.vue']
const getAllProjectFileNames = () => {
  return require.context('@/projects', false, /.vue$/).keys()
}

// Creates a JSON structure for each project page utilizing their "info" field, which is a custom field containing project metadata
// Can be used to gather all available project page's info to be used with feature implementations such as searching
export const getProjects = () => {
  const vueFileNames = getAllProjectFileNames()
  const projects = vueFileNames.map(vueFileName => {
    const name = vueFileName.slice(2, -4)
    return {
      header: {
        ...require(`./${name}`).default.info
      }
    }
  })
  return { projects }
}

// Creates a JSON map consisting of all project page vue components
// Can be used for dynamically loading all projects as components for another Vue component
export const getProjectComponent = (projectName) => {
  const vueFileNames = getAllProjectFileNames()
  const selectedFileName = vueFileNames.find(vueFileName => vueFileName.slice(2, -4).replaceAll(' ', '').toLowerCase() === projectName)
  if (!selectedFileName) {
    return null
  }
  return markRaw(require(`${selectedFileName}`).default)
}

