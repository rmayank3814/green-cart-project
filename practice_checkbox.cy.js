describe("it is check box",()=>{
it("write a test case in check box functonality",()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    // single checkbox 
    //cy.get("#checkBoxOption1").click().should('be.checked').and('have.value','option1')
       // multiple checkbox 
    //    cy.get("[type='checkbox']").click ().should('be.checked').and('have.value','option1')
       cy.get("[type='checkbox']").check(('option2','option3')).should('be.checked')
       cy.get("#checkBoxOption2").uncheck()
})




})