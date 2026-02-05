import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ApiService from "./pages/ApiService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/:provider/:apiName" element={<ApiService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
