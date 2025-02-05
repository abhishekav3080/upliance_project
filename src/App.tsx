import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";

const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Counter />
          <RichTextEditor />
        </div>
        <UserForm />
        {/* Add route for dashboard visualization here */}
      </div>
    </Router>
  );
};

export default App;
