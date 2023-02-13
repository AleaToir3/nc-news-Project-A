import { useEffect, useState } from "react";
import { articlesAPI } from "../utils";
import SearchBar from "../components/SearchBar";
import AllArticles from "../components/AllArticles";

const IndexArticles = () => {
  

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    articlesAPI().then((res) => {
      setArticles(res.articles);
      setIsLoading(false);
    })   
  }, [setArticles]);

if (isLoading) return <p className="load-txt">Loading...</p>;
else{ return (
    <>
      <SearchBar />
      <AllArticles articles={articles} setArticles={setArticles}/>
    </>
  );
};
}
export default IndexArticles;

