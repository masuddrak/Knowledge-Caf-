import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handelTitleBook,hadelReadingTime}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch ("knowlege-data.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog} handelTitleBook={handelTitleBook} hadelReadingTime={hadelReadingTime}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handelTitleBook:PropTypes.func,
    hadelReadingTime:PropTypes.func,
   
}
export default Blogs;