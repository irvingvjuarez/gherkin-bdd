const { I, login } = inject();
// Add in your custom step files

Given('The user is on login page', () => {
  login.visit()
});

When(/The user logins into the page with the correct email: "(.+)" and password: "(.+)"/, (email, password) => {
	login.submitLoginForm(email, password)
})

Then("The user should access to the dashboard", () => {
	login.verifySuccessfulLogin()
})

When(/The user logins into the page with my (.+) and (.+)/, (email, password) => {
	login.submitLoginForm(email, password)
})