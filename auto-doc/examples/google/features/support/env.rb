require 'selenium-webdriver'
require 'cucumber'

# This would be used throughout the test statck
$driver = Selenium::WebDriver.for :chrome

# This would only be used by auto_doc
$doc_driver = $driver