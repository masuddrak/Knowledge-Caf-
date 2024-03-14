import Blogs from "../Bologs/Blogs";
import profile from '../../assets/profile.png'
import Bookmerks from "../Bookmerks/Bookmerks";
import { useState } from "react";
import { toast } from "react-toastify";
const Header = () => {
    // handel read mark
    const [readMarkBook, setReadMarkBook] = useState([])
    const handelTitleBook = (title) => {
        const newReadMarkBook = [...readMarkBook, title]
        const alreadyExistTitel = readMarkBook.find(items => items == title)
        if (!alreadyExistTitel) {
            toast.success("Read Added")
            setReadMarkBook(newReadMarkBook)
        }
        else {
            toast.warn("already Exist ")
            // alert("already exist the element")
        }
    }
    // readin timme handel
    const [readTime, setReadTime] = useState(0)
    const [totalRead, setTotalRead] = useState(30)
    const hadelReadingTime = (time) => {
        if (totalRead >= time) {
            setTotalRead(totalRead - time)
        }
        else if (totalRead <= time) {
            return toast.warn("already finish ")
        }
        setReadTime(readTime + time)
    }

    const [hidenClass,setHidenClass]=useState('')


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
                <Bookmerks readMarkBook={readMarkBook} readTime={readTime} totalRead={totalRead} hidenClass={hidenClass}></Bookmerks>
            </div>
        </div>
    );
};

export default Header;