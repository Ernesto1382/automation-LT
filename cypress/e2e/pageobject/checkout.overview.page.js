class CheckoutOverviewPage {
    getFirstItem() {
        return cy.get('.inventory_item_name');
    }
    
    getFirstItemText(){
        return this.getFirstItem().invoke('text');
    }

    getCheckoutButton(){
        return cy.get('[data-test="checkout"]');
    }
    
    clickOnCheckoutButton(){
        this.getCheckoutButton().click();
    }

    clickOnFinishOrder() {
        cy.get('[data-test="finish"]').click();
    }

    getSuccessMessage() {
        return cy.get('.complete-header');
    }
    
    getCheckoutComplete() {
        return cy.get('.title');
    }

    verifyFirstItemName(verifyName) {
        return this.getFirstItem().should('contain.text', verifyName)
    }

    }
    export default CheckoutOverviewPage