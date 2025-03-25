class Checkout {
    elements = {
        firstName: () => cy.getByTestId('shipping-first-name-input'),
        lastName: () => cy.getByTestId('shipping-last-name-input'),
        address: () => cy.getByTestId('shipping-address-input'),
        postalCode: () => cy.getByTestId('shipping-postal-code-input'),
        city: () => cy.getByTestId('shipping-city-input'),
        country: () => cy.getByTestId('shipping-country-select'), //cy.get('select') there are 2 options of selectors
        submitAddress: () => cy.getByTestId('submit-address-button'),
        deliveryOption: () => cy.getByTestId('delivery-option-radio'),
        submitDelivery: () => cy.getByTestId('submit-delivery-option-button'),
        paymentOption: () => cy.getByTestId('radio-button'),
        submitPayment: () => cy.getByTestId('submit-payment-button'),
        placeOrder: () => cy.getByTestId('submit-order-button'),
    }
}

export default new Checkout()