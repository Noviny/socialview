class TweetsController < ApplicationController
  def index


    things = client.search("a", geocode: '37.781157,-122.398720,1mi', result_type: "recent").take(10)
    @tweets = []
    things.each do |t|
      @tweets.push(t) if t.geo?
    end
  end

  def search
    config = {
      consumer_key: ENV['consumer_key'],
      consumer_secret: ENV['consumer_key'],
      access_token: ENV['twitter_access_token'],
      access_token_secret: ENV['access_token_secret'],
    }

    client = Twitter::REST::Client.new(config)

    searchingFor = params[:searchVal]

    things = client.search(searchingFor, geocode: '-33.86,151.20,20km', result_type: "recent").take(50)
    @tweets = []
    things.each do |t|
      @tweets.push(t) if t.geo?
    end

  end

  def embed
    config = {
      consumer_key: ENV['consumer_key'],
      consumer_secret: ENV['consumer_key'],
      access_token: ENV['twitter_access_token'],
      access_token_secret: ENV['access_token_secret'],
    }

    client = Twitter::REST::Client.new(config)

    # @tweet = params[tweetid]

    things = client.oembed("250075927172759552")
    @tweet = things.html

  end

end
