class TheCountdown
  class << self
    def call(env)
      ['200', {'Content-Type' => 'text/html'}, response]
    end

    def response
      [ERB.new(index_template).result(binding)]
    end

    def index_template
      File.open('index.html.erb', 'r').read
    end
  end
end
