const path = require('path')
const Promise = require('bluebird')

const { createFilePath } = require(`gatsby-source-filesystem`)

const SLUG_SEPARATOR = '___'
const SOURCE_SEPERATOR = '/'

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type !== `MarkdownRemark`) {
    return
  }

  const { createNodeField } = actions

  const fileNode = getNode(node.parent)
  const filePath = createFilePath({ node, getNode })

  const source = fileNode.sourceInstanceName
  const [, group, subSource, last] = filePath.split(SOURCE_SEPERATOR)
  const [slug, prefix] = [last, subSource, group, ''].filter(Boolean)[0].split(SLUG_SEPARATOR).reverse()

  console.log({ filePath, source, group, subSource, last, slug, prefix })

  if (source !== 'parts') {
    // Partials don't have a slug
    createNodeField({
      node,
      name: `slug`,
      value: source === 'pages' ? slug : `${source}/${slug}`,
    })
  }

  createNodeField({
    node,
    name: `prefix`,
    value: prefix,
  })

  createNodeField({
    node,
    name: `source`,
    value: source,
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('./src/templates/PageTemplate.js')

    resolve(
      graphql(`
        {
          allMarkdownRemark(
            filter: { fields: { slug: { ne: null } } }
            limit: 1000
          ) {
            edges {
              node {
                fileAbsolutePath
                fields {
                  slug
                  prefix
                  source
                }
                frontmatter {
                  title
                  categories
                }
              }
            }
          }
        }
      `).then(result => {

        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
          return
        }

        const items = result.data.allMarkdownRemark.edges

        const categorySet = new Set()

        // Create category list
        items.forEach(edge => {
          const {
            node: {
              frontmatter: { categories },
            },
          } = edge

          if (categories) {
            categories.forEach(category => {
              categorySet.add(category)
            })
          }
        })

        // create pages
        items.forEach(({ node }) => {
          const slug = node.fields.slug
          const source = node.fields.source

          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug,
              source,
            },
          })
        })
      })
    )
  })
}
