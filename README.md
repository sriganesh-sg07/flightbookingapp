# Flight Ticket Booking Web Application (MERN Stack)

This is a web application for flight ticket booking, built using the MERN (MongoDB, Express.js, React, Node.js) stack. The application provides different functionalities for users and administrators.

## Tech Stack

- Frontend: React
- Backend: Node.js with Express.js
- Database: MongoDB

## User Use Cases

### Login
Users can log in to their accounts using their credentials.

### Sign up
New users can create an account by providing their information and registering.

### Searching for Flights
Users can search for available flights based on the date and time of their travel.

### Booking Tickets
Users can book tickets for a flight based on availability. The application assumes a default seat count of 60 for each flight.

### My Booking
Users can view a list of all the bookings they have made.

### Logout
Users can log out of their accounts to end their session.

## Admin Use Cases

### Login (Separate login for Admin)
Administrators can log in to their admin accounts using their credentials.

### Add Flights
Admins can add new flights to the system, providing flight details such as flight number, time, and availability.

### Remove Flights
Admins can remove existing flights from the system.

### View Bookings
Admins can view all the bookings made for a specific flight, based on the flight number and time.

## Installation and Setup

1. Clone the repository.
2. Install dependencies for the backend using `npm install` in the root directory.
3. Install dependencies for the frontend using `npm install` in the client directory.
4. Set up the MongoDB database.
5. Configure the backend server to connect to the MongoDB database.
6. Run the backend server using `nodemon index.js` in the root directory.
7. Run the frontend development server using `npm start` in the client directory.

---

