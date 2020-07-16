module.exports = {
  siteMetadata: {
    title: 'Beyond Recovery',
    description: 'Beyond Recovery',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-163332189-1',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Beyond Recovery',
        short_name: 'beyond-recovery',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Kalam',
            subsets: ['latin'],
            variants: ['700'],
          },
          {
            family: 'Inconsolata',
            subsets: ['latin'],
            variants: ['400, 400i, 700, 700i'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: true,
        jpegQuality: 50,
        stripMetadata: true,
        quality: 60,
        maxWidth: 1900,
        maxHeight: 1080,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'action',
        path: `${__dirname}/content/action/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'press',
        path: `${__dirname}/content/press/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'post',
        path: `${__dirname}/content/post/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'page',
        path: `${__dirname}/content/page/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'tool',
        path: `${__dirname}/content/tool/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'training',
        path: `${__dirname}/content/training/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {},
        allPageHeaders: [],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        generateMatchPathRewrites: true,
      },
    },
  ],
}
