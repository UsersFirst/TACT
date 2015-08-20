# This file should be placed in the features/support directory and included in hooks.rb

# $doc_driver must be set to an active instance of selenium webdriver.

# Output will be written to /auto_doc_output



  
AfterStep('@auto_doc') do |scenario|
  output_dir = '../../auto_doc_output'
  screenshot_dir = output_dir + '/screenshots'
  Dir.mkdir(output_dir) unless Dir.exists?(output_dir)
  Dir.mkdir(screenshot_dir) unless Dir.exists?(screenshot_dir)
  screenshot_filename = scenario.name.downcase.gsub(' ','_') + '.png'
  screenshot_path = screenshot_dir + '/' + screenshot_filename
  $doc_driver.save_screenshot screenshot_path
end
  
