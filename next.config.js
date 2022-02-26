const path = require('path')

module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    STRIPE_PK: process.env.STRIPE_PK
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "src/styles/helpers/variables.scss";`
  }
}
