# QUIZO

[Quizo App Link](https://quizo-app-cd6cec12f237.herokuapp.com/)

![App Screenshot](https://ibb.co/mH5zvhM)

# How to Run

To get started with this trivia quiz game, follow these steps to set up both the client and server sides of the application.

## Setting Up the Client

- Navigate to the client directory:
  ```cd client```
- Install the necessary packages using npm:
  ```npm install```
- Build the client application:
  ```npm run build```
- Return to the root directory:
  ```cd ../```

## Setting Up the Server

- Navigate to the server directory:
  ```cd server```
- Install the server dependencies:
  ```npm install```
- Create `.env`
  ```
  JWT_SECRET=secretcode
  MONGODB_URI=mongodb+srv://tijanihind200:tijanihind200@cluster0.hr59o5b.mongodb.net/?retryWrites=true&w=majority
  ```
- Return to the root directory:
  ```cd ../```
- Start the development server:
  ```npm run develop```

## Application Features

- **User Registration and Login**: Allows users to register and log in to access the game.
- **Trivia Quiz Game**: Users can play a trivia game with various categories.
- **Score Tracking**: The application tracks scores and high scores of users.
- **User Profiles**: Users can choose and update their profile, including an avatar picture.
- **Logout Functionality**: Secure logout option for users.

## Technologies Used

- **Frontend**: React.js for building the user interface.
- **Backend**: Node.js with Express.js for server-side logic.
- **Database**: MongoDB (online) for storing user data, scores, and game information.
- **API Endpoints**: Two main API endpoints for user interaction and game data processing.
