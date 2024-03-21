
describe('books library test', () => {
	beforeEach(() => {
		cy.visit("/");
	})
	

	it.skip('should be login', () => {
		cy.login("test@test.com", "test");
		cy.contains('Добро пожаловать test@test.com').should('be.visible');
	})
	

	it.skip('test field email is empty', () => {
		cy.login(null, "test");
		cy.get('#mail').then((elements) => {
			expect(elements[0].checkValidity()).to.be.false;
			expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
		})
	})
	

	it.skip('test field password is empty', () => {
		cy.login("test@test.com", null);
		cy.get('#pass').then((elements) => {
			expect(elements[0].checkValidity()).to.be.false;
			expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
		})
	})


	it('test book add', () => {
		cy.login("bropet@mail.ru", "123");
		cy.book('Герой должен быть один',
			'Роман представляет собой переосмысление древнегреческих мифов о Геракле.',
			'Генри Лайон Олди');
	})

	it('test book content', () => {
		cy.login("bropet@mail.ru", "123");
		cy.book('Герой должен быть один',
			'Роман представляет собой переосмысление древнегреческих мифов о Геракле.',
			'Генри Лайон Олди');
		cy.contains('Герой должен быть один').click();
		cy.get('.col-md-7').should('be.visible');
	})


	it('test book add to favorite', () => {
		cy.login("bropet@mail.ru", "123");
		cy.book('Герой должен быть один',
			'Роман представляет собой переосмысление древнегреческих мифов о Геракле.',
			'Генри Лайон Олди');
		cy.contains('Add to favorite').click();
		cy.get('h4').click();
		cy.contains('Герой должен быть один').should('be.visible');
	})


	it('test book delete', () => {
		cy.login("test@test.com", "test");
		cy.book('Герой должен быть один',
			'Роман представляет собой переосмысление древнегреческих мифов о Геракле.',
			'Генри Лайон Олди');
		cy.contains('Add to favorite').click();
		cy.contains('Delete from favorite').should('be.visible');
		cy.contains('Delete from favorite').click();
		cy.contains('Add to favorite').should('be.visible');
	})

})