Feature: Login Functionality

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter username "student"
    And I enter password "Password123"
    And I click the submit button
    Then I should be redirected to the success page
    And I should see a message containing "Congratulations student. You successfully logged in!"

  Scenario: Login with invalid username
    Given I am on the login page
    When I enter username "incorrectUser"
    And I enter password "Password123"
    And I click the submit button
    Then I should see an error message "Your username is invalid!"

  Scenario: Login with invalid password
    Given I am on the login page
    When I enter username "student"
    And I enter password "incorrectPassword"
    And I click the submit button
    Then I should see an error message "Your password is invalid!"