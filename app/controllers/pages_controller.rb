class PagesController < ApplicationController
  before_action :set_page, only: [:show, :edit, :update, :destroy]
  before_action :check_if_admin, except: [:index, :test]

  # GET /pages
  # GET /pages.json
  def index
    @pages = Page.all
  end

  def test
    config = {
      consumer_key: "3LFlsaB9Pcu5CxunbbDMaSj0q",
      consumer_secret: "85pYc6Zj2X7Pro7fsq6O42XYR96uESoG6x6o4brv7vWVOZzqli",
      access_token: "5629842-WFWEexpyKZZdIOD8XF97TUwdczkMAlWV84xxaUcxR5",
      access_token_secret: "zm5HFu6LwhPljLzj0bqdvQe5tmbQkwd8JANTsxL2g2tco"
    }

    client = Twitter::REST::Client.new(config)

    @things = client.retweets
  end

  # GET /pages/1
  # GET /pages/1.json
  def show
  end

  # GET /pages/new
  def new
    @page = Page.new
  end

  # GET /pages/1/edit
  def edit
  end

  def info
  end

  # POST /pages
  # POST /pages.json
  def create
    @page = Page.new(page_params)

    respond_to do |format|
      if @page.save
        format.html { redirect_to @page, notice: 'Page was successfully created.' }
        format.json { render :show, status: :created, location: @page }
      else
        format.html { render :new }
        format.json { render json: @page.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pages/1
  # PATCH/PUT /pages/1.json
  def update
    respond_to do |format|
      if @page.update(page_params)
        format.html { redirect_to @page, notice: 'Page was successfully updated.' }
        format.json { render :show, status: :ok, location: @page }
      else
        format.html { render :edit }
        format.json { render json: @page.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pages/1
  # DELETE /pages/1.json
  def destroy
    @page.destroy
    respond_to do |format|
      format.html { redirect_to pages_url, notice: 'Page was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_page
      @page = Page.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def page_params
      params[:page]
    end

  def check_if_admin
    redirect_to root_path unless ( @current_user.present? && @current_user.admin? )
  end

end
