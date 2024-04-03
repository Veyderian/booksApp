const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
  e2e: {
    baseUrl: 'http://localhost:3000',
    //retries: 2,
    headless: true,
    setupNodeEvents(on, config) {
   
    },evn:{
      username:"testing booksApp"
    }
  },
})