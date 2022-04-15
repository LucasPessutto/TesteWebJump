/// <reference types="cypress"/>
import Cenario1 from "../../pages/cenario1.po";

describe("Cenário 1", () => {
  it("Dado a página principal da aplicação, quando clicar nos botões one, two e four, então eles devem sumir da tela", () => {
    cy.visit("https://wj-qa-automation-test.github.io/qa-test/");

    cy.get("#btn_one").should("be.visible").contains("One");
    cy.get("#btn_two").should("be.visible").contains("Two");
    cy.get("#btn_link").should("be.visible").contains("Four");

    Cenario1.pegarCliqueDosBotoesDeOneTwoFour();

    cy.get("#btn_one").should("not.be.visible");
    cy.get("#btn_two").should("not.be.visible");
    cy.get("#btn_link").should("not.be.visible");
  });
});
