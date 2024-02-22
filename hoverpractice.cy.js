describe("this is visible  and unvisible function",()=>{
    //alert
    it("this is a alert popup script",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('.mouse-hover-content').invoke('show').contains('Top').click()
    })
})