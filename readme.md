# MERN Stack Chatting App

This is a real-time chat application built using the MERN stack and other modern web development technologies.

## Technologies Used:
### Frontend:
- **HTML**: Structuring the web pages.
- **CSS**: Styling for basic layout and design.
- **Tailwind CSS**: Utility-first CSS framework for rapidly building custom designs.
- **Daisy UI**: Tailwind CSS component library for building responsive UI.
- **React**: JavaScript library for building user interfaces with reusable components.

### Backend:
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Lightweight framework for building server-side logic and APIs.
- **MongoDB**: NoSQL database for storing chat messages and user information.

## Features:
- Real-time messaging between users.
- Responsive design with a clean UI using Tailwind CSS and Daisy UI.
- MongoDB for persistent data storage of chats.
- RESTful API for user authentication and message handling.


## Setup Instructions:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/safi-io/chattingApplicationMERN.git
   ```

2. **Install dependencies:**
   Navigate to the project directory(both in backend and frontend) and run:
   ```bash
   npm install
   ```

3. **Create `.env` file in the backend:**
   Inside the backend folder, create a `.env` file and add the following environment variables:
   ```bash
   MONGODB_URI= <Your MongoDB connection string>
   JWT_SECRET_KEY= <Your JWT secret key>
   ```

4. **Run the application:**
   - Start the backend server:
     ```bash
     npm start
     ```
   - Start the frontend:
     ```bash
     npm start
     ```
## Note:
Feel free to contribute to this project, and if you encounter any issues, please open an issue or submit a pull request.

### Enjoy Hacking!