require 'cucumber_analytics'

class World
  
  def initialize(directory)
    @root = directory
    @directory = CucumberAnalytics::Directory.new(directory)
    @world = CucumberAnalytics::World
  end
  
  def world
    @world
  end
  
  def directory
    @directory
  end
  

  def json
    features_in(world).to_json
  end
  
  def features_in(world)
    object = {}
    world.features_in(directory).each do |feature|
      object[feature.name] = scenarios_in(feature)
    end
    object
  end
  
  def scenarios_in(feature)
    object = {}
    feature.scenarios.each do |scenario|
      object[scenario.name] = steps_in(scenario)
    end
    object
  end
  
  def steps_in(scenario)
    object = {}
    scenario_name = scenario.name.downcase.gsub(' ','_')
    scenario.steps.each_with_index do |step,index|
      object[step.base] = "./#{@root}/screenshots/#{scenario_name}/#{index.to_s}.png"
    end
    object
  end
  
end




