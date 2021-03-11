module.exports = {
  siteMetadata: {
    title: "Dạy lập trình web bán chuyên",
    description: `Dạy lập trình web bán chuyên`,
    author: `@thinhnguyen`,
    siteUrl: `https://daylaptrinhbanchuyen.net`
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        path: "./src/images/"
      }
    },
    {
      resolve: `gatsby-plugin-tawk`,
      options: {
        tawkId: "6049843a385de407571eda7c",
      },
    }
  ],
};
