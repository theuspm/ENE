class ChallengingDOMPage {
    visit() {
        cy.visit('https://the-internet.herokuapp.com/challenging_dom');
    }

    clickButtons() {
        cy.get('.button').first().click();
        cy.get('.button.alert').click();
        cy.get('.button.success').click();
    }

    clickEditAndDelete() {
        cy.get('table').contains('edit').click({ multiple: true });
        cy.get('table').contains('delete').click({ multiple: true });
    }
}
export default ChallengingDOMPage;