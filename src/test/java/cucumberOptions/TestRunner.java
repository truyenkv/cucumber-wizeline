package cucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/feature",
        glue = "stepDefinitions",
        monochrome = true,
        plugin = {"pretty", "html:target/site/cucumber-report-default", "json:target/site/cucumber.json"}

)
public class TestRunner {


}
