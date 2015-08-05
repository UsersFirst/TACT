require 'sinatra'

set :port, 1234

get '/' do
  send_file '../public/html/index.html'
end

get '/*.*' do |filepath,extension|
  send_file "../public/#{filepath}.#{extension}"
end