When(/^I type "([^"]*)" in the google search box$/) do |text|
  $driver.find_element(:css,'#lst-ib').send_keys text
end

And(/^I submit my search$/) do
  $driver.find_element(:css,'#lst-ib').submit
end

And(/^I select the first google result$/) do
  $driver.find_element(:css,'#search a').click
end

Then(/^about "([^"]*)" results are returned in "([^"]*)" seconds$/) do |results,time|
  text = $driver.find_element(:css,'#resultStats').text
  raise ('Expected results were not met') unless text.include?(results)
  raise ('Expected time was not met') unless text.include?(time)
end