cy.get('.input').should('have.length', 3);
describe('example to-do app', () => {  
    it('checks css', () => {  
        cy.visit('http://localhost:3000'); // Make sure to visit your app  
        cy.get('label:nth-child(even) .input').should('have.css', 'color', 'rgb(255, 0, 0)'); // Check if even inputs are red  
    });  
});