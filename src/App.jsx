import { ProductProvider } from "./context/ProductsContext";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <ProductProvider>
      <ProductsPage />
    </ProductProvider>
  );
}

export default App;
