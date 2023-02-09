import "../css/index.css"
import { Link } from "react-router-dom";
const Last4Cards = (articles) => {
    console.log("🚨🔥  file: Last4Cards.jsx:2  Last4Cards  articles", articles);
    
    const convertDate = (date) => {
        const newDate = new Date(date);
        return newDate.toDateString('default', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'});
    }
  
    return (
        < >
            {articles.articles.map((e)=>{
                return (
                    <div key={e.article_id} className="Last4Cards">
                        <Link to={`/articles/${e.article_id}`}>  
                        
                        <img src={e.article_img_url} alt="" />
                        <h4>{e.title}</h4>
                        <div>
                            {/* <h5>{e.author} </h5> */}
                        </div>
                        {/* <p>Topic :{e.topic}</p> */}
                        <p>body :{e.body.substring(0, 250) + "..."}</p>
                        </Link>
                    </div>
                )
            }
            )}
        </>
    )
}
export default Last4Cards