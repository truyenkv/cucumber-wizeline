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
  "duration": 8551861486,
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:48380\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027127.0.0.0\u0027, ip: \u00272405:4802:9197:2a50:a683:e7ff:fe7f:44cf%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat common.AbstractPage.openUrl(AbstractPage.java:34)\n\tat pageObjects.AboutYourSelfPageObject.openURL(AboutYourSelfPageObject.java:18)\n\tat stepDefinitions.AboutYourSelfPageSteps.open_the_tell_us_about_yoursefl(AboutYourSelfPageSteps.java:25)\n\tat ✽.Given Open the Tell us about yoursefl(Featear01.feature:4)\nCaused by: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:48380\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\n\tat okhttp3.RealCall.execute(RealCall.java:77)\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat common.AbstractPage.openUrl(AbstractPage.java:34)\n\tat pageObjects.AboutYourSelfPageObject.openURL(AboutYourSelfPageObject.java:18)\n\tat stepDefinitions.AboutYourSelfPageSteps.open_the_tell_us_about_yoursefl(AboutYourSelfPageSteps.java:25)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\nCaused by: java.net.ConnectException: Connection refused (Connection refused)\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:589)\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\n\t... 63 more\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "AboutYourSelfPageSteps.i_click_next_location_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "duration": 2382443,
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:48380\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027127.0.0.0\u0027, ip: \u00272405:4802:9197:2a50:a683:e7ff:fe7f:44cf%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat common.AbstractPage.openUrl(AbstractPage.java:34)\n\tat pageObjects.AboutYourSelfPageObject.openURL(AboutYourSelfPageObject.java:18)\n\tat stepDefinitions.AboutYourSelfPageSteps.open_the_tell_us_about_yoursefl(AboutYourSelfPageSteps.java:25)\n\tat ✽.Given Open the Tell us about yoursefl(Featear01.feature:4)\nCaused by: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:48380\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\n\tat okhttp3.RealCall.execute(RealCall.java:77)\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat common.AbstractPage.openUrl(AbstractPage.java:34)\n\tat pageObjects.AboutYourSelfPageObject.openURL(AboutYourSelfPageObject.java:18)\n\tat stepDefinitions.AboutYourSelfPageSteps.open_the_tell_us_about_yoursefl(AboutYourSelfPageSteps.java:25)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\nCaused by: java.net.ConnectException: Connection refused (Connection refused)\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:589)\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\n\t... 81 more\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "duration": 2715409,
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:48380\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027127.0.0.0\u0027, ip: \u00272405:4802:9197:2a50:a683:e7ff:fe7f:44cf%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat common.AbstractPage.openUrl(AbstractPage.java:34)\n\tat pageObjects.AboutYourSelfPageObject.openURL(AboutYourSelfPageObject.java:18)\n\tat stepDefinitions.AboutYourSelfPageSteps.open_the_tell_us_about_yoursefl(AboutYourSelfPageSteps.java:25)\n\tat ✽.Given Open the Tell us about yoursefl(Featear01.feature:4)\nCaused by: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:48380\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\n\tat okhttp3.RealCall.execute(RealCall.java:77)\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat common.AbstractPage.openUrl(AbstractPage.java:34)\n\tat pageObjects.AboutYourSelfPageObject.openURL(AboutYourSelfPageObject.java:18)\n\tat stepDefinitions.AboutYourSelfPageSteps.open_the_tell_us_about_yoursefl(AboutYourSelfPageSteps.java:25)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\nCaused by: java.net.ConnectException: Connection refused (Connection refused)\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:589)\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\n\t... 81 more\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
});