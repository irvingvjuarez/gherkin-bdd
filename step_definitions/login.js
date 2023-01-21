const LoginPage = require("../pages/loginPage");

const { I } = inject();
// Add in your custom step files

const login = new LoginPage()

Given('The user is on login page', () => {
  login.visit()
});

When("The user logins into the page with the correct credentials", () => {
	login.submitLoginForm()
})

Then("The user should access to the dashboard", () => {
	login.verifySuccessfulLogin()
})