require 'cucumber_analytics'

class World
  
  def initialize(directory)
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
    scenario.steps.each do |step|
      puts step.methods
      object[step.base] = nil
    end
    object
  end
  
end




