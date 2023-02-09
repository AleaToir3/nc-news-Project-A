import { Link } from "react-router-dom";
import '../css/mynav.css'
import { FcBusinessman } from "react-icons/fc";


const MyNav = () => {

  return (
    <div className="mynav">
      <nav>
        <ul>
          <Link to = "/"><li>Index</li></Link >
          <Link to = "/Articles"><li>Articles</li></Link >
          <Link to = "/Profile"><li>My profile</li></Link >
        </ul>
        <div>
          <FcBusinessman className="FcBusinessman"/>          

        </div>
      </nav>
    </div>
  );
};
export default MyNav;
