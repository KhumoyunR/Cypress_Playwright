class Store {
    elements = {
        tableView: () => cy.getByTestId('table-view-btn'),
        tablePageTitle: () => cy.getByTestId('table-page-title'),
        storeView: () => cy.getByHref('/us/store'),
    }
}

export default new Store()