import Global from '../../pageElements/Global'
import Home from '../../pageElements/Home'
import Product from '../../pageElements/Product'
import Checkout from '../../pageElements/Checkout'
import Cart from '../../pageElements/Cart'
import Login from '../../pageElements/Login'

describe('e2e test to check functionalities of webstore', () => {
    const EMAIL = Cypress.env('email')
    const PASSWORD = Cypress.env('password')

    beforeEach(() => {
        cy.login(EMAIL, PASSWORD)
    })

    it('logs in to webstore & opens Store page from sidebar', () => {
        cy.visit('/')
        Home.elements.headerLink().contains('Store of Excellence')
        Home.elements.productLink().should('have.length', 4)
        Global.navigateSideBar.openPage('Store')
    })

    it('add a T-Shirt to cart', () => {
        cy.visit('/store')
        Product.elements.productByHref().click()
        Product.elements.sizeOptions('S').click()
        Product.elements.colorOptions('Black').click()
        Product.elements.addToCartButton().click()
        Product.elements.addToCartIcon().click()
        Cart.elements.cartContainer().contains('h1', 'Cart')
    })

    it('fill data in checkout page', () => {
        cy.visit('/checkout?step=address')
        Checkout.elements.firstName().click().type('Bob')
        Checkout.elements.lastName().click().type('Marley')
        Checkout.elements.address().click().type('Dammes iela 1')
        Checkout.elements.postalCode().click().type('LV-1069')
        Checkout.elements.city().click().type('Riga')
        Checkout.elements.country().select('Latvia')
        Checkout.elements.submitAddress().click()
        Checkout.elements.deliveryOption().contains('FakeEx Standard').click()
        Checkout.elements.submitDelivery().click()
        Checkout.elements.paymentOption().first()
        Checkout.elements.submitPayment().click()
        Checkout.elements.placeOrder().click()
        cy.url().should('include', '/order/confirmed/order')
        cy.url().then((url) => {
            Cypress.env('orderUrl', url)
        })
    })

    it('logout after successful order', () => {
        cy.visit(Cypress.env('orderUrl'))
        Global.elements.sideBarBurger().click()
        Global.elements.logOutButton().click()
        Login.elements.emailInput().should('be.visible')
        Login.elements.passwordInput().should('be.visible')
        Login.elements.signInButton().should('be.visible')
    })
})