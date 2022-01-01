import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import ArticleList from "./screens/ArticleList";
import AddArticle from "./screens/AddArticle";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" exact element={<ArticleList />} />
          <Route path="/AddArticle" element={<AddArticle />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
