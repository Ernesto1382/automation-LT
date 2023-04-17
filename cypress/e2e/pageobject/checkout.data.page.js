class CheckoutDatePage {
    getFirstName() {
        return cy.get('[data-test="firstName"]');
    }
    
    getLastName(){
        return cy.get('[data-test="lastName"]');
    }

    getZipCode(){
        return cy.get('[data-test="postalCode"]');
    }

    getLContinueButton() {
        return cy.get('[data-test="continue"]');
    }

    fillFirstName(firstNameVar) {
        this.getFirstName()
        .clear()
        .type(firstNameVar);
    }

    fillLastName(lastNameVar) {
        this.getLastName()
        .clear()
        .type(lastNameVar);
    }

    fillZipCode(zipCodeVar) {
        this.getZipCode()
        .clear()
        .type(zipCodeVar);
    }

    selectContinueButton() {
        this.getLContinueButton().click();
    }

   

    }
    export default CheckoutDatePage