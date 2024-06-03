/// <reference types= "cypress" />
import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"


Given("que o usuário está na página inicial do site do panorama", () => {
    cy.visit("https://censo2022.ibge.gov.br/panorama/")
})

When("o usuario clicar na opção {string}", () => {
    cy.get('.downloadContainer').click()
})

And("o usuário fizer o download com o formato {string}", () => {
    cy.get('.downloadContainer > .downloadOpt > #downloadAllPDF').click()
})

Then("o usuário deverá receber um arquivo com os dados populacionais", () => {
    
})
