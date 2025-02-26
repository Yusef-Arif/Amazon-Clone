import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductsPage from "./pages/ProductsPage";
import { AuthProvider } from "./contexts/AuthContext";
import { ProductProvider } from "./contexts/ProductsContext";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
