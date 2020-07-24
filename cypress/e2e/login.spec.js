describe("when the user changes the url /login", () => {
  it("should navigate to the login page", () => {
    cy.visit("/login");
    cy.url().should("eql", "http://localhost:8080/login");
  });
  it("the email input should be visible", () => {
    cy.findByTestId("email").should("be.visible");
    // click on text area and can write in it and can login
  });
  it("the password input should be visible", () => {
    cy.findByTestId("password").should("be.visible");
    // click on text area and can write in it and can login
  });
});

describe("when the user clicks SignUp link", () => {
  it("should navigate to the signUp page", () => {
    cy.get("p > a").click();
    cy.url().should("include", "/sign-up");
  });
  it("should have username input available", () => {
    cy.findByTestId("username").should("be.visible");
  });
  it("should have email input available", () => {
    cy.findByTestId("email").should("be.visible");
  });
  it("should have a password input available", () => {
    cy.findByTestId("password").should("be.visible");
  });
});

describe("when the user logins", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.findByTestId("login").click();
  });
});
