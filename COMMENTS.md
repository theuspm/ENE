## Arquitetura

O padrão escolhido para automação foi o POM (Page Object Model), ele separa a lógica da interação com a interface de usuário em arquivos de páginas, deixando os testes mais organizados. 

**Vantagens de usar o padrão POM:**

> Fácil leitura: com o POM, os testes ficam mais simples de ler, já que o foco é no que está sendo testado e não em como as interações são feitas.
> Fácil manutenção: se algum seletor ou interação mudar, você só precisa ajustar isso na página certa, sem precisar mexer em todos os testes.
> Reutilização de código: os métodos que você cria para uma página podem ser reaproveitados em vários testes.

## Observações

1. Na seção de Casos de Testes do protótipo não está incluso pré-condições, pois os casos de testes não seriam e nem foram executados. 

2. As palavras chaves Gherkin foram destacadas para marcar inicio e fim dos casos de testes.

3. A segunda atividade de automação frontend (Challengin DOM) não teve validação, ja que a atividade era sobre escolha de seletores.

4. Se o protótipo fosse funcional, seriam realizados testes para incluir os resultados e métricas neste desafio.

5. A documentação dos teste estão no repositório em um arquivo PDF chamado "Desafio eNe Soluções. A collection tambem está no repositório.