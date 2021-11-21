exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  page.matchPath = page.path

  if (page.path.match(/^\/video/)) {
    await createPage({
      path: '/video',
      matchPath: '/video/:videoId',
      component: page.component,
    })
  }

}