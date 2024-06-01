/// <reference types= "cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"


Given("que o usuário está na página inicial do site do IBGE", () => {
    cy.visit('https://www.ibge.gov.br/')
})

When("o usuário clicar na seção {string}", (populacao) => {
    cy.get('.popclock-home').contains(populacao).click()
})

Then("o usuário será redirecionado para a página de informações populacionais", () => {
    cy.visit("https://censo2022.ibge.gov.br/panorama/")
})