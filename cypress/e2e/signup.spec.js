describe("when the user is directed to the sign-up page /sign-up", () => {
  it("should navigate to the sign-up page", () => {
    cy.visit("/sign-up");
    cy.url().should("eql", "http://localhost:8080/sign-up");
  });
});

// describe("the user should be directed to the signUp page", () => {
//   it("should click the signUp and redirect", () => {
//     cy.
//   })
// })

describe("the user should be able to see the correct form to fill out", () => {
  it("should see the Username form input", () => {
    cy.findByTestId("username").should("be.visible");
  });
  it("should see the email form input", () => {
    cy.findByTestId("email").should("be.visible");
  });
  it("should see the password form input", () => {
    cy.findByTestId("password").should("be.visible");
  });
});

describe("the user is redirected back to the login page", () => {
  it("should return to the login page", () => {
    cy.get("p > a").click();
    cy.url().should("include", "/login");
  });
});

// describe("when a new user signs up", () => {});
