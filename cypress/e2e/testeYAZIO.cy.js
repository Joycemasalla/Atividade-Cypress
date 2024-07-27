describe('yazioteste', function() {
  it('yazioteste', function() {
    // Test name: yazioteste

    // 1. Abrir a página da YAZIO
    cy.visit('https://www.yazio.com/pt');

    // 2. Aceitar cookies (ajuste o seletor conforme necessário)
    cy.get('#c-p-bn').click(); // Clique no botão para aceitar cookies

    // 3. Clicar no menu hamburger
    cy.get('.hamburger-box').click(); // Clique para abrir o menu

    // 4. Clicar na opção 'Calcular IMC'
    cy.get('[href="https://www.yazio.com/pt/calculadora-imc"] > .font-body').click();

    // 5. Selecionar o gênero feminino
    cy.get('#calculator-gender-female-input > .choice-btn').click();

    // 6. Clicar no campo de idade
    cy.get('#calculator-step-age').click();

    // 7. Inserir a idade
    cy.get('#calculator-step-age').type('18');

    // 8. Clicar no campo de altura
    cy.get('#calculator-step-height-cm').click();

    // 9. Inserir a altura
    cy.get('#calculator-step-height-cm').type('158');

    // 10. Clicar no campo de peso
    cy.get('#calculator-step-weight-input-kg').click();

    // 11. Inserir o peso
    cy.get('#calculator-step-weight-input-kg').type('63');

    // 12. Clicar no botão para calcular o IMC
    cy.get('.pink').click();

    // 13. Clicar na resposta
    cy.get('#answer-1 > .q-answer-text').click();

    // 14. Clicar na imagem de teaser
    cy.get('.mt-32:nth-child(1) .icon-teaser-image').click();

    // 15. Clicar no logo da navbar
    cy.get('.navbar-brand').click();
  });
});