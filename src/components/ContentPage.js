import React from 'react'

import '@react-website-themes/classy-docs/styles/variables'
import '@react-website-themes/classy-docs/styles/global'

import Article from '@react-website-themes/classy-docs/components/Article'
import Branding from '@react-website-themes/classy-docs/components/Branding'
import Footer from '../components/Footer'
import Header from '@react-website-themes/classy-docs/components/Header'
import Heading from '@react-website-themes/classy-docs/components/Heading'
import Layout from '@react-website-themes/classy-docs/components/Layout'
import List from '../components/ArticleList'
import Menu from '@react-website-themes/classy-docs/components/Menu'
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
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menuItems} />
      </Header>
      <Article>
        <Heading title="Table of contents" />
        { introHTML && <div className={""} dangerouslySetInnerHTML={{ __html: introHTML }} /> }
        <List pages={pages} categoryList={categories} />
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

