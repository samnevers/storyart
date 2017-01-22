# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  input      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ActiveRecord::Base
end
