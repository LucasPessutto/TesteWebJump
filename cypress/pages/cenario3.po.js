class Cenario3 {
  preencherCampoDePrimeiroNome() {
    cy.get("#first_name").type("Lucas");
  }

  pegarCliqueDoBotaoOne() {
    cy.get("#btn_one").click();
  }

  checarOptionThree() {
    cy.get("#opt_three").click();
  }

  selecionarExampleTwo() {
    cy.get("#select_box").select("ExampleTwo");
  }
}

export default new Cenario3();
