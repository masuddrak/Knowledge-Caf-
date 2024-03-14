import Blogs from "../Bologs/Blogs";
import profile from '../../assets/profile.png'
import Bookmerks from "../Bookmerks/Bookmerks";
import { useState } from "react";
const Header = () => {
    const [readMarkBook, setReadMarkBook] = useState([])
    const handelTitleBook = (title) => {
        const newReadMarkBook = [...readMarkBook, title]
        const alreadyExistTitel = readMarkBook.find(items => items == title)
        if (!alreadyExistTitel) {
           
            setReadMarkBook(newReadMarkBook)
        }
        else {
            
            alert("already exist the element")
        }
    }
    // readin timme handel
    const [readTime, setReadTime] = useState(0)
    const hadelReadingTime = (time) => {
        setReadTime(readTime + time)
    }
    return (
        <div >
            <div className="bg-slate-500  ">
                <div className="flex justify-between p-3 items-center max-w-[80%] mx-auto">
                    <h1 className='text-3xl    font-bold text-white'>Knowledge Cafe</h1>
                    <img src={profile} alt="" />
                </div>
            </div>
            <div className="md:max-w-[80%] p-4 mx-auto md:flex justify-between mt-5 gap-10">
                <Blogs handelTitleBook={handelTitleBook} hadelReadingTime={hadelReadingTime}></Blogs>
                <Bookmerks readMarkBook={readMarkBook} readTime={readTime}></Bookmerks>
            </div>
        </div>
    );
};

export default Header;