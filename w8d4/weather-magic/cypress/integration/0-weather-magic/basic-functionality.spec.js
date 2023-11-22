/// <reference types="cypress" />

describe("Basic flow tests for Weather Magic Project!", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("CurrentWeather should not be shown until they search for a city", () => {
    //
    cy.get(".Header").should("exist");
    cy.get(".CurrentWeather").should("not.exist");
  });

  it("CurrentWeather should appear if they search for a valid city", () => {
    cy.get(".Header").should("exist");

    cy.get(".CurrentWeather").should("not.exist");

    cy.get(".CityForm input").type("Montréal");
    cy.get(".CityForm button").click();

    cy.get(".CurrentWeather").should("exist");
  });

  it("CurrentWeather should not appear if they search for an invalid city", () => {
    cy.get(".Header").should("exist");

    cy.get(".CurrentWeather").should("not.exist");

    cy.get(".CityForm input").type("Potato");
    cy.get(".CityForm button").click();

    cy.get(".CurrentWeather").should("not.exist");
  });

  it("should load the app, then type in the form and then see a new button in city history", () => {
    cy.get(".CityForm input").type("Toronto");
    cy.get(".CityForm button").click();

    cy.get(".CityForm input").type("Dartmouth");
    cy.get(".CityForm button").click();

    cy.get(".CityHistory li").should("have.length", 2);
  });

  it("should load the app, then type in the form and then see a new button in city history if the city is not already there", () => {
    cy.get(".CityForm input").type("Toronto");
    cy.get(".CityForm button").click();

    cy.get(".CityForm input").type("Dartmouth");
    cy.get(".CityForm button").click();

    cy.get(".CityForm input").type("Toronto");
    cy.get(".CityForm button").click();

    cy.get(".CityHistory li").should("have.length", 2);
  });
});
