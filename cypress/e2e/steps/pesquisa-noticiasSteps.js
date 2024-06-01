/// <reference types= "cypress" />
import { Given, When, Then, And }from "cypress-cucumber-preprocessor/steps"


Given("que o usuário está na página inicial do site do IBGE", () => {
    cy.visit('https://www.ibge.gov.br/')
})

When("o usuário clicar na seção {string}", (agenciaNoticias) => {
    cy.get('#section_noticias > :nth-child(1) > a').contains(agenciaNoticias).click()
})

Then("o usuário será redirecionado para página agência de notícias", () => {
    cy.visit("https://agenciadenoticias.ibge.gov.br/")
})





