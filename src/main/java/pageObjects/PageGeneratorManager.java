package pageObjects;

import org.openqa.selenium.WebDriver;

public class PageGeneratorManager {

	public static YourAddressPageObject getyourAddressPage(WebDriver driver) {
		return new YourAddressPageObject(driver);
	}
	public static AboutYourSelfPageObject getAboutSelfPage(WebDriver driver) {
		return new AboutYourSelfPageObject(driver);
	}
}
