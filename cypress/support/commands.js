/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
	cy.contains('Log in').click();
	if (email)
		cy.get('#mail').type(email)
	if (password)
		cy.get('#pass').type(password);
	cy.contains('Submit').click();
})

Cypress.Commands.add('book', (name, discription, author) => {
	cy.get('.p-0 > .btn').click();
	cy.get('.modal-title').should('be.visible');
	if (name)
		cy.get('#title').type(name);
	if (discription)
		cy.get('#description').type(discription);
	if (author)
		cy.get('#authors').type(author);

	cy.get('form > .ml-2').click();
	cy.contains('Герой должен быть один').should('be.visible');

})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }