const getAllProjectFileNames = () => {
  return require.context('@/projects', false, /.vue$/).keys().map(key => key.slice(2, -4))
}

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

