class DynamicLoadingPage {
    visit() {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
    }

    clickStartButton() {
        cy.get('button').click();
    }

    checkFinishText() {
        cy.get('#finish', { timeout: 5000 }).should('be.visible').and('contain', 'Hello World!');
    }
}
export default DynamicLoadingPage;