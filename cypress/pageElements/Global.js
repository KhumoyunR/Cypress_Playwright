class Global {
    elements = {
        sideBarBurger: () => cy.getByTestId('nav-menu-button'),
        logOutButton: () => cy.getByTestId('logout-button'),
        sideBarLinks: (pageName) =>
            cy.getByTestId('nav-menu-popup').contains('a', pageName),
        languageOption: () =>
            cy.get('.shadow-buttons-neutral.txt-compact-small'),
    }

    navigateSideBar = {
        openPage: (pageName) => {
            this.elements.sideBarBurger().click()
            this.elements.sideBarLinks(pageName).click()
        },
    }
}

export default new Global()