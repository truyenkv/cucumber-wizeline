package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumberOptions.Hooks;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObjects.AboutYourSelfPageObject;
import pageObjects.PageGeneratorManager;
import pageObjects.YourAddressPageObject;

public class YourAdressPageSteps {

    WebDriver driver;
    YourAddressPageObject yourAddressPageObject;
    public YourAdressPageSteps() {
        driver = Hooks.openAndQuitBrowser();
        yourAddressPageObject = PageGeneratorManager.getyourAddressPage(driver);
    }

    @Then("^I can see the next screen is \"([^\"]*)\"$")
    public void i_can_see_the_next_screen_is_something(String title){
        Assert.assertEquals(yourAddressPageObject.getTitleIsDisplay(), title);
    }

}
