import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ isScrolled = false, isMenuOpen = false }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');  
        } else {
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        }
    }, []);
    
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };
    
    return (
        <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full transition-all duration-300 hover:bg-accent hover:scale-105 focus:outline-none"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-blue-600" />
            )}
          </button>
    );
};