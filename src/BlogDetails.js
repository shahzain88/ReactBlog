// to use params in url we use useParams from react-router-dom witch we installed using npm...
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';
const BlogDetails = () => {
    //useParams contains all params spesifyide in <Router path='/blogs/:params'></Router>
    const { id } = useParams();
    const { data: blog, isPanding, error } = useFetch(' http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log("DELETE on code ok");
            history.push('/');
        })
    }
    return (
        <div className="blog-details">
            {error && <div className='error'>{error}</div>}
            {isPanding && <div className='ispanding'>Loding...</div>}
            {blog && (
                <article className="blog-previwe">
                    <h2>{blog.title}</h2>
                    <p>auther {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}

        </div>
    );
}

export default BlogDetails;