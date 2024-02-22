describe("this is parent child concept",()=>{
it("this is nine test case",()=>{
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

//parent chaning concept
cy.get(".products").find(".product").eq(0).contains('ADD TO CART')



})




})