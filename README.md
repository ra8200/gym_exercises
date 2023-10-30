# Gym Exercises

This is a simple React application for browsing and learning about gym exercises. The app allows you to scroll through exercises horizontally and provides information on each exercise.

## Features

1. **Navigation Bar**: A responsive navigation bar that includes links to the home page and exercises section. The logo is also clickable and redirects to the home page. [View Code](https://github.com/ra8200/gym_exercises/blob/main/src/components/Navbar.js)

2. **Home Page**: The main landing page of the application. It features a hero banner, a search functionality to filter exercises based on body parts, and a list of exercises. [View Code](https://github.com/ra8200/gym_exercises/blob/main/src/pages/Home.js)

3. **Exercise Detail Page**: Provides detailed information about a specific exercise. This includes a description, videos related to the exercise, and similar exercises based on target muscles and equipment. [View Code](https://github.com/ra8200/gym_exercises/blob/main/src/pages/ExerciseDetail.js)

4. **Data Fetching Utility**: A utility function to fetch data from external APIs. The application uses RapidAPI to fetch exercise details and related YouTube videos. [View Code](https://github.com/ra8200/gym_exercises/blob/main/src/utils/fetchData.js)

## Main Dependencies

1. **@mui/material**: A popular Material-UI library for React components.
   - Example: The `Box` component used in the [App.js](https://github.com/ra8200/gym_exercises/blob/main/src/App.js) for layout and spacing.

2. **react**: The core React library.
   - Example: The `useState` and `useEffect` hooks used in the [Home.js](https://github.com/ra8200/gym_exercises/blob/main/src/pages/Home.js) for state management and side effects.

3. **react-router-dom**: A library for routing in React applications.
   - Example: The `Route` and `Routes` components used in the [App.js](https://github.com/ra8200/gym_exercises/blob/main/src/App.js) to define application routes.

## Setup

1. Clone the repository.
2. Install the required packages using `npm install`.
3. Set up your environment variables, especially the `REACT_APP_RAPID_API_KEY`.
4. Run the application using `npm start`.