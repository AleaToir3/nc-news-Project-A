import { articlesAPI } from "../utils";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articlesAPI().then((res) => {
      setArticles(res.articles);
      console.log(res);
    });
  }, []);
  return (
    <>
      <SearchBar />

      <div className="">
        {articles.map((e) => {
          return (
            <div key={e.article_id} className="Last4Cards">
              <h3>
                {e.article_id} - Author :{e.author}
              </h3>
              <p></p>
              <p>Topic :{e.topic}</p>
              <p>
                Create at:
                {new Date(e.created_at).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                })}
              </p>
              <p>title :{e.title}</p>
              <p>body :{e.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default AllArticles;
