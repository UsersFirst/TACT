Given(/^I visit "([^"]*)"$/) do |url|
  $driver.navigate.to url
end

And(/^I wait for "([^"]*)" seconds$/) do |seconds|
  sleep seconds.to_f
end

Then(/^the current url includes "([^"]*)"$/) do |url|
  raise('Unexpected url.') unless $driver.current_url.include?(url)
end