User.destroy_all

u1 = User.create :name => 'Noviny', :email => 'ben@mail.com', :password => 'ben', :password_confirmation => 'ben', :admin => true
u2 = User.create :name => 'Angie', :email => 'angie@mail.com', :password => 'angie', :password_confirmation => 'angie', :admin => true
u3 = User.create :name => 'Colin', :email => 'colin@mail.com', :password => 'colin', :password_confirmation => 'colin', :admin => true
u4 = User.create :name => 'Harry', :email => 'harry@mail.com', :password => 'harry', :password_confirmation => 'harry', :admin => true

Hub.destroy_all
h1 = Hub.create :name => 'Inner Sydney', :latitude => -33.86, :longitude => 151.20
h3 = Hub.create :name => 'Parramatta', :latitude => -33.81, :longitude => 151.00
h6 = Hub.create :name => 'Manly', :latitude => -33.79, :longitude => 151.28
h7 = Hub.create :name => 'Melbourne CBD', :latitude => -37.81, :longitude => 144.96
h8 = Hub.create :name => 'St Kilda', :latitude => -37.860116, :longitude => 144.977633
h9 = Hub.create :name => 'Moonee Valley', :latitude => -37.766800, :longitude => 144.920670
h10 = Hub.create :name => 'Frankston', :latitude => -38.144631, :longitude => 145.123741
h11 = Hub.create :name => 'Geelong', :latitude => -38.151789, :longitude => 144.355338
h12 = Hub.create :name => 'Brisbane CBD', :latitude => -27.467749, :longitude => 153.028097
h13 = Hub.create :name => 'Ipswich', :latitude => -27.610086, :longitude => 152.760001
h14 = Hub.create :name => 'Logan City', :latitude => -27.641978, :longitude => 153.117363
h15 = Hub.create :name => 'Redcliffe', :latitude => -27.229798, :longitude => 153.115255
h16 = Hub.create :name => 'Adeliade CBD', :latitude => -34.926310, :longitude => 138.599203
h17 = Hub.create :name => 'Adeliade Uni', :latitude => -34.920144, :longitude => 138.606260

City.destroy_all

c1 = City.create :name => 'Sydney', :state => 'NSW', :country => 'Australia'
c2 = City.create :name => 'Melbourne', :state => 'VIC', :country => 'Australia'
c3 = City.create :name => 'Brisbane', :state => 'QLD', :country => 'Australia'
c4 = City.create :name => 'Adeliade', :state => 'SA', :country => 'Australia'

c1.hubs << h1 << h2 << h3 << h4 << h5 << h6
c2.hubs << h7 << h8 << h9 << h10 << h11
c3.hubs << h12 << h13 << h14 << h15
c4.hubs << h16 << h17
