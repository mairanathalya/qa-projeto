/// <reference types= "cypress" />
import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"


Given("que o usuário está na página inicial do site do IBGE", () => {
    cy.visit('https://www.ibge.gov.br/')
})

When("o usuário clicar na seção {string}", (populacao) => {
    cy.get('.popclock-home').contains(populacao).click()
})

Then("o usuário será redirecionado para página do censo", () => {
    cy.visit("https://censo2022.ibge.gov.br/panorama/")
})

And("o usuário selecionar a opção {string}", (baixar) => {
    cy.get('.downloadContainer').contains(baixar).click()
})

And("o usuário escolher as opções de formato para baixar o arquivo", () => {
    cy.get('.downloadContainer >.downloadOpt >.downloadCSV')
    cy.get('.downloadContainer >.downloadOpt >.downloadXLSX')
    cy.get('.downloadContainer >.downloadOpt > #downloadAllPDF')
   
})

And("o usuário clicar na opção desejada", () =>{
    cy.get('.downloadContainer >.downloadOpt >.downloadCSV').click()
})

Then("o usuário deverá receber um arquivo com os dados populacionais", () =>{
    cy.get('#total-populacao-headline')
})