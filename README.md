# Real-Time Tracker App

## Overview

This application allows users to track the real-time location of a person or place. The coordinates are updated every 3 seconds, providing live geolocation updates. It uses **Socket.io** for real-time communication between the client and the server.

## Features

- **Real-Time Location Tracking:** Updates location coordinates every 3 seconds.
- **Interactive Map:** Displays real-time geolocation on a map.
- **Socket.io Integration:** Facilitates seamless communication between the server and the client.
- **Responsive Design:** Optimized for use on various screen sizes and devices.

## Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - JavaScript
  - Socket.io (for real-time communication)

- **Backend:**
  - Node.js
  - Express.js
  - Socket.io (for real-time communication)

## Installation Guide

Follow the steps below to run this project locally.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (Node Package Manager)

### Steps

1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project_name>
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the application:

    ```bash
    npm start
    ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app in action.

## How It Works

1. The server continuously sends real-time location data to the client using **Socket.io**.
2. The client receives and updates the geolocation data on a map every 3 seconds.
3. Users can track the movement of a person or a place with real-time updates.

## Usage

- Upon visiting the application, users will see a map with the current location of the tracked entity.
- The app updates the position every 3 seconds, reflecting the latest coordinates.
- You can open the app in multiple windows to track different locations simultaneously.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request to the `main` branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

For any issues or suggestions, feel free to open an issue or contact the project maintainer.

