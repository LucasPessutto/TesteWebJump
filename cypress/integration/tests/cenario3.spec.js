/// <reference types="cypress"/>
import Cenario3 from "../../pages/cenario3.po";

describe("Cenário 3", () => {
  it("Dado a página principal da aplicação, quando clicar nos botões one, two e four, então eles devem sumir da tela", () => {
    cy.visit("https://wj-qa-automation-test.github.io/qa-test/");

    Cenario3.preencherCampoDePrimeiroNome();
    Cenario3.pegarCliqueDoBotaoOne();
    Cenario3.checarOptionThree();
    Cenario3.selecionarExampleTwo();

    cy.get("#btn_one").should("not.be.visible");
    cy.get("#opt_three").should("be.checked");
    cy.get("#select_box").contains("ExampleTwo");

    cy.get('[alt="selenium"]').should("be.visible");
  });
});
