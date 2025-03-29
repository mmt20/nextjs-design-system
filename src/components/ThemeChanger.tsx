"use client";

import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center space-x-4 p-4">
      <span className={theme === "dark" ? "text-white" : "text-black"}>
        Current theme: <strong>{theme}</strong>
      </span>
      <button
        onClick={() => setTheme("light")}
        className="px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
      >
        Light Mode
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 dark:bg-gray-300 dark:text-black dark:hover:bg-gray-400"
      >
        Dark Mode
      </button>
    </div>
  );
};

export default ThemeChanger;
