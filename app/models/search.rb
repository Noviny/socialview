# == Schema Information
#
# Table name: searches
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  search     :text
#

class Search < ActiveRecord::Base
  belongs_to :user
end
