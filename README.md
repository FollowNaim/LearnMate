# LearnMate

This repository contains the front-end implementation for **LearnMate**, an innovative platform that bridges the gap between tutors and learners. Designed with modern technologies, LearnMate ensures a smooth and effective user experience for managing educational needs.

---

## Purpose

[Learn Mate](https://learnmates.vercel.app/) is a one-stop solution for learners to connect with professional tutors, schedule tutorial sessions, and achieve their academic goals with ease. The platform also empowers tutors to manage bookings and reviews efficiently.

---

## Showcase

<img src='https://i.ibb.co.com/s3Wfgyk/01.jpg'/>

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

## Dependencies

- **@radix-ui/react-avatar**: ^1.1.2 – A Radix UI component for displaying user avatars.
- **@radix-ui/react-dropdown-menu**: ^2.1.4 – A Radix UI dropdown menu component.
- **@radix-ui/react-label**: ^2.1.1 – A Radix UI label component for forms.
- **@radix-ui/react-select**: ^2.1.4 – A Radix UI select dropdown component.
- **@radix-ui/react-slot**: ^1.1.1 – A utility for passing dynamic components as slots.
- **@tanstack/react-query**: ^5.62.8 – Powerful data-fetching library for React.
- **axios**: ^1.7.9 – A promise-based HTTP client for making API requests.
- **class-variance-authority**: ^0.7.1 – Utility for handling className variants in React.
- **clsx**: ^2.1.1 – Utility for constructing `className` strings conditionally.
- **firebase**: ^11.1.0 – Google Firebase JavaScript SDK.
- **framer-motion**: ^11.15.0 – Motion library for React animations.
- **hamburger-react**: ^2.5.2 – A hamburger menu button component.
- **lottie-react**: ^2.4.0 – A React library for rendering Lottie animations.
- **lucide-react**: ^0.469.0 – React icons library with beautiful, consistent icons.
- **react**: ^18.3.1 – A JavaScript library for building user interfaces.
- **react-dom**: ^18.3.1 – React package for working with the DOM.
- **react-helmet-async**: ^2.0.5 – A library for managing document head tags asynchronously.
- **react-hot-toast**: ^2.4.1 – Toast notification library for React.
- **react-icons**: ^5.4.0 – Popular icon library for React.
- **react-router-dom**: ^7.1.0 – Declarative routing for React applications.
- **react-tooltip**: ^5.28.0 – Tooltips for React components.
- **sweetalert2**: ^11.15.3 – A customizable, accessible replacement for JavaScript’s alert.
- **tailwind-merge**: ^2.5.5 – Utility for merging Tailwind CSS class strings.
- **tailwindcss-animate**: ^1.0.7 – Animation utilities for Tailwind CSS.

---

## Dev Dependencies

- **@eslint/js**: ^9.17.0 – ESLint's core JavaScript functionality.
- **@types/node**: ^22.10.2 – TypeScript definitions for Node.js.
- **@types/react**: ^18.3.17 – TypeScript definitions for React.
- **@types/react-dom**: ^18.3.5 – TypeScript definitions for React DOM.
- **@vitejs/plugin-react**: ^4.3.4 – Vite plugin for React support.
- **autoprefixer**: ^10.4.20 – PostCSS plugin for adding vendor prefixes automatically.
- **eslint**: ^9.17.0 – A tool for identifying and fixing JavaScript code issues.
- **eslint-plugin-react**: ^7.37.2 – ESLint plugin for React best practices.
- **eslint-plugin-react-hooks**: ^5.0.0 – ESLint rules for React hooks.
- **eslint-plugin-react-refresh**: ^0.4.16 – ESLint plugin for React Fast Refresh.
- **globals**: ^15.13.0 – Global variable definitions for ESLint.
- **postcss**: ^8.4.49 – A tool for transforming CSS with JavaScript plugins.
- **tailwindcss**: ^3.4.17 – A utility-first CSS framework.
- **vite**: ^6.0.3 – Next-generation frontend build tool.

---

## 🔧 How to Run

1. **Clone the repository.**

```bash
   git clone https://github.com/FollowNaim/LearnMate
   cd LearnMate
```

2. **Install Dependencies**

```bash
npm install
```

3. **Setup Environment Variables**

- create .env.local in the root directory.
- Add `VITE_API_URL` variable and put your server url here.
- create a firebase project and add config here
- firebase config will look like

```bash
VITE_Projectid
VITE_apikey
```

like this.

4. ** Run the application**

```bash
npm run dev
```

5. **Access the app**

- Open http://localhost:5173 in your browser.

---

## 🛠️ Deployment

- Hosted on Netlify or Vercel for a fast and reliable experience.
- Firebase Authentication requires authorized domains to ensure secure access.

---

## 🤝 Contributions

Contributions are welcome! Fork this repository, make your changes, and submit a pull request.
