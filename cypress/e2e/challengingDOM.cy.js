describe('Teste seletores', () => {
    it('Clicar nos botões principais e nos botões "edit" e "delete"', () => {
      cy.visit('https://the-internet.herokuapp.com/challenging_dom');   // Acessar o site
  
      // Clicar nos três botões principais da tela
      cy.get('.button').first().click();
      cy.get('.button.alert').click();
      cy.get('.button.success').click();
  
      cy.get('table').contains('edit').click({ multiple: true });    // Clicar em todos os botões "edit"
  
      cy.get('table').contains('delete').click({ multiple: true });  // Clicar em todos os botões "delete"
    });
  });