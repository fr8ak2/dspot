describe('Friends App', () => {
    it('should display the friends list and navigate to details', () => {
        cy.visit('/')

        cy.contains('Steph Walters').click()
        cy.url().should('include', '/friends/id')

        cy.contains('Steph Walters Details').should('be.visible')
        cy.contains('Status: At Work...').should('be.visible')
        cy.contains('Back to Friends List').click()

        cy.url().should('include', '/')
    })
})
