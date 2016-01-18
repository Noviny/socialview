# == Schema Information
#
# Table name: hubs
#
#  id         :integer          not null, primary key
#  name       :string
#  latitude   :float
#  longitude  :float
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Hub < ActiveRecord::Base
end
