/// <reference types="cypress"/>
import { Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("que o usuário está na página inicial do site do IBGE", () => {
    cy.visit("https://www.ibge.gov.br/")
})

When("o usuário selecionar o menu", () => {
    cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #nav-toggle').click()
})

And("o usuário selecionar a opção {string}", (headerText) => {
    cy.get('[idmenu="1"] > :nth-child(1)').click()
})

And("o usuário selecionar a opção {string}", () => {
    cy.get('[style="display: block;"] > .parent.nvcls_ > .nav-header').click({force: true})
})

And("o usuário selecionar a opção {string}", () => {
    cy.get('[idmenu="3"] > .header').click({force: true})
})

Then("o usuário será redirecionado para a página de estatísticas populacionais", () => {
    cy.visit("https://www.ibge.gov.br/estatisticas/sociais/populacao.html")
    cy.get('.box--cinza > .largura-maxima > .conteudo__interna__containercaixa > :nth-child(2) > .tit-pesquisa > .productTitle')
})