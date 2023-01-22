Feature: Login into the app

	Scenario: Enter as a normal user
		Given The user is on login page
		When The user logins into the page with the correct email: "user@phptravels.com" and password: "demouser"
		Then The user should access to the dashboard

	@outline
	Scenario Outline: Scenario Outline for Login
		Given The user is on the login page
		When The user logins into the page with my <Email> and <Password>
		Then The user should access to the dashboard

		Examples:
			| Email 								| Password  |
			| user@phptravels.com  	| demouser  |
			| user@phptravels.com  	| hi  |
			| user@phptravels.com  	| there  |
			| user@phptravels.com  	| see  |
