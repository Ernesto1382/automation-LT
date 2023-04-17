class ProductPage {
    getBackPack() {
        return cy.get('#item_4_title_link > .inventory_item_name');
    }
    
    selectBackpack(){
        this.getBackPack().click();
    }

    getBackPackText() {
        return this.getBackPack().invoke('text');
    }

    getBackPackAddToCartAddButton() {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    getBackPackAddToCartRemoveButton() {
        return cy.get('[data-test="remove-sauce-labs-backpack"]');
    }

    getAddToCartIcon() {
        return cy.get('.shopping_cart_link');
    }

    }
    export default ProductPage