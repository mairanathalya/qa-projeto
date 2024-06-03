/// <reference types= "cypress" />
import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps"

Given("que o usuário está na página inicial do panorama", () => {
    cy.visit("https://censo2022.ibge.gov.br/panorama/")
})

