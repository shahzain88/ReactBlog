
// to prevent react accseing to server we need to use react-router-dom Link component insted of anker tag in html (a)
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" >
            <h1>_Al ZaIn Blog</h1>
            <div className="navlinks">
                <Link to="/">Home</Link>
                <Link to="/my-works">Work</Link>
                {/* Ex. of in line style in react */}
                {/* add this to it*/}
                {/*style={{
                    color: "#e6e6e6",
                    backgroundColor: "#fb7642",
                    borderRadius: "15px"
                }}   */}
                <Link className="btn-new-blog" to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;