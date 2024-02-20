describe("this is a first project",()=>{
it("this is a first third test case",()=>{
  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  cy.get(".products").find(".product")
  .contains("ADD TO CART")
  .click();
})

})