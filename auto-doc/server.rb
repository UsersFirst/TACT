require 'sinatra'
require './lib/world.rb'

set :port, 3000

get '/' do
  send_file 'public/index.html'
end

get '/*.*' do |filepath,extension|
  send_file "./public/#{filepath}.#{extension}"
end

get '/world' do
	content_type :json
	world = World.new('./examples/google')
	world.json
end
