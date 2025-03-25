class Product {
    elements = {
        /*This option chooses product by 'data-testid' selector, so you have to change product's number 
        in a row of block correspondingly in order to choose another desired product. */
        productByID: () => cy.getByTestId('product-wrapper').first(),
        /* This option chooses product by 'href' selector, you have to change product's href(url) 
        correspondingly to choose another desired product */
        productByHref: () => cy.getByHref('/us/products/t-shirt'),
        sizeOptions: (sizeName) =>
            cy.getByTestId('product-options').contains('button', sizeName),
        colorOptions: (colorName) =>
            cy.getByTestId('product-options').contains('button', colorName),
        addToCartButton: () => cy.getByTestId('add-product-button'),
        addToCartIcon: () => cy.getByTestId('nav-cart-link'),
        productDescription: () => cy.getByTestId('product-description'),
    }
}

export default new Product()