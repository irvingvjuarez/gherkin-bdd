Feature: Login into the app

	Scenario: Enter as a normal user
		Given The user is on login page
		When The user logins into the page with the correct email: "user@phptravels.com" and password: "demouser"
		Then The user should access to the dashboard