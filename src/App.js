import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import FavoritePage from "./pages/FavoritePage";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/catalog" element={<CatalogPage />}></Route>
        <Route path="/favorites" element={<FavoritePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
