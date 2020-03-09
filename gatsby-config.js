module.exports = {
  // Add this if you want to deploy to github pages or if you deploy to sub-route
  // pathPrefix: "/reponame",

  siteMetadata: {
    lang: `en`,
    defaultTitle: `The 7th Urban Social Forum`,
    defaultDescription: `The Urban Social Forum is an annual event that provides an open and inclusive space for exchanging of knowledge, debating ideas, and networking between civil society organisations, activists, academics, and students working on pressing urban issues.`,
    author: `KotaKita`,
    developer: ['Ongki Herlambang <ongki@herlambang.design>'],

    // This line needed for SITEMAP GENERATOR and ROBOT.txt
    siteUrl: `https://urbansocialforum.or.id`,
    titleTemplate: '%s',
    image: `/images/usf2020.png`,
    imageWide: `/images/usf2020--wide.png`,
    twitterUsername: `@Urban_Forum`,
    facebook: `UrbanSocialForum`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Add SVG inline
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The 7th Urban Social Forum`,
        short_name: `7th USF`,
        start_url: `/`,
        background_color: `#feda3f`,
        theme_color: `#feda3f`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo-small.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `raleway\:100,200,300,400,500,600,700,900`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
