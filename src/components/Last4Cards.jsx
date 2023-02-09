import "../css/index.css"
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
                        <Link></Link>
                        <img src={e.article_img_url} alt="" />
                        <h4>{e.title}</h4>
                        <div>
                            {/* <h5>{e.author} </h5> */}
                        </div>
                        {/* <p>Topic :{e.topic}</p> */}
                        <p>body :{e.body.substring(0, 250) + "..."}</p>
                        <p className="date">{convertDate(e.created_at)}</p>
                    </div>
                )
            }
            )}
        </>
    )
}
export default Last4Cards