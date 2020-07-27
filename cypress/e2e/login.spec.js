import { userBuilder } from "../support/generate";

// Testing the page has all the correct information and inputs on it

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

// Testing a user clicking on the SignUp link at the bottom of the page, and redirecting to "/sign-up" using faker as well

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
  it("should be able to type into email and password inputs", () => {
    const { email, password } = userBuilder();
    // cy.findByLabelText(/username/i)
    //   .type(username)
    // .should("contain.value", username); ***************** ASK ABOUT USING THE USERNAME
    cy.findByLabelText(/email/i).type(email).should("contain.value", email);
    cy.findByLabelText(/password/i)
      .type(password)
      .should("contain.value", password);
  });
});

// Testing login with username and password from the Rails backend

describe("with the correct login credentials, user can login ", () => {
  before(() => {
    cy.fixture("user.json").then((user) => {
      cy.visit("/login");
      cy.findByLabelText(/email/i).type(user.email);
      cy.findByLabelText(/password/i).type(user.password);
    });
  });

  it("should be able to click on the submit and be navigated to the /game page", () => {
    cy.get("form").submit();
    cy.url().should("eql", "http://localhost:8080/game");
  });
});

describe("be logged in and click on the attributes buttons", () => {
  beforeEach(() => {
    cy.fixture("user.json").then((user) => {
      cy.visit("/game");
      // cy.findByLabelText(/email/i).type(user.email);
      // cy.findByLabelText(/password/i).type(user.password);
    });
  });

  // do these go in game spec?
  it("should click the POOP attribute and have the emoji move up", () => {
    cy.get(":nth-child(16) > button").click();
    // .find("img")
    // .should("have.length", 4);
  });
  it("should click on the HEAL attribute and have the emoji move up", () => {
    cy.get(":nth-child(17) > button").click();
  });
});

// beforeEach(() => {
//   cy.visit("/game");
//   cy.findByTestId("login").click();
// });
