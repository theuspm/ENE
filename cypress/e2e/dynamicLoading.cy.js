describe('Teste renderização elemento escondido', () => {
  it('Clicar no botão "start" e validar exibição do texto Hello world', () => {
    cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');// Acessar o site
    
    cy.get('button').click(); // Clicar no botão "Start"
    
    cy.get('#finish', { timeout: 5000 })  // Aguardar por 5 segundos o carregamento do elemento
      .should('be.visible').and('contain', 'Hello World!'); // Verificar se o elemento está visível contendo o texto "Hello World!"
  });
});