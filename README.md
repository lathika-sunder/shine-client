
# Shine: Car Wash and Service Booking App
<p align="center">
<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
<img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white">
<img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white">
<img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB">
<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
</p>

Welcome to **Shine**, the ultimate car wash and service booking application. Shine is designed to make scheduling your car wash and vehicle service appointments a breeze.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
  - [Client](#client)
  - [Server](#server)
- [Usage](#usage)
- [Admin Panel](#admin-panel)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Shine is a MERN stack application that allows users to book car wash and service slots effortlessly. With an intuitive interface and robust backend, Shine aims to provide a seamless experience for both users and admins.

## Features

- **User Authentication**: Signup, login with Google and email, and email verification using Clerk.
- **Home Page**: Browse services and book slots.
- **Service Slot Booking**: Choose from available slots and confirm your booking.
- **Previous Slots**: View history of your previous bookings.
- **Admin Panel**: Admins can manage bookings and slots.
- **Performance**: Optimized with React Query for caching and preloading to boost performance.

## Tech Stack

- **Frontend**: React, Clerk (authentication), React Query (caching and preloading)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Tools**: Axios, Mongoose

## Setup Instructions

### Client

1. Clone the client repository:
    ```sh
    git clone https://github.com/your-username/shine-client.git
    cd shine-client
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```env
    REACT_APP_API_URL=http://localhost:5000/api
    REACT_APP_CLERK_FRONTEND_API=your-clerk-frontend-api
    ```

4. Start the development server:
    ```sh
    npm start
    ```

### Server

1. Clone the server repository:
    ```sh
    git clone https://github.com/lathika-sunder/shine-server.git
    cd shine-server
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```env
    DB_URI=your-mongodb-uri
    PORT=5000
    ```

4. Start the server:
    ```sh
    npm start
    ```

## Usage

1. **Signup and Login**: Register using your email or Google account.
2. **Email Verification**: Verify your email to start booking services.
3. **Book a Service**: Choose a slot and book your car wash or service.
4. **View Bookings**: Check your booking history and manage upcoming appointments.

## Admin Panel

Admins have the ability to:
- View all bookings.
- Manage service slots.
- Receive notifications for new bookings.

## Planned Schema
![WhatsApp Image 2024-05-15 at 21 15 57_be0977cd](https://github.com/lathika-sunder/shine-client/assets/95066409/04120e65-c954-4c60-a86a-4b104d99f867)

## Screenshots
![image](https://github.com/lathika-sunder/shine-client/assets/95066409/2583cede-97b8-453e-957b-48828c5ba674)
![image](https://github.com/lathika-sunder/shine-client/assets/95066409/d359fd31-2a5c-4537-9f43-88e8ebf97df0)
![image](https://github.com/lathika-sunder/shine-client/assets/95066409/f6329425-75bb-4f03-876d-d7472f156483)
![image](https://github.com/lathika-sunder/shine-client/assets/95066409/543de074-9c99-41ca-b701-6b06ebbf2a19)



## Future Enhancements

- **Reminder System**: Automated reminders for service due dates.
- **Chatbot Booking**: Book services through a chatbot interface.
- **Graphical Data Representation**: Visualize booking data in the admin panel.
- **Featured Services Popups**: Highlight special offers and services.

## License

This project is licensed under the MIT License. 

## Contact

For any questions or suggestions, feel free to contact me at [my mail](lathikasunder11@gmail.com).

