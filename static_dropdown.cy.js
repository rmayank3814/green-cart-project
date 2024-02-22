describe("this is a static dropdown function",()=>{
    it("this is dropdown test case",()=>{
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
       cy.get('#dropdown-class-example').select('Option2').should('have.value','option2');
    })
})