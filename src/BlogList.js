import { Link } from 'react-router-dom';

// you can acsses to props like this 
// noemal way
// const BlogList = (props) => {
//     const blogs = props.blogs;
//     console.log(blogs)
// }

// easy way to accsses props 
// by destructchuring it in side ()'s
// Ex.
// ({blogs,.....}) 
// as musch as you like
const BlogList = ({ blogs }) => {

    // const blogs = props.blogs;
    // console.log(blogs)

    return (
        <div className="blogs">
            {/* <h2>{title}</h2> */}
            {blogs.map((blog) => (
                <div className="blog-previwe" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        {/* <button onClick={() => hendleDelete(blog.id)}>X</button> */}
                        <p>author <i>{blog.author}</i> </p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
