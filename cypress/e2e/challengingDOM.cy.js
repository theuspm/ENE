import ChallengingDOMPage from './pages/ChallengingDOMPage';

describe('Teste selectores', () => {
    const page = new ChallengingDOMPage();

    it('Clicar nos botões principais e nos botões "edit" e "delete"', () => {
        page.visit();            // Acessar o site
        page.clickButtons();      // Clicar nos três botões principais
        page.clickEditAndDelete(); // Clicar nos botões "edit" e "delete"
    });
});