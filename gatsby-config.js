module.exports = {
  siteMetadata: {
    title: 'Fabian Lee | Software Engineer from Hong Kong',
    author: 'Fabian Lee',
    email: 'chleefabian@gmail.com',
    description:
      'Software Engineer from Hong Kong with focus on Front-end Development and Human-centered Design.',
    siteUrl: 'https://sugarfabby.com/',
    blogUrl: 'https://blog.sugarfabby.com/',
    socialMedia: [
      { link: 'https://github.com/fabianlee1211', platform: 'github' },
      {
        link: 'https://www.linkedin.com/in/fabiannnlee/',
        platform: 'linkedin',
      },
      { link: 'https://twitter.com/fabiannnlee', platform: 'twitter' },
      { link: 'https://www.behance.net/fabianlee', platform: 'behance' },
      { link: 'https://medium.com/@fabianlee', platform: 'medium' },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': `${__dirname}/src/components`,
          '@assets': `${__dirname}/src/assets`,
          '@hooks': `${__dirname}/src/hooks`,
          '@lib': `${__dirname}/src/lib`,
        },
        extensions: ['js'],
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/pages/blog`,
    //     name: `blog`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: `src`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve(
            './src/components/templates/MarkdownPage.js',
          ),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              maintainCase: false,
              icon: `<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `anchor`,
              elements: [`h3`],
            },
          },
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: `Overnight`,
              extensions: [`overnight`],
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Inter:100,200,300,400,500,600,700,800'],
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
      },
    },
  ],
};
