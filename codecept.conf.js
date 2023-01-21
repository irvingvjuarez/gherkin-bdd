exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.phptravels.net/',
      show: false,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js',
		login: "./pages/loginPage.js"
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/login.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'gherkin-bdd'
}