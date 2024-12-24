# LearnMate

This repository contains the front-end implementation for **LearnMate**, an innovative platform that bridges the gap between tutors and learners. Designed with modern technologies, LearnMate ensures a smooth and effective user experience for managing educational needs.

---

## Purpose

LearnMate is a one-stop solution for learners to connect with professional tutors, schedule tutorial sessions, and achieve their academic goals with ease. The platform also empowers tutors to manage bookings and reviews efficiently.

---

## Live URL

[Live Site](https://learnmates.vercel.app/)

---

## Tech Stack

- **Frontend Framework:** React.js
- **Styling:** Tailwind CSS, Shadcn
- **Animations:** Framer Motion
- **State Management:** Context API
- **Routing:** React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Authentication (JWT token integration)
- **Data Fetching:** TanStack Query, Axios

---

## NPM Packages Used

- **React** – Core library for building the user interface.
- **React Router** – For client-side routing.
- **Axios** – For making HTTP requests to the backend.
- **TanStack Query** – For data synchronization and caching.
- **Firebase** – For authentication and backend services.
- **Framer Motion** – For smooth and interactive animations.
- **Shadcn UI Components** – For pre-designed, customizable UI components.
- **Tailwind CSS** – For efficient and responsive styling.
- **React icons** – For awesome react icons.
- **React Hot Toast** – For realtime notifications.
- **React Helmet** – For better SEO.

---

## Key Features

- **Responsive Design:**  
  User-friendly layout optimized for all devices.

- **Tutor Browsing:**  
  Search, filter, and view tutors by category, subject, and availability.

- **Tutor Management::**  
  Create, view , update and delete tutorial for student to book.

- **Booking System:**  
  Schedule tutorial sessions in just a few clicks.

- **Review System:**  
  Rate and review tutors to ensure transparency and trust. Leave reviews, incrementing the review count dynamically.

- **Secure Authentication:**  
  Firebase-powered authentication with JWT integration.

- **Category Insights:**  
  Explore popular subjects and find tutors in specific categories.

- **Dynamic Animations:**  
  Engaging transitions and effects using Framer Motion.

- **Data Synchronization:**  
  Real-time updates for bookings and tutor details via TanStack Query.

---

## Features Overview

### Authentication

- Secure login and registration for users (students and tutors).
- Persistent login sessions using Firebase and JWT.

### Tutor Management

- Display dynamic lists of tutors filtered by categories or search terms.
- View detailed profiles of tutors, including ratings and reviews.

### Booking Management

- Schedule tutorial sessions with selected tutors.
- Manage bookings directly from the user dashboard.

### Reviews

- Leave feedback for tutors after a session.
- View average ratings for each tutor.

### Dashboard

- Personalized dashboard for users to manage bookings and reviews.
- Tutors can view and manage upcoming tutorial requests.

---

### Additional Features

- **Dark/Light Mode:** Toggle theme for the entire application.
- **Error and Loading Pages:** Ensures smooth user experience.
- **Animations:** Integrated animations using Framer Motion.
- **Pagination:** Implemented for the "Find Tutors" page, showing 6–9 tutors per page.
- -

---

## Endpoints Used

### Authentication

- **`POST /jwt`** – Generate JWT token for user authentication.
- **`GET /clearjwt`** – Logout by clearing the JWT token.

### Users

- **`GET /users`** – Retrieve total user count.
- **`POST /user`** – Register a new user.
- **`PATCH /user`** – Update user profile details.

### Tutors

- **`GET /tutors`** – Retrieve tutor list with optional filtering.
- **`GET /tutors/categories`** – Fetch unique tutor categories.
- **`GET /tutors/:id`** – Retrieve specific tutor details.

### Bookings

- **`GET /bookings`** – Fetch all bookings for a user.
- **`POST /bookings`** – Create a new booking.

### Categories

- **`GET /categories`** – Retrieve category-wise tutor counts.

---

## Deployment

LearnMate is fully deployed and accessible to users, offering seamless integration of the client and backend services for real-time data updates. For more information or to report issues, refer to the repository.
