import { useState } from "react";

"QUIZ" | "EDIT";

export default function useMode(modes, initial) {
  const [mode, setMode] = useState(initial);

  const switchTo = (newMode) => {
    if (Object.values(modes).includes(newMode)) {
      setMode(newMode);
    }
  };

  return { currentMode: mode, modes, switchTo };
}
