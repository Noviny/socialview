class UserLogin < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :email, :string
    # add column :users, :password_digest, :text
    # add_column :users, :admin, :boolean
    # add_column :searches, :search, :text
  end
end
