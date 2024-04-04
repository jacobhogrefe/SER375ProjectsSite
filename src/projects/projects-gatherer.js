// returns a list of all file names that end with .vue inside of the projects folder
// e.g. if there were files in the projects folder named "SampleProject1.vue" and "SampleProject2.vue", this function would return ['SampleProject1', 'SampleProject2']
const getAllProjectFileNames = () => {
  return require.context('@/projects', false, /.vue$/).keys().map(key => key.slice(2, -4))
}

// Creates a JSON structure for each project page utilizing their "info" field, which is a custom field containing project metadata
// Can be used to gather all available project page's info to be used with feature implementations such as searching
export const getProjects = () => {
  const vueFileNames = getAllProjectFileNames()
  const projects = vueFileNames.map(vueFileName => {
    return {
      header: {
        ...require(`./${vueFileName}`).default.info
      }
    }
  })
  return { projects }
}

// Creates a JSON map consisting of all project page vue components
// Can be used for dynamically loading all projects as components for another Vue component
export const getProjectComponents = () => {
  const vueFileNames = getAllProjectFileNames()
  const projectComponents = vueFileNames.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.replaceAll(' ', '').toLowerCase()]: require(`./${curr}`).default
    }
  }, {})
  return projectComponents
}

