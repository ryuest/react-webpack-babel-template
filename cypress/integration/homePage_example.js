context('Navigation Test Home Page', () => {
    beforeEach(() => {
        cy.visit('https://sports.williamhill.com/betting/en-gb')
          })
    it('Click in-play Football', () => {
        // https://on.cypress.io/go
    cy.get('#nav-in-play').get('a[href="/betting/en-gb/football"]').contains('Football').click()
    }) 
})