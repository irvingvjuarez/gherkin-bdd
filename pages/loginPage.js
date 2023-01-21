const { I } = inject()

module.exports = class LoginPage {
	constructor() {
		this.navbar = ".menu-wrapper"
		this.inputEmail = "input[placeholder='Email']"
		this.inputPassword = "input[placeholder='Password']"
		this.submitBtn = "button[type='submit']"
		this.loginMessage = "Hi,"
	}

	visit() {
		I.amOnPage("login")
		I.waitForElement(this.navbar)
		I.seeInCurrentUrl("login")
	}

	submitLoginForm() {
		I.waitForElement(this.inputEmail)

		I.fillField(this.inputEmail, "user@phptravels.com")
		I.fillField(this.inputPassword, "demouser")
		I.click(this.submitBtn)

		I.wait(6)
	}

	verifySuccessfulLogin() {
		I.waitForElement("section.dashboard-area")
	}
}