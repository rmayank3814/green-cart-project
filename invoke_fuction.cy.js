describe("this is a fisrt test suit",()=>{
    it.only("this is a second test cases",()=>{
       cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get(".brand.greenLogo").invoke("text").then((value)=>{
        cy.log(value)
      })
    });
    
    
    
    
    
    
    
    })