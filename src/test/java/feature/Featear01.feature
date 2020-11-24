Feature: Tell us about yoursefl

  Background:
    Given Open the Tell us about yoursefl

  Scenario: Submit the form successfull
    When Enter the Fist Name is "Truyen"
    And Enter the Last Name is "Kieu"
    And Enter the email is "kieuvantruyen21.3dfish@gmail.com"
    And Select the Date of birth is "May", "25" and "1992"
    And Enter the Languages is "VietNamese"
    When I click Next Location button
    Then I can see the next screen is "Add your address"


  Scenario Outline:  Verify invalid email format
    When Enter the email is "<email>"
    Then I see the "<error>" displays


    Examples:
      |email      | error|
      |truyen     |Enter valid email|
      |truyen@123|Enter valid email |


