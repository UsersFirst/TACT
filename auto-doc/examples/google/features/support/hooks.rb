
Before do |scenario|
  puts "Preparing to test that #{scenario.name}..."
end

Around do |scenario,block|
  start_time = Time.now
  block.call
  end_time = Time.now
  puts "#{scenario.name} #{scenario.status} after #{end_time - start_time} seconds."
end

After do |scenario|
  puts 'Scenario completed.'
end


at_exit do |scenario|
  puts "Testing completed at #{Time.now}"
  $driver.quit
end


load '../../rb/doc_hooks.rb'