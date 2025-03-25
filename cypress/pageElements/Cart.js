class Cart {
    elements = {
        discountButton: () => cy.getByTestId('add-discount-button'),
        discountInput: () => cy.getByTestId('discount-input'),
        discountApply: () => cy.getByTestId('discount-apply-button'),
        discountCode: () => cy.getByTestId('discount-code'),
        discountAmount: () => cy.getByTestId('discount-amount'),
        discountRemove: () => cy.getByTestId('remove-discount-button'),
        productRemove: () => cy.get('[data-testid="product-row"] button'),
        addToCartIcon: () => cy.getByTestId('nav-cart-link'),
        cartContainer: () => cy.getByTestId('cart-container'),
    }
}

export default new Cart()