class AddAnimateToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :animate, :string
  end
end
