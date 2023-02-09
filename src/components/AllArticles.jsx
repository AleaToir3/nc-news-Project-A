import { articlesAPI } from "../utils";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articlesAPI().then((res) => {
      setArticles(res.articles);
      console.log(res);
    });
  }, []);

  const convertDate = (date) => {
    const newDate = new Date(date);
    return newDate.toDateString("default", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  };
  return (
    <>
      <SearchBar />

      <div className="">
        {articles.map((e) => {
          return (
            <div key={e.article_id} className="Last4Cards">               
              <Link to={`/articles/${e.article_id}`}>               
              <div>
                <div>
                  <div>
                    <h3>{e.article_id}-{e.author}</h3>
                    <p>Topic :{e.topic}</p>
                    <p>{convertDate(e.created_at)}</p>
                  </div>
                  <img src={e.article_img_url} alt="picture of article" />
                  <div>
                    <p>title :{e.title}</p>
                    <p>body :{e.body}</p>
                  </div>
                </div>
              </div>
              </Link >
            </div>
          );
        })}
      </div>
    </>
  );
};
export default AllArticles;
