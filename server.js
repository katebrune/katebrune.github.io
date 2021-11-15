const express = require('express')
require('dotenv').config({ path: '.env.local' })
const app = express()

/**
 * this test server allows us to run the contents of
 * the /out directory to see what the application
 * will look like when it's deployed
 */
app.use(express.static('out'))
const { TEST_SERVER_PORT } = process.env
app.listen(TEST_SERVER_PORT, (err) => {
  if (!err) {
    console.log(`Application running on port ${TEST_SERVER_PORT}`)
  } else {
    console.log(`Error: ${err}`)
  }
})
