$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Featear01.feature");
formatter.feature({
  "line": 1,
  "name": "Tell us about yoursefl",
  "description": "",
  "id": "tell-us-about-yoursefl",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the Tell us about yoursefl",
  "keyword": "Given "
});
formatter.match({
  "location": "AboutYourSelfPageSteps.open_the_tell_us_about_yoursefl()"
});
formatter.result({
  "duration": 13719349670,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Submit the form successfull",
  "description": "",
  "id": "tell-us-about-yoursefl;submit-the-form-successfull",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Enter the Fist Name is \"Truyen\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter the Last Name is \"Kieu\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter the email is \"kieuvantruyen21.3dfish@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the Date of birth is \"May\", \"25\" and \"1992\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter the Languages is \"VietNamese\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click Next Location button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I can see the next screen is \"Add your address\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Truyen",
      "offset": 24
    }
  ],
  "location": "AboutYourSelfPageSteps.enter_the_fist_name_is_something(String)"
});
formatter.result({
  "duration": 692352062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kieu",
      "offset": 24
    }
  ],
  "location": "AboutYourSelfPageSteps.enter_the_last_name_is_something(String)"
});
formatter.result({
  "duration": 128312968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kieuvantruyen21.3dfish@gmail.com",
      "offset": 20
    }
  ],
  "location": "AboutYourSelfPageSteps.enter_the_valid_email_is_something(String)"
});
formatter.result({
  "duration": 122908414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 29
    },
    {
      "val": "25",
      "offset": 36
    },
    {
      "val": "1992",
      "offset": 45
    }
  ],
  "location": "AboutYourSelfPageSteps.select_the_date_of_birth_is_something_something_and_something(String,String,String)"
});
formatter.result({
  "duration": 1649369532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VietNamese",
      "offset": 24
    }
  ],
  "location": "AboutYourSelfPageSteps.enter_the_languages_is_something(String)"
});
formatter.result({
  "duration": 478045167,
  "status": "passed"
});
formatter.match({
  "location": "AboutYourSelfPageSteps.i_click_next_location_button()"
});
formatter.result({
  "duration": 170588659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add your address",
      "offset": 30
    }
  ],
  "location": "YourAdressPageSteps.i_can_see_the_next_screen_is_something(String)"
});
formatter.result({
  "duration": 41464785,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Verify invalid email format",
  "description": "",
  "id": "tell-us-about-yoursefl;verify-invalid-email-format",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Enter the email is \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I see the \"\u003cerror\u003e\" displays",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "tell-us-about-yoursefl;verify-invalid-email-format;",
  "rows": [
    {
      "cells": [
        "email",
        "error"
      ],
      "line": 22,
      "id": "tell-us-about-yoursefl;verify-invalid-email-format;;1"
    },
    {
      "cells": [
        "truyen",
        "Enter valid email"
      ],
      "line": 23,
      "id": "tell-us-about-yoursefl;verify-invalid-email-format;;2"
    },
    {
      "cells": [
        "truyen@123",
        "Enter valid email"
      ],
      "line": 24,
      "id": "tell-us-about-yoursefl;verify-invalid-email-format;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the Tell us about yoursefl",
  "keyword": "Given "
});
formatter.match({
  "location": "AboutYourSelfPageSteps.open_the_tell_us_about_yoursefl()"
});
formatter.result({
  "duration": 3622131557,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify invalid email format",
  "description": "",
  "id": "tell-us-about-yoursefl;verify-invalid-email-format;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Enter the email is \"truyen\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I see the \"Enter valid email\" displays",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "truyen",
      "offset": 20
    }
  ],
  "location": "AboutYourSelfPageSteps.enter_the_valid_email_is_something(String)"
});
formatter.result({
  "duration": 2152493831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter valid email",
      "offset": 11
    }
  ],
  "location": "AboutYourSelfPageSteps.i_see_the_something_displays(String)"
});
formatter.result({
  "duration": 560967958,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open the Tell us about yoursefl",
  "keyword": "Given "
});
formatter.match({
  "location": "AboutYourSelfPageSteps.open_the_tell_us_about_yoursefl()"
});
formatter.result({
  "duration": 3004607602,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify invalid email format",
  "description": "",
  "id": "tell-us-about-yoursefl;verify-invalid-email-format;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Enter the email is \"truyen@123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I see the \"Enter valid email\" displays",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "truyen@123",
      "offset": 20
    }
  ],
  "location": "AboutYourSelfPageSteps.enter_the_valid_email_is_something(String)"
});
formatter.result({
  "duration": 1389228971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter valid email",
      "offset": 11
    }
  ],
  "location": "AboutYourSelfPageSteps.i_see_the_something_displays(String)"
});
formatter.result({
  "duration": 564000674,
  "status": "passed"
});
});