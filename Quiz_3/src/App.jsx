import React from 'react'
import First from './Components/First'
import Second from './Components/Second'
import Third from './Components/Third'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ScoreProvider } from './Components/Context/Score';
const App = () => {
  return (
    <ScoreProvider>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/2" element={<Second />} />
          <Route path="/3" element={<Third />} />
        </Routes>
      </div>
    </Router>
    </ScoreProvider>
    
  );
  
}

export default App