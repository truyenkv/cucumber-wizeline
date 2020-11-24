package cucumberOptions;

import common.GlobalConstant;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.UnreachableBrowserException;

import java.util.concurrent.TimeUnit;

public class Hooks {
    private static WebDriver driver;

    @Before
    public synchronized static WebDriver openAndQuitBrowser(){
        String browser = System.getProperty("BROWSER");
        if(driver == null){
            try {
                if(browser==null){
                    //set browser default
                    browser = "chrome";
                }
                switch (browser){
                    case "chrome":
                        WebDriverManager.chromedriver().version("86").setup();
                        driver = new ChromeDriver();
                        break;

                    case "firefox":
                        WebDriverManager.chromedriver().setup();
                        driver = new FirefoxDriver();
                        break;

                    case "edge":
                        WebDriverManager.edgedriver().setup();
                        driver = new EdgeDriver();
                        break;

                    default:
                        WebDriverManager.chromedriver().setup();
                        driver = new ChromeDriver();
                        break;
                }
            } catch (UnreachableBrowserException e){
                driver = new ChromeDriver();
            }
            finally {
                Runtime.getRuntime().addShutdownHook(new Thread(new BrowserCleanup()));
            }
//            driver.get(GlobalConstant.URL);
            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);


        }
        return driver;
    }

    private static void close(){
        try{
            if(driver!=null){
                openAndQuitBrowser().quit();
            }
        }catch (UnreachableBrowserException e){
            System.out.println("Can not close the browser");
        }
    }

    private static class BrowserCleanup implements Runnable{
        @Override
        public void run(){
            close();
        }
    }
}
