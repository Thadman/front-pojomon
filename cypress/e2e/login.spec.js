describe("when the user changes the url /login", () => {
  it("should navigate to the login page", () => {
    cy.visit("/login");
    cy.get("h1").should("contain.text", "Login");
    cy.get('[href="/game"]').click();
    cy.url().should("eql", "http://localhost:8080/game");
  });
});
