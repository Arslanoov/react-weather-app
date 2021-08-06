describe('As Guest', () => {
  it('visit home page', () => {
    cy.visit('/');
    cy.contains('.header__title', 'Weather App');
    cy.contains('.footer__author', 'Created by Arslanoov');
  });

  it('toggle sidebar', () => {
    cy.visit('/');
    cy.get('.ant-layout-sider').should('have.class', 'ant-layout-sider-collapsed');
    cy.get('.header__trigger').click();
    cy.get('.ant-layout-sider').should('not.have.class', 'ant-layout-sider-collapsed');
    cy.get('.header__trigger').click();
    cy.get('.ant-layout-sider').should('have.class', 'ant-layout-sider-collapsed');
  });
});
