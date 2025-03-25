class Login {
    elements = {
        emailInput: () => cy.getByTestId('email-input'),
        passwordInput: () => cy.getByTestId('password-input'),
        signInButton: () => cy.getByTestId('sign-in-button'),
        joinUsButton: () => cy.getByTestId('register-button'),
    }

    fillEmail(email) {
        this.elements.emailInput().type(email)
    }

    fillPassword(password) {
        this.elements.passwordInput().type(password)
    }
}

export default new Login()