import React, { createContext, useState } from "react";

const ScoreContext = createContext({ score: 0, setScore: () => {} });

const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export { ScoreContext, ScoreProvider };
