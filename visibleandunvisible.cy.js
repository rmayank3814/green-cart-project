describe("this is a visible function",()=>{
    it('this is a visible and test case',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // visible text
        cy.get('#displayed-text').should('be.visible')
        //hide script
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('be.not.visible')
        // show script
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

    })
})