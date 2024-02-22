describe("this is a static dropdown function",()=>{
    it("this is dropdown test case",()=>{
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
       cy.get('#autocomplete').type('ame').get('.ui-menu-item').each((ele,index)=>{
      //  cy.log(ele.text())
        if(ele.text()==="American Samoa")
        cy.wrap(ele).click()
       })
    })
    
})