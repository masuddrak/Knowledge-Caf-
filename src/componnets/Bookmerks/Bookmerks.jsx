import { useState } from "react";
import AddBookMark from "../AddBookMark/AddBookMark";
import PropTypes from 'prop-types';
const Bookmerks = ({readMarkBook,readTime}) => {
  const [totalRead,setTotalRead]=useState(30)
    return (
        <div className="md:w-1/3">
            <h3 className="text-xl border-[1px] border-green-500 p-2 rounded-md">Spent time on read : <span>{readTime}</span> min</h3>
            <div className="bg-white text-black p-3 mt-5">
                <h3 className="text-xl  p-2 rounded-md">Bookmarked Blogs : {readMarkBook.length}</h3>
                {
                    readMarkBook.map((mark,markID)=><AddBookMark key={markID}  mark={mark} ></AddBookMark>)
                }
                <h3 className="text-xl  p-2 rounded-md">Total Reading :{totalRead}hr</h3>
            </div>
        </div>
    );
};
Bookmerks.propTypes={
    readMarkBook:PropTypes.array,
    readTime:PropTypes.number,
   
}
export default Bookmerks;