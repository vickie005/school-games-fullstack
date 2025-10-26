// Define the data structure for categories and games
export const CATEGORIZED_GAMES = {
    'BALL GAMES': [
        { id: 'football', name: 'Football' },
        { id: 'basketball', name: 'Basketball' },
        { id: 'volleyball', name: 'Volleyball' },
        { id: 'netball', name: 'Netball' },
        { id: 'hockey', name: 'Hockey' },
        { id: 'rugby', name: 'Rugby' },
        { id: 'rollball', name: 'Rollball' },
        { id: 'floorball', name: 'Floorball' },
        { id: 'woodball', name: 'Woodball' },
    ],
    'MARTIAL ARTS': [
        { id: 'karate', name: 'Karate' },
        { id: 'boxing', name: 'Boxing' },
        { id: 'taekwondo', name: 'Taekwondo' },
    ],
    'ATHLETICS': [
        { id: 'athletics', name: 'Athletics' },
        { id: 'swimming', name: 'Swimming' },
        
    ],
    'RACQUET SPORTS': [
        { id: 'tennis', name: 'Tennis' },
        { id: 'badminton', name: 'Badminton' },
        { id: 'table_tennis', name: 'Table Tennis' },
    ],
    'MIND GAMES': [
        { id: 'chess', name: 'Chess' },
        { id: 'scrabble', name: 'Scrabble' },
        { id: 'darts', name: 'Darts' },
        { id: 'esports', name: 'ESports' },
    ],
};

export const YEAR_OPTIONS = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

// Regex constants
// format: surname.admissionnumber@students.kyu.ac.ke
export const SCHOOL_EMAIL_REGEX = /^[a-z]+\.[0-9]+@students\.kyu\.ac\.ke$/; 
// Requires: 8+ chars, 1 Uppercase, 1 Lowercase, 1 Number, 1 Special Char
export const STRONG_PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

export const PASSWORD_REQUIREMENTS = "8+ chars: 1 Uppercase, 1 Lowercase, 1 Number, 1 Special Char.";