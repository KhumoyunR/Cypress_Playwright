describe('Unit test of webstore', () => {
    it('checks the functionalities of the product page', () => {
      cy.visit('https://practicesoftwaretesting.com/')
      cy.get('[data-test="product-name"]').contains('Combination Pliers').click()
      cy.get('[data-test="product-name"]').should('have.text', 'Combination Pliers')
      cy.get('[data-test="increase-quantity"]').click()
      cy.get('[data-test="add-to-cart"]').click()
      cy.get('[id="toast-container"]').should('include.text', 'Product added to shopping cart.')
      cy.get('[data-test="add-to-favorites"]').click()
      cy.get('[id="toast-container"]').should('include.text', 'Unauthorized, can not add product to your favorite list.')
      cy.get('[data-test="cart-quantity"]').should('include.text', '2')  
    })
  })