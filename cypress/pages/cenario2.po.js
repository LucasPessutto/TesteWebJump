class Cenario2 {
  pegarCliqueDosBotoesDeOneTwoFour() {
    cy.get("#btn_one").click();
    cy.get("#btn_two").click();
    cy.get("#btn_link").click();
  }
}

export default new Cenario2();
