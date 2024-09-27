import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { topicsAPI } from "../utils";
const SearchBar = () => {
  const [topicsCategories, setTopicsCategories] = useState([]);

  useEffect(() => {
    topicsAPI().then((res) => {
      setTopicsCategories(res.topics);
    });
  }, []);

  return (
    <div>
      {topicsCategories.map((e) => {
        return (
          <div key={e.slug}>
            <Link to={`/articles?categories=${e.slug}`}>{e.slug}</Link>
          </div>
        );
      })}
    </div>
  );
};
export default SearchBar;
