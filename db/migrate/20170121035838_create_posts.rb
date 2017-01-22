class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :input

      t.timestamps null: false
    end
  end
end
