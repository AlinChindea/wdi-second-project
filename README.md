
![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)
# Bike a'River

##Intro


![screen shot 2018-01-19 at 10 43 11 am](https://user-images.githubusercontent.com/29477363/35147188-9d0f04ae-fd05-11e7-9576-894709819531.png)


![screen shot 2018-01-19 at 10 37 58 am](https://user-images.githubusercontent.com/29477363/35147135-6ecbb47a-fd05-11e7-8b5c-74dc2ea19292.png)

'Bike a'River' is the title of my second web development course project, combining front and backend dependencies. The idea was born out of the annual trips I take with two of my friends: we bike along a river from its source to either the end of it or until it becomes a full-fledged river. Every year we struggle to find integrated information about the route chosen. This app aims to fill this gap as well as to document anyone's adventures through incredible landscapes and offer new options for biking lovers.

##Creative process
![screen shot 2018-01-15 at 2 50 52 pm](https://user-images.githubusercontent.com/29477363/35147416-69e1a982-fd06-11e7-8a1c-14b6794d8e1a.png)

I've organized my work in Trello, including wireframes (via balsamiq.com). I've approached the backend first and moved on to frontend.


![alin - project 2 - wireframe](https://user-images.githubusercontent.com/29477363/35147808-d795faae-fd07-11e7-889a-8564f5ac15c4.png)

##Installation and setup
You can run the project locally by downloading or clonning the [Github repo](https://github.com/EagleEye182/wdi-second-project) or you can view it [online on Heroku](https://bike-a-river.herokuapp.com/).

## Technology
This is a a **full-stack RESTful application** that includes **authentication**. In a nutshell, it is an **Express application** that has a **Mongo** database using the **Mongoose ORM**.

The initial version of the project was developed within five days using:

A. Backend

* Node.js
* MongoDb
* Google Maps API
* "bcrypt": "1.0.3",
* "bluebird": "3.4.7",
*  "ejs": "2.5.6",
* "express": "4.14.1",
* "express-ejs-layouts": "2.2.0",
* "express-flash": "0.0.2",
* "express-session": "1.15.6",
* "method-override": "2.3.10",
* "mongoose": "5.0.0-rc2",
* "morgan": "1.8.1"
* "babel-core": "6.26.0",
* "babel-preset-env": "1.6.1",
* "browser-sync": "2.23.5",
* "gulp": "3.9.1",
* "gulp-babel": "7.0.0",
* "gulp-clean": "0.4.0",
* "gulp-clean-css": "3.9.2",
* "gulp-nodemon": "2.2.1",
* "gulp-notify": "3.1.0",
* "gulp-plumber": "1.2.0",
* "gulp-sass": "3.1.0",
* "gulp-sourcemaps": "2.6.3",
* "gulp-uglify": "3.0.0",
* "run-sequence": "2.2.1"

B. Frontend

* HTML5
* Bootstrap
* Fontawesome
* jQuery
* jQuery validator
* SCSS/SASS

## Achievements
The app covers all the technical requirements for this project. On top, it uses the Google Maps API that gives it a degree of dynamism. Further, it contains client-side form validation using jQuery and flash messages to show success/error information. The search function can look up rivers and is not case sensitive. Initial tests indicate that the app is fully responsive however more testing should be conducted.
![screen shot 2018-01-19 at 11 32 50 am](https://user-images.githubusercontent.com/29477363/35149051-97aa627c-fd0c-11e7-91e6-9bca29cb172b.png)


## Next steps

In the short run, I aim to make the app fully responsive. The SCSS code must be DRYer and the UI experience can be improved. Content-wise, the user will get a profile page to check their contributions and there should be a functionality to allow them to add routes they like to their profile (create a portfolio or a wish list). A rating system can be implemented and, using Google Maps API documentation, to add elevation on the map for more information. Not least, the search function can be made more flexible.

## Acknowledgments
This project would not have come to fruition without the brilliant support from General Assembly's instructional team. Kudos to Ben, Emily, Guy, Rane and Rupesh.

Grateful to my biking mates for their companionship and initial feedback on the project.
![A big thank you to all](https://media1.giphy.com/media/xT8qBjKeeMsHoecOsM/giphy.gif)
