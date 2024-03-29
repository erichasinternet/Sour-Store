require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "SOUR! TEAM NONEXISTENT",
    siteTitleDefault: "SOUR! TEAM NONEXISTENT",
    siteUrl: "https://sour.team",
    hrefLang: "en",
    siteDescription:
      "Sour! and Team Nonexistent Merchandise",
    siteImage: "/default-og-image.jpg",
    twitter: "@erichasinternet",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-netlify",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}
