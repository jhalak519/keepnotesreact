# Keep Notes React

A beautiful and functional note-taking application built with React and Vite. This application allows users to create, read, update, and delete notes with a persistent local storage backend.

# Demo 

https://keep-your-notes-here-by-jhalak.netlify.app/

## Features

- **Create Notes**: Easily add new notes with a title and content.
- **View Notes**: Notes are displayed in a responsive grid layout.
- **Read More**: Long notes are automatically truncated with a "Read More" link that opens a detailed view.
- **Edit Notes**: 
  - Edit directly from the dashboard using the "Edit" button.
  - click on a note to open a modal view with editing capabilities.
- **Delete Notes**: Remove notes you no longer need.
- **Persistent Storage**: All notes are saved to your browser's Local Storage, so you never lose your data.
- **Responsive Design**: Works on various screen sizes.
- **Custom Theme**: A visually appealing Green and Antiquewhite color scheme.

## Tech Stack

- **Frontend**: React.js
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **State Management**: React Hooks (`useState`, `useEffect`)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js installed on your machine.
- `pnpm` (or `npm`/`yarn`) package manager.

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory.

2.  **Install dependencies**:
    ```bash
    pnpm install
    ```

3.  **Run the development server**:
    ```bash
    pnpm run dev
    ```

4.  **Open your browser**:
    Navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## 📁 Project Structure

```
src/
├── components/
│   ├── CreateArea/    # Component for adding new notes
│   ├── EditNote/      # (Internal logic/styles)
│   ├── Footer/        # Application footer
│   ├── Header/        # Application header
│   ├── NoteCard/      # Modal component for viewing/editing notes
│   └── Notes/         # Individual note component for the grid
├── App.jsx            # Main application component and logic
├── App.css            # Global grid layout styles
├── index.css          # Global theme and reset styles
└── main.jsx           # Entry point
```

## Contributing

Feel free to submit issues and enhancement requests.

