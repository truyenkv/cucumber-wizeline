package common;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.TimeUnit;

public abstract class AbstractPage {

	private Alert alert;
	private WebDriverWait explicitWait;
	private WebElement element;
	private Select select;
	private JavascriptExecutor jsExecutor;
	private long longTimeOut = 30;
	private short shortimeOut = 10;
	private List<WebElement> elements;
	private Actions action;
	protected final Log log;
	
	protected AbstractPage() {
		log = LogFactory.getLog(getClass());
	}

	public void openUrl(WebDriver driver, String url) {
		driver.get(url);
	}

	public void setImplicitWait(WebDriver driver) {
		driver.manage().timeouts().implicitlyWait(longTimeOut, TimeUnit.SECONDS);
	}






	// return element
	public WebElement find(WebDriver driver, String xpathValue) {
		return driver.findElement(byXpath(xpathValue));
	}

	// return list element
	public List<WebElement> finds(WebDriver driver, String xpathValue) {
		return driver.findElements(byXpath(xpathValue));
	}

	// find with list Element
	public List<WebElement> finds(WebDriver driver, String xpathValue, String value) {
		return driver.findElements(byXpath(getDynamicLocator(xpathValue, value)));
	}

	// return by with xpath
	public By byXpath(String xpathValue) {
		return By.xpath(xpathValue);
	}

	public void clickToElement(WebDriver driver, String xpathValue) {
		find(driver, xpathValue).click();
	}


	// return getDynamicLocator
	public String getDynamicLocator(String xpathValue, String... value) {
		return String.format(xpathValue, (Object[]) value);
	}



	public void sendKeyToField(WebDriver driver, String xpathValue, String text) {
		element = find(driver, xpathValue);
		element.clear();
		element.sendKeys(text);
	}


	public void selectItemDropdownByText(WebDriver driver, String xpathValue, String valueSelect) {
		select = new Select(find(driver, xpathValue));
		select.selectByVisibleText(valueSelect);
	}



	public void sleepInSecond(int sec) {
		try {
			Thread.sleep(sec * 1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}





	public String getElementText(WebDriver driver, String xpathValue) {
		return find(driver, xpathValue).getText();
	}




	public void waitForElementVisible(WebDriver driver, String xpathValue) {
		explicitWait = new WebDriverWait(driver, longTimeOut);
		explicitWait.until(ExpectedConditions.visibilityOfElementLocated(byXpath(xpathValue)));
	}



	public void waitForElementClickable(WebDriver driver, String xpathValue) {
		explicitWait = new WebDriverWait(driver, longTimeOut);
		explicitWait.until(ExpectedConditions.elementToBeClickable(byXpath(xpathValue)));
	}









}
