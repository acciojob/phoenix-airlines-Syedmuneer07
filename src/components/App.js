
import React from "react";
import { BrowserRouter } from "react-router-dom";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<landing />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
