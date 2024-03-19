describe('template spec', () => {
  it('Header Check', () => {
    cy.viewport()
    cy.visit('')
    cy.get('#top-nav-bar.justify-content-center').find('h2').should('have.text','Months of Myanmar')
    cy.get('[data-test="carouselOne"] img')
    .eq(1)
    .invoke('attr','src')
    .then((src)=>{
      let initialSrc= src
      cy.get('[data-test="carouselOne"]')
          .trigger('mousedown', { button: 0 })
          .trigger('mousemove', { clientX: 100 })
          .trigger('mouseup')
          .wait(1000);

        cy.get('[data-test="carouselOne"] img')
          .eq(1)
          .invoke('attr', 'src')
          .should('eq', initialSrc);
    })
  })
})