import Index from "./components/Index";
import MyNav from "./components/MyNav";
import Profile from "./components/Profile";
import Article from "./components/Article";
import AllArticles from "./components/AllArticles";
import { Route, Routes } from "react-router-dom";
import "./css/App.css";


function App() {
  return (
    <div className="App">
      <MyNav />
        <div className="container">
      <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/articles" element={<AllArticles />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
        </div>
    </div>
  );
}

export default App;
