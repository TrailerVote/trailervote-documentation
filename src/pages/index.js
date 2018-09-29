import React from 'react'
import { graphql } from 'gatsby'

import '@react-website-themes/classy-docs/styles/variables'
import '@react-website-themes/classy-docs/styles/global'

import Branding from '@react-website-themes/classy-docs/components/Branding'
import Header from '@react-website-themes/classy-docs/components/Header'
import Layout from '@react-website-themes/classy-docs/components/Layout'
import Hero from '../components/Hero'
import Menu from '@react-website-themes/classy-docs/components/Menu'
import Seo from '@react-website-themes/classy-docs/components/Seo'

import config from 'content/meta/config'
import menuItems from 'content/meta/menu'

export default function IndexPage(props) {
  const {
    data: {
      hero: { html: heroHTML },
      heroNavigation: { html: heroNavigationHTML }
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

  return (
    <Layout>
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menuItems} />
      </Header>
      <Hero>
        <Hero.Logo />
        <Hero.Html>{heroHTML}</Hero.Html>
        <Hero.Navigation>{heroNavigationHTML}</Hero.Navigation>
      </Hero>
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    hero: markdownRemark(fileAbsolutePath: { regex: "/content/parts/hero.body/" }) {
      html
    }
    heroNavigation: markdownRemark(fileAbsolutePath: { regex: "/content/parts/hero.navigation/" }) {
      html
    }
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
  }
`
