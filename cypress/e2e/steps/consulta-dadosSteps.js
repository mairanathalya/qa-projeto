/// <reference types= "cypress" />
import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps"

Given("que o usuário está na página de informações populacionais do IBGE", () => {
    cy.visit('https://www.ibge.gov.br/')
})