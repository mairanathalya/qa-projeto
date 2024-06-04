/// <reference types= "cypress" />
import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps"

Given("que o usuário está na página inicial do panorama", () => {
    cy.visit("https://censo2022.ibge.gov.br/panorama/")
})

When("o usuario selecionar o campo de busca {string}", () => {
    cy.get('[data-select2-id="225"] > .selection > .select2-selection > #select2-autocomplete-container').click()
})

And(" o usuário selecionar a opção {string}", () => {
    cy.get('[data-select2-id="12040"]').click()
})

Then("o usuário deverá ver os dados populacionais pesquisado", () => {
    cy.get('#total-populacao-headline')
})
