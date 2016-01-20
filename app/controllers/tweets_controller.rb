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
    things.each do |t|
      @tweets.push(t) if t.geo?
    end


    # @url = "https://api.twitter.com/1/statuses/oembed.json?url=https://twitter.com/Interior/status/" + @tweet.id.to_s
  end
end
