import React from 'react'

import '@react-website-themes/classy-docs/styles/variables'
import '@react-website-themes/classy-docs/styles/global'

import TopBar from '../components/TopBar'
import Article from '../components/Article'
import Footer from '../components/Footer'
import Layout from '@react-website-themes/classy-docs/components/Layout'
import Seo from '@react-website-themes/classy-docs/components/Seo'

import config from 'content/meta/config'
import menuItems from 'content/meta/menu'
import categories from 'content/meta/categories'

const ContentPage = props => {
  const {
    data: {
      pages: { edges: rawPages },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
      intro
    },
  } = props

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteTitle,
    siteDescription,
    siteLanguage,
  } = config

  const pages = rawPages.map(page => page.node)
  const introHTML = (intro || {}).html

  return (
    <Layout>
      <TopBar>
        <TopBar.Branding title={headerTitle} subTitle={headerSubTitle} />
        <TopBar.Links items={menuItems} />
      </TopBar>
      <Article>
        { introHTML && <Article.Body html={introHTML} /> }
        <Article.Heading title="Table of contents" />
        <Article.Related pages={pages} categories={categories} />
      </Article>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </Layout>
  )
}

export default ContentPage

