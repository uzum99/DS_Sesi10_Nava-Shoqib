@digital-skola @login
Feature: Swag Labs - login
  Background: User on the login page
    Given Nava is on the login page

  @positive
  Scenario: As a standard_user, I want to login succesfully
    When Nava login with "standard_user" credential
    Then Nava should see home page

  @negative
  Scenario: As a locked_out_user, I want to login succesfully
    When Nava login with "locked_out_user" credential
    Then Nava should see error "Epic sadface: Sorry, this user has been locked out."