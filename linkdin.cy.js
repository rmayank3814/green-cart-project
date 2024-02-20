///<reference types="cypress">

    it("Should log in without issues", () => {
        cy.visit("https://www.saucedemo.com");
    });
    it("Should log in without issues", () => {
        cy.get("#user-name").type("standard_user")  
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
    
      })
