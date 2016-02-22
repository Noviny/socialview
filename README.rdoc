##Team
* Angie
* Ben
* Colin
* Harry

##Problem
It is currently hard to map trends through social networks based on location.

##Solution
To answer this, we decided to make a map that showed posts on a particular tag on a global map, while also allowing more limited geosearches.


##Challenges
Our biggest challenges were the limits of what information we were going to get back from the API, and the way in which it allowed searches. Most specifically, we learned that tumblr allowed filtering by tag OR by location, but not both at once. Once our initial exploration discovered this, it was necessary to reconsider the way we were going to structure and display the information. We also needed to work to be able to deliver new data without overloading the limited number of API requests we were allowed to make in development mode.

In addition, this was the first project any of us had worked on that required collaborative coding, and we needed to resolve how to complete the largest amount within the timeframe by splitting our efforts, while still being able to come together as a team and integrate the components.

To approach this we held standups every morning, and kept a clear idea on what components and technologies everyone was working on throughout the project, and one person remained on hand as support personnel while also project-managing, to make sure different components were properly integrated.

##Technologies Used
* Rails
* Bootstrap
* Instagram API
* Twitter API through Twitter gem
* Google Maps API
* Moment.js
* Underscore.js
* Chart.js
