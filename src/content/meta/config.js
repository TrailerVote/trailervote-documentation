const base = {
  name: 'TrailerVote Docs',
  url: 'https://github.com/TrailerVote'
}

const config = {
  /* meta tags */
  siteTitle: `${base.name} - API and SDK documentation`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } - API and SDK documentation`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'API and SDK documentation',

  /* url */
  siteUrl: base.url
  // pathPrefix: '',
}

module.exports = config
