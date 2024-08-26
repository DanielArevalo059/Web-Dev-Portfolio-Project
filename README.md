# WebDev Portfolio Project

## Overview

This is a full-stack web application built with a React frontend, Node/Express backend, and MongoDB database. The application provides users with the ability to create, read, update, and delete data in a Disc Golf log page.

## Features

- **React Frontend**: A dynamic and responsive user interface built using React.
- **Node/Express Backend**: A RESTful API created with Node.js and Express for handling server-side logic and routing.
- **MongoDB Database**: A NoSQL database for storing and managing application data.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed locally or have access to a MongoDB Atlas cluster.

### Backend Setup
To run the backend server on http://localhost:5000:
1. Clone the repository.
2. cd backend
3. npm i
4. update the .env file with:
    PORT=5000
    MONGODB_URI=<your_mongodb_connection_string>
5. npm run dev

### Frontend Setup
To run the frontend on http://localhost:3000:
1. Open a new terminal and cd frontend.
2. npm i
3. npm start
