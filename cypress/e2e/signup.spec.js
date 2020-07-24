describe("when the user is directed to the sign-up page /sign-up", () => {
  it("should navigate to the sign-up page", () => {
    cy.visit("/sign-up");
    cy.url().should("eql", "http://localhost:8080/sign-up");
  });
});

describe("the user is redirected back to the login page", () => {
  it("should return to the login page", () => {
    cy.get("p > a").click();
    cy.url().should("include", "/login");
  });
});

// describe("when a new user signs up", () => {});
