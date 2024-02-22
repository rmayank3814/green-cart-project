describe("this is a radio button function",()=>{
    it("this is dropdown test case",()=>{
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
     
      cy.get('[type="radio"]').check(('radio2')).should('be.checked')
    })
    
})