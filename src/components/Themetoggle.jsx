import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  // State to track the current theme (light, dark, or system)
  const [theme, setTheme] = useState(localStorage.theme || "system");

  // Function to set the theme
  const setThemeMode = (selectedTheme) => {
    if (selectedTheme === "system") {
      // If the user selects "system," respect the system preference
      const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", isSystemDark); // Toggle dark class based on system preference
      localStorage.removeItem("theme"); // Clear the user's saved preference
    } else {
      // If the user selects "light" or "dark," set the theme accordingly
      document.documentElement.classList.toggle("dark", selectedTheme === "dark"); // Toggle dark class
      localStorage.theme = selectedTheme; // Save the user's preference in localStorage
    }
    setTheme(selectedTheme); // Update the state with the selected theme
  };

  // On component mount, set the initial theme
  useEffect(() => {
    const savedTheme = localStorage.theme; // Check if the user has a saved theme preference
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; // Detect system theme
    const initialTheme = savedTheme || "system"; // Use saved theme if available, otherwise default to "system"
    setThemeMode(initialTheme); // Set the initial theme
  }, []); // Empty dependency array ensures this runs only once on mount

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)"); // Create a media query to detect system theme changes
    const handleSystemThemeChange = (e) => {
      if (theme === "system") {
        // If the user is using the system theme, update the theme when the system preference changes
        setThemeMode("system");
      }
    };
    mediaQuery.addEventListener("change", handleSystemThemeChange); // Add event listener for system theme changes
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange); // Cleanup event listener on unmount
  }, [theme]); // Re-run this effect when the `theme` state changes

  return (
    <div
      className="relative z-0 inline-grid grid-cols-3 gap-0.5 rounded-full bg-gray-950/5 p-0.75 text-gray-950 dark:bg-white/10 dark:text-white"
      role="radiogroup"
    >
        
      {/* System Theme Button */}
      <button
        className={`rounded-full p-1.5 *:size-7 ${
          theme === "system"
            ? "bg-white inset-ring ring ring-gray-950/10 inset-ring-white/10"
            : ""
        }`}
        aria-label="System theme"
        role="radio"
        aria-checked={theme === "system"}
        onClick={() => setThemeMode("system")}
      >
        <svg viewBox="0 0 28 28" fill="none">
          <path
            d="M7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5V16.5C20.5 17.0523 20.0523 17.5 19.5 17.5H8.5C7.94772 17.5 7.5 17.0523 7.5 16.5V8.5Z"
            stroke="currentColor"
          />
          <path
            d="M7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5V14.5C20.5 15.0523 20.0523 15.5 19.5 15.5H8.5C7.94772 15.5 7.5 15.0523 7.5 14.5V8.5Z"
            stroke="currentColor"
          />
          <path
            d="M16.5 20.5V17.5H11.5V20.5M16.5 20.5H11.5M16.5 20.5H17.5M11.5 20.5H10.5"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>
      </button>
      
      {/* Light Mode Button */}
      <button
        className={`rounded-full p-1.5 *:size-7 ${
          theme === "light"
            ? "bg-white inset-ring ring ring-gray-950/10 inset-ring-white/10"
            : ""
        }`}
        aria-label="Light theme"
        role="radio"
        aria-checked={theme === "light"}
        onClick={() => setThemeMode("light")}
      >
        <svg viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="3.5" stroke="currentColor" />
          <path d="M14 8.5V6.5" stroke="currentColor" strokeLinecap="round" />
          <path
            d="M17.889 10.1115L19.3032 8.69727"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <path d="M19.5 14L21.5 14" stroke="currentColor" strokeLinecap="round" />
          <path
            d="M17.889 17.8885L19.3032 19.3027"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <path d="M14 21.5V19.5" stroke="currentColor" strokeLinecap="round" />
          <path
            d="M8.69663 19.3029L10.1108 17.8887"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <path d="M6.5 14L8.5 14" stroke="currentColor" strokeLinecap="round" />
          <path
            d="M8.69663 8.69711L10.1108 10.1113"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Dark Mode Button */}
      <button
        className={`rounded-full p-1.5 *:size-7 ${
          theme === "dark"
            ? "bg-gray-700 inset-ring ring ring-transparent inset-ring-white/10"
            : ""
        }`}
        aria-label="Dark theme"
        role="radio"
        aria-checked={theme === "dark"}
        onClick={() => setThemeMode("dark")}
      >
        <svg viewBox="0 0 28 28" fill="none">
          <path
            d="M10.5 9.99914C10.5 14.1413 13.8579 17.4991 18 17.4991C19.0332 17.4991 20.0176 17.2902 20.9132 16.9123C19.7761 19.6075 17.109 21.4991 14 21.4991C9.85786 21.4991 6.5 18.1413 6.5 13.9991C6.5 10.8902 8.39167 8.22304 11.0868 7.08594C10.7089 7.98159 10.5 8.96597 10.5 9.99914Z"
            stroke="currentColor"
            strokeLinejoin="round"
          />
          <path
            d="M16.3561 6.50754L16.5 5.5L16.6439 6.50754C16.7068 6.94752 17.0525 7.29321 17.4925 7.35607L18.5 7.5L17.4925 7.64393C17.0525 7.70679 16.7068 8.05248 16.6439 8.49246L16.5 9.5L16.3561 8.49246C16.2932 8.05248 15.9475 7.70679 15.5075 7.64393L14.5 7.5L15.5075 7.35607C15.9475 7.29321 16.2932 6.94752 16.3561 6.50754Z"
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.3561 11.5075L20.5 10.5L20.6439 11.5075C20.7068 11.9475 21.0525 12.2932 21.4925 12.3561L22.5 12.5L21.4925 12.6439C21.0525 12.7068 20.7068 13.0525 20.6439 13.4925L20.5 14.5L20.3561 13.4925C20.2932 13.0525 19.9475 12.7068 19.5075 12.6439L18.5 12.5L19.5075 12.3561C19.9475 12.2932 20.2932 11.9475 20.3561 11.5075Z"
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default ThemeToggle;