# Quiz Web App

A fully functional web-based quiz application built with vanilla JavaScript, HTML, and CSS.

## Features

- 🎯 **10 Multiple Choice Questions** - General knowledge quiz
- 💾 **Local Storage Support** - Questions and answers are saved automatically
- ⬅️➡️ **Navigation** - Move between questions freely using Previous/Next buttons
- 🔄 **Clear Answers** - Clear current answer and re-select
- 📊 **Results Page** - View final score with pie chart visualization
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Beautiful gradient background and smooth animations

## How to Use

1. **Open the Quiz** - Open `index.html` in your web browser
2. **Select Answers** - Click on radio buttons to select your answer
3. **Navigate Questions** - Use PREV and NEXT buttons to move between questions
4. **Clear Option** - Click CLEAR to deselect your current answer
5. **Submit & Next** - Click SUBMIT & NEXT to confirm and move to the next question
6. **View Results** - After the last question, your results with a pie chart will be displayed
7. **Restart** - Click RESTART QUIZ to start over (clears all data)

## File Structure

```
Quiz_webApp/
├── index.html       # Main HTML structure
├── style.css        # Styling and responsive design
├── script.js        # Quiz logic and interactivity
└── README.md        # This file
```

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with gradients and animations
- **Vanilla JavaScript** - Quiz logic and DOM manipulation
- **LocalStorage API** - Data persistence
- **Chart.js** - Pie chart visualization on results page

## Quiz Questions

The quiz covers 10 general knowledge topics:
1. Indian Politics
2. Nature & Environment
3. Animals & Wildlife (4 questions)
4. General Knowledge (3 questions)

## Customization

### Add More Questions
Edit the arrays in `script.js`:
- `allQuestions[]` - Question text
- `option1[], option2[], option3[], option4[]` - Answer options
- `answers[]` - Correct answers

Example:
```javascript
const allQuestions = [
    "Q1. Your Question?",
    // Add more...
];

const option1 = [
    "Option 1",
    // Add more...
];

// Continue for option2, option3, option4, and answers
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features Breakdown

### Quiz Navigation
- **PREV Button** - Go to previous question
- **NEXT Button** - Move to next question
- **CLEAR Button** - Clear current selection
- **SUBMIT & NEXT** - Save answer and proceed

### Auto-Save
- All answers are automatically saved to browser's LocalStorage
- Closing and reopening the app resumes from where you left off

### Results Page
- Shows total score (out of 10)
- Displays percentage score
- Shows correct vs wrong count
- Pie chart visualization of performance
- Restart button to reset everything

## Installation

No installation required! Just:
1. Download or clone the project
2. Open `index.html` in any modern web browser
3. Start taking the quiz!

## Tips for Best Experience

- Use a modern browser (Chrome, Firefox, Edge)
- Allow at least 400px width for optimal mobile view
- JavaScript must be enabled
- No internet connection required (once loaded)

## Future Enhancements

- Timer for each question
- Multiple quiz categories
- User profile/statistics
- Score submission to leaderboard
- Dark mode theme
- Sound effects


