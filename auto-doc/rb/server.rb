require 'sinatra'
require './world.rb'

set :port, 1234

get '/' do
  send_file '../public/html/index.html'
end

get '/*.*' do |filepath,extension|
  send_file "../public/#{filepath}.#{extension}"
end

get '/world' do
	puts 'world!'
	content_type :json
	world = World.new('../examples/google')
	world.json
end
