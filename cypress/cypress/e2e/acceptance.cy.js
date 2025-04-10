describe('End-to-End testing of webstore', () => {
  it('checks the functionalities of webstore by end-user perspective', () => {
    cy.visit('https://practicesoftwaretesting.com/')
    cy.get('[data-test="nav-categories"]').click()
    cy.get('[data-test="nav-power-tools"]').click()
    cy.get('[data-test="page-title"]').should('have.text', 'Category: Power Tools')
    cy.get('select').select('price,asc')
    cy.get('input[data-test^="category-"]').parent().contains('Drill').click()
    cy.get('[data-test="product-name"]').contains('Cordless Drill 12V').click()
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('.toast-message').click()
    cy.get('[data-test="nav-cart"]').click()
    cy.get('[data-test="proceed-1"]').click()
    cy.get('[data-test="email"]').type('admin@practicesoftwaretesting.com')
    cy.get('[data-test="password"]').type('welcome01')
    cy.get('[data-test="login-submit"]').click()
    cy.get('[data-test="proceed-2"]').click()
    cy.get('[data-test="street"]').type('Azenes iela 6')
    cy.get('[data-test="city"]').type('Riga')
    cy.get('[data-test="state"]').type('Riga')
    cy.get('[data-test="country"]').type('Riga')
    cy.get('[data-test="postal_code"]').type('LV-1083')
    cy.get('[data-test="proceed-3"]').click()
    cy.get('[data-test="payment-method"]').select('cash-on-delivery')
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="payment-success-message"]').should('have.text', 'Payment was successful')
  })
})