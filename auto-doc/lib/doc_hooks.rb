# This file should be placed in the features/support directory and included in hooks.rb

# $doc_driver must be set to an active instance of selenium webdriver.

# Output will be written to /auto_doc_output


Before('@auto_doc') do |scenario|
	$auto_doc_step_index = 0
end

  
AfterStep('@auto_doc') do |scenario|
	scenario_name = scenario.name.downcase.gsub(' ','_')
	screenshot_dir = './screenshots'
	scenario_dir = screenshot_dir + '/' + scenario_name
	screenshot_filename = $auto_doc_step_index.to_s + '.png'
	Dir.mkdir(screenshot_dir) unless Dir.exists?(screenshot_dir)
	Dir.mkdir(scenario_dir) unless Dir.exists?(scenario_dir)
	screenshot_path = scenario_dir + '/' + screenshot_filename
	$doc_driver.save_screenshot screenshot_path
	$auto_doc_step_index += 1
end
  
