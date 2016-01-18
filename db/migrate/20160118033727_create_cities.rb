class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :name
      t.string :country
      t.string :state

      t.timestamps null: false
    end
  end
  add_column :hubs, :city_id, :integer
end
