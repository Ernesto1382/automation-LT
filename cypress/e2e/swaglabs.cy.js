import LoginPage from '../e2e/pageobject/login.page'
import ProductPage from '../e2e/pageobject/product.page'
import CheckoutOverviewPage from './pageobject/checkout.overview.page'
import CheckoutDatePage from './pageobject/checkout.data.page'

describe('Technical Challenge from LeanTech', () => {
  
  beforeEach(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.visit('/');
    
  });
  
    it('1. Go to https://www.saucedemo.com/', () => {      
      cy.title().should('contain','Swag Labs')
    })

    it('Rest of point of the challenge: ', () => { 
      const loginPage = new LoginPage();
      const productPage = new ProductPage();
      const checkoutOverviewPage = new CheckoutOverviewPage();
      const checkoutDatePage = new CheckoutDatePage();
      const productName = 'Sauce Labs Backpack';
  
      // 2. Log in to the application with the “standard_user” user.
      loginPage.getUserName().type('standard_user')
      loginPage.getPassword().type('secret_sauce')
      loginPage.getLoginButton().click();
      cy.title().should('include', 'Swag Labs')

      //3. Add any product to the cart.
      productPage.getBackPackAddToCartAddButton().click();
      cy.log('Product selected: ' + productName)

      // 4.Go to the cart page.
      productPage.getAddToCartIcon().click();

      ///   4.1 Validate that the item name text is the same that you got in step 3.1
      checkoutOverviewPage.verifyFirstItemName(productName)

      ///   4.2 Click on Checkout
      checkoutOverviewPage.clickOnCheckoutButton();

      // 5.Fill in the information and continue to the next page.
      checkoutDatePage.fillFirstName('Name')
      checkoutDatePage.fillLastName('Last')
      checkoutDatePage.fillZipCode('X5000')
      checkoutDatePage.selectContinueButton();

      // 6. In the “CHECKOUT: OVERVIEW” page, validate that the item name text is the same that you got in step 3.1
      checkoutOverviewPage.verifyFirstItemName(productName)

      // 7. Finish the order.
      checkoutOverviewPage.clickOnFinishOrder();

      // 8. Validate that you finish the order.
      checkoutOverviewPage.getSuccessMessage().should('contain.text','Thank you for your order!')

      //    8.1You can validate that you are at the “CHECKOUT: COMPLETE!” page using that text or another one.
      checkoutOverviewPage.getCheckoutComplete().should('contain.text','Checkout: Complete!')

    })


  })