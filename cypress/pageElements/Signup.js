class Signup {
    elements = {
        firstNameInput: () => cy.getByTestId('first-name-input'),
        lastNameInput: () => cy.getByTestId('last-name-input'),
        emailInput: () => cy.getByTestId('email-input'),
        passwordInput: () => cy.getByTestId('password-input'),
        joinButton: () => cy.getByTestId('register-button'),
    }

    fillFirstName(firstName) {
        this.elements.firstNameInput().type(firstName)
    }

    fillLastName(lastName) {
        this.elements.lastNameInput().type(lastName)
    }

    fillEmail(email) {
        this.elements.emailInput().type(email)
    }

    fillPassword(password) {
        this.elements.passwordInput().type(password)
    }
}

export default new Signup()