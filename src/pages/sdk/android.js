import { graphql } from 'gatsby'
import ContentPage from '../../components/ContentPage'

export default ContentPage

export const query = graphql`
  query {
    pages: allMarkdownRemark(
      filter: { fields: { source: { eq: "sdk/android" } } }
      sort: { fields: [fields___prefix] }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            categories
          }
        }
      }
    }
    hero: markdownRemark(fileAbsolutePath: { regex: "/content/parts/hero/" }) {
      html
    }
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
    copyright: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyright/" }
    ) {
      html
    }
  }
`
