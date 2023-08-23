import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customStyles from "./customStyles";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/Login";
import ProductPage from "./pages/Productpage";
import Products from "./pages/Products";
import Userpage from "./pages/Userpage";

export default function App() {
  return (
    <main>
      <ThemeProvider theme={customStyles}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="product" element={<ProductPage />} />
              <Route path="products" element={<Products />} />
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="user" element={<Userpage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </main>
  );
}
