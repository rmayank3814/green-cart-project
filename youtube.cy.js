///<reference types='cypress'>
it('my first text',()=>{
    cy.visit('https://www.youtube.com/');
    cy.get('input[id="search"]').type('javascript text by talk');
    cy.get('button[id="search-icon-legacy"] >yt-icon').click();
}
 


)