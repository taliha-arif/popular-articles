describe("Article List", () => {
  it("should display a list of articles", () => {
    cy.visit("/");
    cy.contains("Most Popular Articles");
  });

  it("should navigate to article detail", () => {
    cy.visit("/");
    cy.get("a").first().click();
    cy.url().should("include", "/article");
  });
});
