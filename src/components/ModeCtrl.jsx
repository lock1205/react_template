import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react';

const ModeCtrl = ({ setBackground }) => {
  const [darkMode, setDarkMode] = useState(true);

  const handleDay = () => {
    setDarkMode(!darkMode);
    setBackground(darkMode);
  };

  return <button onClick={handleDay}>{darkMode ? <Sun /> : <Moon />}</button>;
};

export default ModeCtrl;
