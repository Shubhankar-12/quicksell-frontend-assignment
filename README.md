# Kanban Board App

## Overview

This project is a Kanban board application built using ReactJS. It allows users to interact with ticket data fetched from the [Quicksell API](https://api.quicksell.co/v1/internal/frontend-assignment). Users can group and sort tickets based on different criteria, making it a versatile tool for project management. See the project live at [Live Link](https://quicksell-frontend-shubh.netlify.app/).

## Features

- **Data Interaction:**

  - Fetches ticket data from the Quicksell API.
  - Displays the fetched data on a Kanban board.

- **Grouping Options:**

  - Group tickets by Status, User, or Priority.

- **Sorting Options:**

  - Sort tickets by Priority or Title.

- **Priority Levels:**

  - Tickets are categorized with priority levels ranging from Urgent (4) to No Priority (0).

- **Styling:**

  - Visually appealing and responsive design.
  - Pure CSS is used for styling.

- **Icons:**

  - Icons are integrated for various elements of the application using react-icon.

- **State Persistence:**
  - Saves the user's view state (grouping and sorting options) even after a page reload using local storage.

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Shubhankar-12/quicksell-frontend-assignment
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd kanban-board-app
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the Application:**

   ```bash
   npm start
   ```

5. **Access the Application:**
   Open your browser and go to `http://localhost:3000`.
