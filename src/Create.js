import { useState } from 'react';
// to redirect or to go back or forwerd in web history
import { useHistory } from 'react-router-dom';
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('zain');
    const [isPanding, setIsPanding] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPanding(true);
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPanding(false);
            console.log("new added blog");
            // history.go(1) forwored
            // history.go(-1); //backwords
            // push will push to the route given
            history.push('/');
        });

    }


    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>

                <label>Blog title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <label>Blog body:</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>

                <label>Blog author:</label>
                <select
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                >
                    <option value="zain">zain</option>
                    <option value="zaintwo">zaintwo</option>
                </select>
                <p>{title} ,{body},{author}</p>
                {!isPanding && <button type="submit">Add blog</button>}
                {isPanding && <button type="submit" disabled >Adding blog</button>}



            </form>
        </div>
    );
}

export default Create;