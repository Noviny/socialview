class User < ActiveRecord::Base
  has_many :searches
  has_secure_password
end
