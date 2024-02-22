describe("how to handle promises",()=>{
    it("this is a nine test case ",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.wait(2000)
        cy.get('.brand').then((logo_text)=>{
           // cy.log(logo_text.text()) or
           const txt=logo_text
           cy.log(txt.text())
        })
    })
    
})