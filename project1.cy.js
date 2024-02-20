describe("this is a fisrt test suit",()=>{
it("this is a first test cases",()=>{
   cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
   cy.get('.search-keyword').type('br');
  cy.wait(2000);
  cy.get('.product:visible').should('have.length',2)
});







})