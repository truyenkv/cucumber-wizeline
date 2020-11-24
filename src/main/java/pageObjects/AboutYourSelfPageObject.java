package pageObjects;

import common.AbstractPage;
import common.GlobalConstant;
import org.openqa.selenium.WebDriver;
import pageUI.AboutYourSelfPageUI;

public class AboutYourSelfPageObject extends AbstractPage {

	WebDriver driver;

	public AboutYourSelfPageObject(WebDriver driver) {
		this.driver = driver;

	}

	public void openURL() {
		openUrl(driver, GlobalConstant.URL);
	}

	public void enterFirstName(String firstName) {
		waitForElementVisible(driver, AboutYourSelfPageUI.FIRST_NAME_FIELD);
		sendKeyToField(driver, AboutYourSelfPageUI.FIRST_NAME_FIELD, firstName);
	}

	public void enterLastName(String lastName) {
		waitForElementVisible(driver, AboutYourSelfPageUI.LAST_NAME_FIELD);
		sendKeyToField(driver, AboutYourSelfPageUI.LAST_NAME_FIELD, lastName);
	}

	public void enterEmail(String email) {
		waitForElementVisible(driver, AboutYourSelfPageUI.EMAIL_FIELD);
		sendKeyToField(driver, AboutYourSelfPageUI.EMAIL_FIELD, email);
	}

	public YourAddressPageObject clickNextButton() {
		waitForElementClickable(driver, AboutYourSelfPageUI.NEXT_LOCATION_BUTTON);
		clickToElement(driver, AboutYourSelfPageUI.NEXT_LOCATION_BUTTON);
		return PageGeneratorManager.getyourAddressPage(driver);
	}

	public void enterDateOfBirth(String month, String date, String year) {
		waitForElementVisible(driver, AboutYourSelfPageUI.MONTH_DROP_DOWN);
		clickToElement(driver, AboutYourSelfPageUI.MONTH_DROP_DOWN);
		selectItemDropdownByText(driver, AboutYourSelfPageUI.MONTH_DROP_DOWN, month);
		clickToElement(driver, AboutYourSelfPageUI.DATE_DROP_DOWN);
		selectItemDropdownByText(driver, AboutYourSelfPageUI.DATE_DROP_DOWN, date);
		clickToElement(driver, AboutYourSelfPageUI.YEAR_DROP_DOWN);
		selectItemDropdownByText(driver, AboutYourSelfPageUI.YEAR_DROP_DOWN, year);
	}

	public void enterLanguague(String languages) {
		waitForElementVisible(driver, AboutYourSelfPageUI.LANGGUAGES_FIELD);
		sendKeyToField(driver, AboutYourSelfPageUI.LANGGUAGES_FIELD, languages);
	}

	public String getEmailError() {
		waitForElementVisible(driver, AboutYourSelfPageUI.EMAIL_ERROR);
		return getElementText(driver, AboutYourSelfPageUI.EMAIL_ERROR);
	}
}
