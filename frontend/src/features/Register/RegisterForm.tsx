import React, { useState } from 'react';
// Assuming the constants are imported from a data file named './data/games'
import { 
    CATEGORIZED_GAMES, 
    YEAR_OPTIONS, 
    SCHOOL_EMAIL_REGEX, 
    STRONG_PASSWORD_REGEX, 
    PASSWORD_REQUIREMENTS 
} from './Register'; // Adjust import path as necessary

// State interface for TypeScript
interface FormData {
    fullName: string;
    email: string;
    yearOfStudy: string;
    password: string;
    selectedGames: string[]; // Allows registration for more than 1 game
}

const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        yearOfStudy: YEAR_OPTIONS[0],
        password: '',
        selectedGames: [],
    });

    const [openCategories, setOpenCategories] = useState<string[]>([]);
    const toggleCategory = (category: string) => { // craetion of a toggle function
        setOpenCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category) // if open close it
                : [...prev, category] // if closed  open it
        );
    };

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [submitStatus, setSubmitStatus] = useState<'default' | 'submitting' | 'success'>('default');

    // Generic handler for input and select changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Live validation for password
        if (name === 'password') {
            validatePassword(value);
        }
    };

    const validatePassword = (password: string) => {
        if (password.length === 0) {
            setPasswordError(null);
        } else if (STRONG_PASSWORD_REGEX.test(password)) {
            setPasswordError(null);
        } else {
            setPasswordError(PASSWORD_REQUIREMENTS);
        }
    };

    // Toggle eye icon functionality
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prev => !prev);
    };

    // Handler for game checkbox selection (allows multiple selection)
    const handleGameChange = (gameId: string, isChecked: boolean) => {
        setFormData(prev => {
            const newGames = isChecked
                ? [...prev.selectedGames, gameId] // Add game
                : prev.selectedGames.filter(id => id !== gameId); // Remove game
            return { ...prev, selectedGames: newGames };
        });
    };
    
    // Form Submission Handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Client-side validation checks
        if (!SCHOOL_EMAIL_REGEX.test(formData.email)) {
            alert('Please enter a valid school email address in the required format.');
            return;
        }
        if (!STRONG_PASSWORD_REGEX.test(formData.password)) {
            alert('Please ensure your password meets all strong password requirements.');
            return;
        }
        if (formData.selectedGames.length === 0) {
             alert('Please select at least one game to participate in.');
            return;
        }

        // Simulate API submission
        setSubmitStatus('submitting');

        setTimeout(() => {
            setSubmitStatus('success'); // Change button text to "Successful Registration!"
        }, 1500);
    };

    // Determine button text dynamically
    const buttonText = (() => {
        if (submitStatus === 'submitting') return 'Registering...';
        if (submitStatus === 'success') return 'Successful Registration!';
        return `Register Now (${formData.selectedGames.length} Games Selected)`; // Updates games count
    })();

    // Tailwind primary color classes (Green-Blueish: Teal)
    const PRIMARY_COLOR_CLASSES = 'bg-teal-600 hover:bg-teal-700 focus:ring-teal-500';

    

    return (
        // Responsive Container with Green-Blueish background
        <div className="min-h-screen bg-teal-50 flex items-center justify-center p-4">
            <form 
                onSubmit={handleSubmit} 
                className="w-full max-w-lg bg-white shadow-2xl rounded-xl p-6 md:p-8 space-y-6"
            >
                <h2 className="text-3xl font-bold text-teal-800 text-center border-b pb-3 mb-5">
                    Sports Registration
                </h2>


                {/* 1. Full Name */}
                <div className="space-y-1">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>


                {/* 2. Email Address (Validated) */}
                <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">School Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        // HTML5 validation for school email format
                        pattern={SCHOOL_EMAIL_REGEX.source} 
                        title="Must be in the format: surname.admissionnumber@students.kyu.ac.ke"
                    />
                    <p className="text-xs text-gray-500">Format: surname.admissionnumber@students.kyu.ac.ke</p>
                </div>


                {/* 3. Year of Study Dropdown (All 4 years) */}
                <div className="space-y-1">
                    <label htmlFor="yearOfStudy" className="block text-sm font-medium text-gray-700">Year of Study</label>
                    <select
                        id="yearOfStudy"
                        name="yearOfStudy"
                        value={formData.yearOfStudy}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                    >
                        {YEAR_OPTIONS.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>


                {/* 4. Password Field with Toggle (Strong Password Regex) */}
                <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                        <input
                            // Dynamic type for toggle eye icon
                            type={isPasswordVisible ? "text" : "password"} 
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className={`w-full border rounded-lg pr-10 px-3 py-2 focus:outline-none text-base 
                                ${passwordError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'}`}
                            // Strong password validation regex
                            pattern={STRONG_PASSWORD_REGEX.source} 
                            title={PASSWORD_REQUIREMENTS}
                        />
                        {/* Toggle Button (Eye Icon) */}
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-teal-600 focus:outline-none"
                            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                        >
                            {/* SVG for visibility toggle */}
                            {isPasswordVisible ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-14-14zM.458 10c.801-2.427 2.368-4.54 4.417-6.196l3.364 3.364a3 3 0 004.975 2.112l3.414 3.414c1.196 1.549 2.13 3.25 2.56 5.067L19.542 10C18.268 5.943 14.478 3 10 3c-1.295 0-2.529.294-3.659.845l-.46.208-1.554-1.554L.458 10z" clipRule="evenodd" />
                                    <path d="M13.633 11.516l-4.735-4.735A3 3 0 007 10a3 3 0 003 3l.487-.033 1.054 1.054.382.382A6.995 6.995 0 0110 17c-2.73 0-5.111-1.353-6.63-3.465l.504-.42a4.996 4.996 0 001.373 1.09l.465.138A8.835 8.835 0 0010 15c2.195 0 4.21-.77 5.86-2.05l-.348-.348a2 2 0 01-1.879.514z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    {passwordError && (
                        <p className="text-sm text-red-600 font-medium">{passwordError}</p>
                    )}
                </div>

              
           {/* 5. Game Selection Section (Categorized Checkboxes with Dropdowns) */}
<div className="space-y-4 pt-4 border-t">
  <h3 className="text-lg font-semibold text-gray-800">
    Select Games to Participate (Multiple allowed)
  </h3>

  {Object.entries(CATEGORIZED_GAMES).map(([category, games]) => {
    const isOpen = openCategories.includes(category);

    return (
      <div key={category} className="border border-gray-200 rounded-lg p-3">
        {/* Category Header with toggle */}
        <button
          type="button"
          onClick={() => toggleCategory(category)}
          className="w-full flex justify-between items-center text-left font-bold text-teal-700 mb-2 focus:outline-none"
        >
          <span>{category}</span>
          <span className="text-gray-600 text-xl">{isOpen ? '−' : '+'}</span>
        </button>

        {/* Only show the games if category is open */}
        {isOpen && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
            {games.map((game) => (
              <div key={game.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={game.id}
                  checked={formData.selectedGames.includes(game.id)}
                  onChange={(e) => handleGameChange(game.id, e.target.checked)}
                  className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <label
                  htmlFor={game.id}
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  {game.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  })}
</div>

                {/* 6. Submit Button (Centered, dynamic text) */}
                <div className="flex justify-center pt-4">
                    <button
                        type="submit"
                        disabled={submitStatus === 'submitting' || submitStatus === 'success'}
                        className={`w-full sm:w-auto text-white font-semibold py-3 px-8 rounded-lg transition duration-300
                                   focus:outline-none focus:ring-4 focus:ring-offset-2 
                                   ${PRIMARY_COLOR_CLASSES}
                                   ${submitStatus === 'success' ? 'bg-green-500 hover:bg-green-500' : ''}
                                   ${submitStatus === 'submitting' ? 'opacity-70 cursor-wait' : ''}
                                  `}
                    >
                        {buttonText}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;