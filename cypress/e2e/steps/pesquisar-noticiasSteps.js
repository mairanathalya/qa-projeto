/// <reference types= "cypress" />
import { Given, When, Then, And }from "cypress-cucumber-preprocessor/steps"


Given("que o usuário está na página inicial do site Agência IBGE Notícias", ()  => {
    cy.visit("https://agenciadenoticias.ibge.gov.br/")
})

When("o usuário selecionar no menu a opção {string}", (linkText) => {
    cy.contains('li.item-6770.parent a', linkText).click();
})

And("o usuário selecionar a opção {string}", () => {
  // cy.get('.editoria-economicas > a').click()
})

Then("o usuário será redirecionado para a página de notícias relacionadas à estatísticas econômicas", () => {
    cy.visit("https://agenciadenoticias.ibge.gov.br/agencia-noticias.html?editoria=economicas")
    cy.get('.lista-noticias')
})
