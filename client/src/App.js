import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom"; 



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
