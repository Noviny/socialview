# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  name            :string
#  email           :string
#  admin           :boolean
#  password_digest :text
#

class User < ActiveRecord::Base
  has_many :searches
  has_secure_password
end
