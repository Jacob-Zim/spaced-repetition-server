# Staccato music theory learning app
By Jacob Zimmerman and Kevin Murphy

live URL: https://staccato-learn-music.netlify.com/
server URL: https://staccato-music-theory.herokuapp.com/
presentation URL: https://docs.google.com/presentation/d/1Hh_dexhUuFX-mGzv-waDD4nG3XkVoRf3HIys4eyZoHQ/edit#slide=id.g35f391192_00

## Project Summary
This app is for anyone trying to learn the basics of music theory. It suggests questions based upon a spaced algorithm to help you focus on information you find difficult. We came about this idea based on both of our own experience learning music theory and decided to make an app to help others.

### Landing Page
![staccato-1](https://user-images.githubusercontent.com/16858183/42684217-50d4a968-8644-11e8-8c6e-44f0feb0734a.PNG)

### Dashboard
![staccato-2](https://user-images.githubusercontent.com/16858183/42684255-6788f3e4-8644-11e8-99c7-ff4b2f9b3cb1.PNG)

## Technology used
- React
- Redux
- MongoDB
- Node
- Express
- CSS
- Passport
- bcrypt

## Deployment
- Heroku
- mLab
- Netlify

## API

Questions are created, read, updated, and deleted globally through the questions router.
- GET /api/questions - get all questions
- GET /api/questions/:id - get specific question
- POST /api/questions - create a question
- DELETE /api/questions/:id - delete specific question

User information is accessed from the user router.
- GET /users - returns all users

These endpoints are authenticated using JWT
- POST /users/next - takes in result of answered question, places it 2n or 2(1) places away from head of list, returns new question at head
- GET /users/first - returns the first question of a user
- GET /users/history - returns the number of questions a user got correct and total answered
