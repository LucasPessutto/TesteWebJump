/// <reference types="cypress"/>
import Cenario2 from "../../pages/cenario2.po";

describe("Cenário 2", () => {
  it("Dado a página de iframe, quando clicar nos botões one, two e four, então eles devem sumir da tela", () => {
    cy.visit("https://wj-qa-automation-test.github.io/qa-test/buttons.html");

    cy.get("#btn_one").should("be.visible").contains("One");
    cy.get("#btn_two").should("be.visible").contains("Two");
    cy.get("#btn_link").should("be.visible").contains("Four");

    Cenario2.pegarCliqueDosBotoesDeOneTwoFour();

    cy.get("#btn_one").should("not.be.visible");
    cy.get("#btn_two").should("not.be.visible");
    cy.get("#btn_link").should("not.be.visible");
  });
});
