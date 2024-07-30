import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
