const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: "src/data/actions/",
    })

    createNodeField({
      node,
      name: "slug",
      value: `/action${relativeFilePath}`,
    })
  }
}
