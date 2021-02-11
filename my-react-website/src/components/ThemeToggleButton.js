import React, {useState, useEffect}from "react";
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const lightMode = 'light'
const darkMode = 'dark'
const THEME = 'theme'

const ThemeToggleButton = () => {
  const body = document.body

  const [theme, setTheme] = useState(localStorage.getItem(THEME) || lightMode)


  useEffect(() => {
    if (theme) {
      localStorage.setItem(THEME, theme)
      body.classList.add(theme)
    }
    // eslint-disable-next-line
  }, [theme])

  const switchTheme = () => {
    if (theme === darkMode) {
      body.classList.replace(darkMode, lightMode)
      setTheme(lightMode)
    } else {
      body.classList.replace(lightMode, darkMode)
      setTheme(darkMode)
    }
  }

  return (
    <button
      aria-label="Night day toggle button"
      id="darkMode"
      onClick={switchTheme}
    >
      <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} />
    </button>
  )
}
export default ThemeToggleButton;
