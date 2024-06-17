import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Cart from "./pages/Cart.jsx"; // Import the Cart component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/cart" element={<Cart />} /> {/* Add route for Cart */}
      </Routes>
    </Router>
  );
}

export default App;
