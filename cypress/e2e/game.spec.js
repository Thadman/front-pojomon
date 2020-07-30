describe("visit /game from login", () => {
  it("takes user to the monster page", () => {
    cy.visit("/game");
  });
});

describe("the correct NAVBAR must be seen with correct options", () => {
  it("should have the ability to go to the HELP page", () => {
    cy.get('[href="/help"]').click();
    cy.url().should("include", "/help");
  });
  it("should have the ability to go to the LOGIN page", () => {
    cy.get("[data-testId=login]").click();
    cy.url().should("include", "/login");
  });
  it("should have LOGOUT button taken them to login page", () => {
    cy.get("span").click();
    cy.url().should("include", "/login");
  });
});

describe("be logged in and click on the attributes buttons", () => {
  beforeEach(() => {
    cy.fixture("user.json").then((user) => {
      cy.visit("/game");
    });
  });

  it("should click the POOP attribute and have the emoji move up", () => {
    cy.get(":nth-child(16) > button").click();
  });
  it("should click on the HEAL attribute and have the emoji move up", () => {
    cy.get(":nth-child(17) > button").click();
  });
  it("should click the FOOD attrbutr", () => {
    cy.get(":nth-child(15) > :nth-child(1)").click();
  });
  it("should click the VITAMIN attrbutr", () => {
    cy.get(":nth-child(15) > :nth-child(2)").click();
  });
});
