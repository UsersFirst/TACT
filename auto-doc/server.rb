require 'sinatra'
require './lib/world.rb'

directory = './examples/google'

set :port, 3000

get '/' do
	send_file 'public/index.html'
end

get '/*.*' do |filepath,extension|
	filename = "#{filepath}.#{extension}"
	if File.exists?(filename)
		puts "Sending file : #{filename}"
		send_file "#{filepath}.#{extension}"
	else
		puts "Failed to find file : #{filename}"
	end


	
end

get '/world' do
	content_type :json
	world = World.new(directory)
	world.json
end


