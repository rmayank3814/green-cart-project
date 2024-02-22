describe("this is navigation function",()=>{
it("this is test case navigation function",()=>{
    cy.visit("https://rahulshettyacademy.com").wait(2000)
    cy.get('.nav-outer >.main-menu >.navbar-collapse >.navigation :nth-child(6) >a').click().wait(2000)
  //  cy.go("back").wait(2000)
   // cy.go("forward").wait(2000)
   cy.go(-1).wait(2000)
   cy.go(+1).wait(2000)
  
})

})