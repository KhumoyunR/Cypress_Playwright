describe('Integration test of webstore', () => {
    it('checks the interaction of the product page with the cart page', () => {
      cy.visit('https://practicesoftwaretesting.com/')
      cy.get('[data-test="product-name"]').contains('Bolt Cutters').click()
      cy.get('[data-test="product-name"]').should('have.text', 'Bolt Cutters')
      cy.get('[data-test="add-to-cart"]').click()
      cy.get('[data-test="nav-cart"]').click()
      cy.get('[data-test="product-title"]').should('contain', 'Bolt Cutters')
    })
  })