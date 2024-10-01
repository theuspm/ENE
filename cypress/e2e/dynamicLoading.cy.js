import DynamicLoadingPage from './pages/DynamicLoadingPage';

describe('Teste renderização elemento escondido', () => {
    const page = new DynamicLoadingPage();

    it('Clicar no botão "start" e validar exibição do texto Hello world', () => {
        page.visit();              // Acessar o site
        page.clickStartButton();   // Clicar no botão "Start"
        page.checkFinishText();    // Verificar se o elemento com o texto apareceu
    });
});