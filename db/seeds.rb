# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# DUMMY STORIES

Post.destroy_all

p1 = Post.create :input => "Tell me baby, what's your story? Where you come from and where you wanna go this time?"
p2 = Post.create :input => "Hey there blimpy boy, riding through the streets so fancy free~"
p3 = Post.create :input => "Once upon a time, there was a terrible, terrible story reappropriated by the Capitalist Disney corporation to perpetuate the patriarchy by brainwashing women from a young age."
p4 = Post.create :input => "Twinkle twinkle little star. How I wonder what you are. Up above the world so high. Like a diamond in the sky. Twinkle twinkle little star. How I wonder what you are."
p5 = Post.create :input => "One day thirteen people decided to make a most exciting, ground breaking life decision and found themselves in WDi18. Little did they know that this would be the beginning of the rest of their lives... #wolfpackforever"

puts "Post count: #{Post.all.count}"
