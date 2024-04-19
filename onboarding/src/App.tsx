import React from "react";
import Title from "./Components/Title/Title";

// Functional component for the main App
const App: React.FC = () => {
  return (
    <div className="app">
      <Title />
    </div>
  );
};

// Exporting the App component for use in other parts of the application
export default App;
