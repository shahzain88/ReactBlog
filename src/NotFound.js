import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sory</h2>
            <p>This page not found</p>
            <Link to="/">go home</Link>
        </div>
    );
}


export default NotFound;