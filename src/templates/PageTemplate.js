import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import 'prismjs/themes/prism-okaidia.css'
import '@react-website-themes/classy-docs/styles/variables'
import '@react-website-themes/classy-docs/styles/global'

import TopBar from '../components/TopBar'
import Article from '../components/Article'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Layout from '@react-website-themes/classy-docs/components/Layout'
import Seo from '@react-website-themes/classy-docs/components/Seo'
import layoutSidebar from '@react-website-themes/classy-docs/styles/layoutSidebar'

import config from 'content/meta/config'
import menuItems from 'content/meta/menu'
import categories from 'content/meta/categories'

const PageTemplate = props => {
  const {
    location: { pathname },
    data: {
      page: {
        html: pageHTML,
        frontmatter: { title },
        fields: { slug, source },
        excerpt,
      },
      pages: { edges: nodePages },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteLanguage,
    siteTitlePostfix,
  } = config

  const pages = nodePages.map(item => item.node)
  const layoutStyle = source !== 'pages' ? layoutSidebar : undefined

  return (
    <React.Fragment>
      {layoutStyle && (
        <Sidebar
          title="Table of contents"
          pages={pages}
          categories={categories}
          pathname={slug}
        />
      )}
      <Layout themeStyle={layoutStyle}>
        <TopBar>
          <TopBar.Branding title={headerTitle} subTitle={headerSubTitle} />
          <TopBar.Links items={menuItems} />
        </TopBar>
        <Article>
          <Article.Heading title={title} />
          <Article.Body html={pageHTML} />
        </Article>
        <Footer links={footerLinksHTML} copyright={copyrightHTML} />
        <Seo
          url={`${siteUrl}${slug}`}
          language={siteLanguage}
          title={`${title}${siteTitlePostfix}`}
          description={excerpt}
        />
      </Layout>
    </React.Fragment>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!, $source: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
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
    pages: allMarkdownRemark(
      filter: { fields: { source: { eq: $source } } }
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
          headings {
            value
            depth
          }
          tableOfContents
        }
      }
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
