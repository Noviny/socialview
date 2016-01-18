class HubsController < ApplicationController

  def index
    @hubs = Hub.all
  end

end