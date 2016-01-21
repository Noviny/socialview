#json.array!(@tweet) do |tweet|
#  json.extract! tweet, :hashtags, :geo
#  json.url tweet_url(tweet, format: :json)
#end


#json.array!(@tweets) do |tweets|
#  json.extract! tweets
#  json.tweets @tweets
#end

json.tweets @tweets