import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Cart from "./pages/Cart.jsx"; // カートコンポーネントをインポート
import Navbar from "./components/Navbar.jsx"; // ナビゲーションバーコンポーネントをインポート

function App() {
  return (
    <Router>
      <Navbar /> {/* ナビゲーションバーを追加 */}
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/cart" element={<Cart />} /> {/* カートのルートを追加 */}
      </Routes>
    </Router>
  );
}

export default App;
