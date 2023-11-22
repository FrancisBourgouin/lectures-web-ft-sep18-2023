/// <reference types="cypress" />

describe("Basic tests for Weather Magic Project!", () => {
  it("can load the homepage", () => {
    cy.visit("/");
  });
  it("shows the weather magic title", () => {
    cy.visit("/");

    cy.get("h1").should("have.text", "Weather Magic!");
    cy.contains("Telling you the weather since November 09 2023").should("exist");
  });
});
