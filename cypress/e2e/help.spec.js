describe("takes user to the help page", () => {
  it("takes them to /help", () => {
    cy.visit("/help");
    cy.get("div > :nth-child(2)").should("contain.text", "POJOmon");
  });
});
