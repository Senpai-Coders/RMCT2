import { getTheme, setTheme } from "@/helpers/Theme";
import React, { useEffect, useState } from "react";

import Moon from "./Icons/Moon";
import Sun from "./Icons/Sun";

const ToggleTheme = () => {
  const themes = ["light", "dark"];
  const [selected, setSelected] = useState(themes[0]);

  useEffect(() => {
    setSelected(getTheme());
  }, []);

  const themeEvent = () => {
    const newTheme = selected === themes[0] ? themes[1] : themes[0];
    setSelected(newTheme);
    setTheme(newTheme);
    console.log(newTheme);
  };

  return (
    <button
      className="relative p-2 group rounded-md cursor-pointer bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 duration-200 ease-in-out"
      onClick={() => themeEvent()}
    >
      <span>
        {selected === themes[0] ? (
          <Moon className="h-5" />
        ) : (
          <Sun className="h-5" />
        )}
      </span>
    </button>
  );
};

export default ToggleTheme;
