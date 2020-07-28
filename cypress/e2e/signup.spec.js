import { userBuilder } from "../support/generate";

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

// describe("the user is redirected back to the login page", () => {
//   it("should return to the login page", () => {
//     cy.get("p > a").click();
//     cy.url().should("include", "/login");
//   });
// });

describe("when a new user signs up with correct credentials", () => {
  it("should be redirected to /game and have a JWT token in localStorage", () => {
    const user = userBuilder();
    before(() => {
      cy.visit("/sign-up");
      cy.url().should("eql", "http://localhost:8080/sign-up");
    });
  });
  it("should see the Sign up page", () => {
    cy.get("h1").should("contain.text", "SignUp");
  });
  it("should see the correct form to fill out", () => {
    cy.findByLabelText(/username/i);
    cy.findByLabelText(/email/i);
    cy.findByLabelText(/password/i);
  });
  it("should fill the form out and be redirected to the /game age", () => {
    const user = userBuilder();
    cy.findByTestId(/username/).type(user.username);
    cy.findByTestId(/email/).type(user.email);
    cy.findByTestId(/password/).type(user.password);
    cy.get('[type="submit"]').click();
    cy.url().should("include", "/game");
    cy.window().its("localStorage.token").should("be.a", "string");
  });
});

// Test to direct to page after monster dies, have it dying naturally at 30s.

describe("should direct to death page after 30s", () => {
  it("should redirect to the death page", () => {
    cy.visit("/death", { timeout: 20000 });
  });
});
