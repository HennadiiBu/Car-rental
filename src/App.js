import { Navigate,  Routes } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.css";

import Header from "./components/Header/Header";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage"));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/catalog" element={<CatalogPage />}></Route>
        <Route path="/favorites" element={<FavoritePage />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
