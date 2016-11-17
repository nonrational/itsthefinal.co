require 'rack'
require './the_countdown'

map "/assets/" do
  use Rack::Static, urls: [""], root: File.expand_path('./assets')
  run lambda {}
end

run TheCountdown
