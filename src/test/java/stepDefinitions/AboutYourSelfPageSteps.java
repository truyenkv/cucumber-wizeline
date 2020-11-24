package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumberOptions.Hooks;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObjects.PageGeneratorManager;
import pageObjects.AboutYourSelfPageObject;

public class AboutYourSelfPageSteps {

    WebDriver driver;

    AboutYourSelfPageObject aboutYourSelfPageObject;
    public AboutYourSelfPageSteps() {
        driver = Hooks.openAndQuitBrowser();
        aboutYourSelfPageObject = PageGeneratorManager.getAboutSelfPage(driver);
    }

    @Given("^Open the Tell us about yoursefl$")
    public void open_the_tell_us_about_yoursefl(){
        aboutYourSelfPageObject.openURL();
    }

    @When("^Enter the Fist Name is \"([^\"]*)\"$")
    public void enter_the_fist_name_is_something(String firstName) {
        aboutYourSelfPageObject.enterFirstName(firstName);
    }

    @When("^I click Next Location button$")
    public void i_click_next_location_button() {
        aboutYourSelfPageObject.clickNextButton();
    }

    @And("^Enter the Last Name is \"([^\"]*)\"$")
    public void enter_the_last_name_is_something(String lastName) {
        aboutYourSelfPageObject.enterLastName(lastName);
    }

    @And("^Enter the email is \"([^\"]*)\"$")
    public void enter_the_valid_email_is_something(String email)  {
        aboutYourSelfPageObject.enterEmail(email);
    }

    @And("^Select the Date of birth is \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
    public void select_the_date_of_birth_is_something_something_and_something(String month, String date, String year) throws Throwable {
        aboutYourSelfPageObject.enterDateOfBirth(month, date, year);
    }

    @And("^Enter the Languages is \"([^\"]*)\"$")
    public void enter_the_languages_is_something(String languages){
        aboutYourSelfPageObject.enterLanguague(languages);
    }


    @Then("^I see the \"([^\"]*)\" displays$")
    public void i_see_the_something_displays(String error){
        Assert.assertEquals(aboutYourSelfPageObject.getEmailError(), error);
    }

}
