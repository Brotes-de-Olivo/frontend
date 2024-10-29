const contentfulManagement = require('contentful-management')
require('dotenv').config()

const spaceId = process.env.VITE_CONTENTFUL_SPACE_ID || 'k89gjjflez77'
const environment = process.env.VITE_CONTENTFUL_ENVIRONMENT || 'master'

module.exports = function () {
  const accessToken = process.env.VITE_CONTENTFUL_PERSONAL_ACCESS_TOKEN
  const contentfulClient = contentfulManagement.createClient({
    accessToken: accessToken,
  })

  return contentfulClient.getSpace(spaceId).then((space) => space.getEnvironment(environment))
}
