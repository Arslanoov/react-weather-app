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

  it('searches', () => {
    cy.visit('/search');
    cy.get('.ant-tabs-tab').should('have.length', 3);
    cy.contains('.search-form__submit span', 'Search');

    cy.get('.ant-tabs-tab').eq(0).click();
    cy.get('.ant-tabs-tab').eq(1).click();
    cy.get('.ant-tabs-tab').eq(2).click();

    cy.get('.search-form__submit').click();
    /* cy.wrap(cy.contains('.Toastify__close-button'), {
      timeout: 15000,
    }).should((someFunction) => expect(someFunction()).to.eq(true)); */
  });

  it('visits settings page', () => {
    cy.visit('/settings');
    cy.get('.settings__item').should('have.length', 2);
  });
});
