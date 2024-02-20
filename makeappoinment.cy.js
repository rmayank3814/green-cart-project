///<reference types="cypress">
it('open a appointment',()=>{
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
})
it('make a appointment',()=>{
    cy.get('[id="btn-make-appointment"]').click()  
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();
})



