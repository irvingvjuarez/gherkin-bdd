const { EMAIL, PASSWORD } = require("../globals")

const { I } = inject()

class LoginPage {
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

	submitLoginForm(email, password) {
		I.waitForElement(this.inputEmail)

		I.fillField(this.inputEmail, email)
		I.fillField(this.inputPassword, password)
		I.click(this.submitBtn)

		I.wait(6)
	}

	verifySuccessfulLogin() {
		I.waitForElement("section.dashboard-area")
	}
}

module.exports = new LoginPage()