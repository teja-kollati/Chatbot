# Chatbot Application

## Overview
This is a simple web-based chatbot application that interacts with users using OpenRouter AI. It allows users to send messages and receive AI-generated responses dynamically.

## Features
- User-friendly chat interface
- Dynamic message formatting (bold, italic, lists, etc.)
- Scrollable chat history
- Responsive design
- Enter key support for message submission

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** OpenRouter AI API
- **Styling:** CSS for UI customization

## Setup Instructions

### Prerequisites
- A web browser (Chrome, Firefox, Edge, etc.)
- A text editor (VS Code, Sublime Text, etc.)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/chatbot.git
   ```
2. Navigate to the project directory:
   ```bash
   cd chatbot
   ```
3. Open `index.html` in a browser.

## File Structure
```
chatbot/
│── index.html       # Main HTML file
│── styles.css       # Stylesheet for UI
│── script.js        # JavaScript logic
│── README.md        # Project documentation
```

## Usage
1. Open the chat interface.
2. Enter a message in the input field.
3. Press "Enter" or click "Send" to receive an AI-generated response.

## API Details
- **Endpoint:** `https://openrouter.ai/api/v1/chat/completions`
- **Model Used:** `google/gemini-2.0-flash-thinking-exp:free`
- **Authentication:** Requires API key (replace in `script.js`)

## Future Enhancements
- Add a chatbot loading indicator.
- Store chat history using local storage.
- Implement a voice-to-text feature.

## License
This project is open-source. Feel free to modify and enhance it!

