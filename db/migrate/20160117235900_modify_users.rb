class ModifyUsers < ActiveRecord::Migration
  def change
    add_column :users, :admin, :boolean
    add_column :searches, :search, :text
    add_column :users, :password_digest, :text
  end
end
