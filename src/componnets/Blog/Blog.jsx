import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Blog = ({ blog, handelTitleBook, hadelReadingTime }) => {
    const { img, author_name, hashtag, read_time, release_date, title } = blog

    return (
        <div className="space-y-3 mb-10">
            <div className='h-[200px]'>
                <img className="w-full h-full object-cover rounded-md" src={img} alt="" />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                    <img className="w-[50px] h-[50px] rounded-full" src={img} alt="" />
                    <div>
                        <h4 className="font-bold">{author_name}</h4>
                        <p className="text-gray-400">{release_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <span>{read_time} min read</span>
                    <button onClick={() => hadelReadingTime(read_time)}><FaBookmark ></FaBookmark ></button>
                </div>
            </div>
            <h2 className='text-3xl font-semibold'>{title}</h2>
            <p className='text-gray-400'>{hashtag}</p>
            <button onClick={() => handelTitleBook(title)} className='underline text-green-500'>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object,
    handelTitleBook: PropTypes.func,
    hadelReadingTime: PropTypes.func
}
export default Blog;