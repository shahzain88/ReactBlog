// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // let [counter, setCounter] = useState(0);

    // const hendle_btn_counter = () => {
    //     setCounter(counter + 1);
    // }
    // let myname = "Kaito"
    // const hendle_btn_something_with_args = (e, myname) => {
    //     console.log(`Hello and wlcome , ${myname}`, e);
    // }
    // // if we wanted to pass args in onClick = {} then we need unsaved function witch call's The Fuction
    // like this  onClick={ () => TheFunction("arg1","arge2","arg*" ...)}
    // onClick gives you Event object, locate in firest index of arguments

    // const [blogs, setBlog] = useState([
    //     { title: "My jorny towords react", body: "I started react. it is fun to use and easy for me.", author: "Zain", id: 1 },
    //     { title: "My jorny towords python", body: "I started python. it is fun to use and easy for me.", author: "Baz", id: 2 },
    //     { title: "My jorny towords Ruby on Rails", body: "I started Ruby on Rails. it is fun to use and easy for me.", author: "Zain", id: 3 }

    // ]);


    // const hendleDelete = (id) => {
    //     const newBlog = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlog);
    // }

    // useEffact run's every time when the component rerenders 

    // to run when on first relode
    //    add [] to the nex pram
    // useEffect(() => {
    //     console.log("reloded");
    // },[]);

    // to specify the change of specific point to run the effect func
    //   add [nameofvalue]
    // useEffect(() => {
    //     console.log("reloded");
    // },[blogs]);

    // const [blogs, setBlogs] = useState(null);
    // const [isPanding, setIsPanding] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch("http://localhost:8000/blogs").then(
    //             (res) => {
    //                 if (!res.ok) {
    //                     throw Error("could not fetch the data for that resource")
    //                 }
    //                 return res.json(); // change json to js object
    //             }
    //         ).then(
    //             (data) => {
    //                 setBlogs(data);
    //                 setIsPanding(false)
    //             }

    //         ).catch(
    //             (err) => {
    //                 setError(err.message);
    //                 setIsPanding(false);
    //             }
    //         );
    //     }, 1000)

    // }, []);

    // use costome hocks insted of hard codeing like up

    const { data: blogs, isPanding, error } = useFetch("http://localhost:8000/blogs")

    return (
        <div className="Homepage">
            {/* <h1>welcome to home page </h1> */}
            {/* <p>{counter} clicks</p> */}
            {/* <button onClick={hendle_btn_counter}>Click :)</button> */}
            {/* <button onClick={(e) => hendle_btn_something_with_args(e, myname)}>click me again, {myname} ('v')</button> */}

            {/* prop in react ... */}
            {error && <div className="error">{error}</div>}
            {isPanding && <div className="ispanding">Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}

            {/* it is re useable to make Blog componrnt insted  */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Baz")} title="Baz blogs" /> */}

        </div>
    );
}

export default Home;