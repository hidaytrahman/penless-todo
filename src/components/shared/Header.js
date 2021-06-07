import { FormControlLabel, FormGroup, Switch } from "@material-ui/core";
import { useState } from "react";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
        document.body.classList.toggle("dark-theme");
    } else if (currentTheme == "light") {
        document.body.classList.toggle("light-theme");
    }

    const toggleChecked = () => {
        setDarkMode(!darkMode);
        if (prefersDarkScheme.matches) {
            document.body.classList.toggle("light-theme");
            var theme = document.body.classList.contains("light-theme")
                ? "light"
                : "dark";
        } else {
            document.body.classList.toggle("dark-theme");
            var theme = document.body.classList.contains("dark-theme")
                ? "dark"
                : "light";
        }
        localStorage.setItem("theme", theme);
    }

    
    return (
        <header className="main-header">
            <div className="container">
                <h1>🖊️Less - To Do </h1>
                <h3>PenLess To Do gives you focus, from work to play. 😎</h3>
                <FormGroup className="d-flex align-items-end">

                    <FormControlLabel
                        control={<Switch checked={darkMode}
                            onChange={toggleChecked}
                        />}
                        label="Dark Mode"
                    />
                </FormGroup>

            </div>

        </header>
    )
}

export default Header;