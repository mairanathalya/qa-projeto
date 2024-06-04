/// <reference types= "cypress" />
import { Given, When, Then, And }from "cypress-cucumber-preprocessor/steps"


Given("que o usuário está na página inicial do site Agência IBGE Notícias", ()  => {
    cy.visit("https://agenciadenoticias.ibge.gov.br/")
})

When("o usuário selecionar no menu a opção {string}", () => {
    cy.get('.item-6770 > a').click()
})

And("o usuário selecionar a opção {string}", () => {
    cy.get('.editoria-economicas > a').click()
})

Then("o usuário será redirecionado para a página de notícias relacionadas à estatísticas econômicas", () => {
    cy.get('.lista-noticias')
})
