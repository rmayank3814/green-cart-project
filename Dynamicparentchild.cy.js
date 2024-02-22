describe("this is parent child concept",()=>{
    it("this is nine test case",()=>{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.wait(6000)
    
    //parent chaning concept
    cy.get(".products").find(".product").each((ele,index,list)=>{
    // cy.log(ele.text())
        if(ele.text().includes("carrot"))
            //cy.wrap(ele).find("[type='button']").click()
            cy.wrap(ele).contains("ADD TO CART").click()

    })

    })
    
    
    
    })
    
    
    
