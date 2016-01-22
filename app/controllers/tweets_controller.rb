class TweetsController < ApplicationController
  def index
    config = {
      consumer_key: "3LFlsaB9Pcu5CxunbbDMaSj0q",
      consumer_secret: "85pYc6Zj2X7Pro7fsq6O42XYR96uESoG6x6o4brv7vWVOZzqli",
      access_token: "5629842-WFWEexpyKZZdIOD8XF97TUwdczkMAlWV84xxaUcxR5",
      access_token_secret: "zm5HFu6LwhPljLzj0bqdvQe5tmbQkwd8JANTsxL2g2tco",
    }

    client = Twitter::REST::Client.new(config)

    things = client.search("a", geocode: '37.781157,-122.398720,1mi', result_type: "recent").take(10)
    @tweets = []
    
    raise 'questions'
    things.each do |t|
      @tweets.push(t) if t.geo?
    end
  end

  def search
    config = {
      consumer_key: "3LFlsaB9Pcu5CxunbbDMaSj0q",
      consumer_secret: "85pYc6Zj2X7Pro7fsq6O42XYR96uESoG6x6o4brv7vWVOZzqli",
      access_token: "5629842-WFWEexpyKZZdIOD8XF97TUwdczkMAlWV84xxaUcxR5",
      access_token_secret: "zm5HFu6LwhPljLzj0bqdvQe5tmbQkwd8JANTsxL2g2tco",
    }

    client = Twitter::REST::Client.new(config)

    searchingFor = params[:searchVal]

    things = client.search(searchingFor, geocode: '-33.86,151.20,20km', result_type: "recent").take(50)

    @tweets = []
    things = things.each do |thing|
      if thing.geo?
        url = thing.url.to_s
        thing = thing.to_hash
        thing[:url] = url
        @tweets.push(thing)
      end
    end
  end

  def embed
    config = {
      consumer_key: "3LFlsaB9Pcu5CxunbbDMaSj0q",
      consumer_secret: "85pYc6Zj2X7Pro7fsq6O42XYR96uESoG6x6o4brv7vWVOZzqli",
      access_token: "5629842-WFWEexpyKZZdIOD8XF97TUwdczkMAlWV84xxaUcxR5",
      access_token_secret: "zm5HFu6LwhPljLzj0bqdvQe5tmbQkwd8JANTsxL2g2tco",
    }

    client = Twitter::REST::Client.new(config)

    # @tweet = params[tweetid]
    puts params[:twitID]
    things = client.oembed(params[:twitID])
    @tweet = things.html

  end

end
