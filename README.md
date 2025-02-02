# Quiz Web Application

A web-based quiz application with gamification features built using **React** and **Express**. The app fetches quiz data from an external API, provides an interactive quiz experience, and displays the user's score with a summary after completion.

## Features
- **Start the Quiz**: Users can start the quiz from a welcoming screen.
- **Multiple-Choice Questions**: The quiz presents questions with multiple-choice answers.
- **Quiz Results**: Upon completion, the app shows the total score with an option to restart the quiz.
- **Gamification**: Users can track their scores and enjoy an interactive experience.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js with Express (for API handling)
- **State Management**: React Context API
- **Styling**: CSS (custom styles for quiz interface)

## API Integration
The quiz data is fetched from the following API endpoint:

**API URL**: [https://api.jsonserve.com/Uw5CrX](https://api.jsonserve.com/Uw5CrX)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-directory>

2. Frontend Setup (React)**: Instructions to install frontend dependencies.
   ```bash
   cd client
   npm install

3. Backend Setup (Node.js/Express)**: Instructions to install backend dependencies.
   ```bash
   cd server
   npm install
4. Run the Application**: Instructions on how to start both the backend and frontend.
   ```bash
   cd server
   npm start
5. Open the app in your browser**: How to access the quiz after starting the servers.
   <br>
   Open http://localhost:3000 to access the quiz.

<h1>File Structure</h1>
<br>
Frontend (client/)
<br>
App.jsx: Main component handling quiz flow.
<br>
StartScreen.jsx: Component for displaying the welcome screen.
<br>
Quiz.jsx: Displays the questions, handles user input, and score tracking.
<br>
ResultScreen.jsx: Shows the user's score and a button to restart the quiz.
<br>
QuizContext.jsx: Provides a global state for quiz data, score, and current question.

<h1>Backend (server/)</h1>
<br>
server.js: Main server file that serves the quiz data via Express.
<br>
quizService.js: Service for fetching quiz data from the external API.
   



