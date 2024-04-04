export const getProjects = () => {
  const vueFileNames = require.context('@/projects', false, /.vue$/).keys().map(key => key.slice(2, -4))
  const projects = vueFileNames.map(vueFileName => {
    return {
      header: {
        ...require(`./${vueFileName}`).default.info
      }
    }
  })
  return { projects }
}

export const getProjectComponents = () => {
  const vueFileNames = require.context('@/projects', false, /.vue$/).keys().map(key => key.slice(2, -4))
  const projectComponents = vueFileNames.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.replaceAll(' ', '').toLowerCase()]: require(`./${curr}`).default
    }
  }, {})
  return projectComponents
}