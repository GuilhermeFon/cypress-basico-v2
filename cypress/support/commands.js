Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
  cy.get('#firstName').type('Guilherme')
  cy.get('#lastName').type('Fonseca')
  cy.get('#email').type('guilhermefonseca@gmail.com')
  cy.get('#open-text-area').type('teste')
  cy.get('button[type="submit"]').click()
})