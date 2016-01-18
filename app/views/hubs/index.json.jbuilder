json.array!(@hubs) do |hub|
  json.extract! hub, :id, :name, :latitude, :longitude
  json.url hub_url(hub, format: :json)
end
