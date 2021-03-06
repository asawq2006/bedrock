var config = require('../lib/config');

config.website.browserVersions = {
  IE: {major: 8, minor: 0},
  Firefox: {major: 3, minor: 6},
  Opera: {major: 10, minor: 6},
  Safari: {major: 4, minor: 0},
  Chrome: {major: 17, minor: 0}
};

config.website.views.vars = {
  productionMode: false,
  minify: false,
  baseUri: config.server.baseUri,
  serviceHost: config.server.host,
  serviceDomain: config.server.domain,
  supportDomain: config.server.domain,
  googleAnalytics: {
    enabled: false,
    account: ''
  },
  session: {
    loaded: false,
    auth: false
  },
  pageLayout: 'normal',
  debug: true,
  title: config.brand.name,
  siteTitle: config.brand.name,
  redirect: true,
  style: {
    brand: {
      alt: config.brand.name,
      src: '/img/bedrock.png',
      height: '24',
      width: '182'
    }
  },
  // TODO: rename to something more along the lines of "shared" or "public"
  // client-side data
  clientData: {
    baseUri: config.server.baseUri,
    siteTitle: config.brand.name,
    productionMode: false,
    demoWarningUrl: 'https://bedrock.dev/wiki/Demo_Warning',
    // key generation config
    keygen: {
      bits: 2048
    },
    flags: {
      enableCreateIdentity: true
    },
    forms: {
      vocabs: []
    }
  },
  // contact and social media details
  // blog, email, facebook, github, googlePlus, irc, twitter, youtube
  //   *: {label: '...', url: '...'}
  //   email: {..., email: '...'}
  contact: {}
};

config.website.views.routes = [
  ['/', 'index.html'],
  '/about',
  '/legal',
  '/contact',
  ['/help', 'help/index.html']
];
