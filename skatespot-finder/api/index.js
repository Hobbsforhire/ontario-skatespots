const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const skateparks = require('./routes/skateparks')

// Import API Routes
app.use(skateparks)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
