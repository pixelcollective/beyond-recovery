module.exports = {
  siteMetadata: {
    title: 'Beyond Recovery',
    description: 'Beyond Recovery',
  },
  plugins: [
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
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
  ],
}
