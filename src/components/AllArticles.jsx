import { Link,  } from "react-router-dom";
import convertDate from "../functions/date";
import "../css/allArticles.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AllArticles = ({articles,setArticles}) => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const params = searchParams.get("categories");
  const [dataFilter, setDataFilter] = useState([]);

  const { categories } = useParams();
  console.log(">>>",categories);



  useEffect(() => {
    if(params){
      const ddFilter = articles.filter((e)=>e.topic===params)
      setDataFilter(ddFilter)
    }else{
      setDataFilter(articles)
    }
  }, [setDataFilter,params])

return(     
      <div className="all">
        <h1>all articles ici</h1>
        {dataFilter.map((e) => {
          return (
            <div key={e.article_id} className="Last4Cards">               
              <Link to={`/articles/${e.article_id}`}>  
              
                <div className="global">
                  <div className="divImg">
                    <img src={e.article_img_url} alt="picture of article" />
                  </div>
                  <div>
                    <div className="headercard">
                      <h3>{e.article_id}-{e.author}</h3>
                      <p>Topic :{e.topic}</p>
                      <p>{convertDate(e.created_at)}</p>
                    </div>
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
  );
}
export default AllArticles;
