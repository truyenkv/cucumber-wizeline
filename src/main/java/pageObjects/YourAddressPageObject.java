package pageObjects;

import common.AbstractPage;
import org.openqa.selenium.WebDriver;
import pageUI.YourAddressPageUI;


public class YourAddressPageObject extends AbstractPage{
	
	WebDriver driver;
	
	public YourAddressPageObject(WebDriver driver) {
		this.driver = driver;

	}

	public String getTitleIsDisplay() {
		waitForElementVisible(driver, YourAddressPageUI.STEP2_TITLE);
		return getElementText(driver, YourAddressPageUI.STEP2_TITLE);

	}
}
