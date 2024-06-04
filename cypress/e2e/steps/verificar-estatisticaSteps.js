/// <reference types="cypress"/>
import { Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("que o usuário está na página inicial do site do IBGE", () => {
    cy.visit("https://www.ibge.gov.br/")
})

When("o usuário selecionar o menu", () => {
    cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #nav-toggle').click()
})

And("o usuário selecionar a opção {string}", (estatistica) => {
    cy.get('[idmenu="1"] > :nth-child(1)').contains(estatistica).click()
})

And("o usuário selecionar a opção {string}", (sociais) => {
    cy.get('[style="display: block;"] > .parent.nvcls_ > .nav-header').contains(sociais).click()
})

And("o usuário selecionar a opção {string}", (populacao) => {
    cy.get('[idmenu="3"] > .header').contains(populacao).click()
})

Then("o usuário será redirecionado para a página de estatísticas populacionais", () => {
    cy.get('.conteudo__interna__titulo > h2')
})