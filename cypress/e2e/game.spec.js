describe("visit /game from login", () => {
  it("takes user to the monster page", () => {
    cy.visit('[href="/game"]');
  });
});
