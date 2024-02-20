describe("this is a first project",()=>{
    it("this is a first six test case",()=>{
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      cy.get(".products").find(".product").each((ele,index,text)=>{
       cy.log(ele.text)
      })
    })
    
    })