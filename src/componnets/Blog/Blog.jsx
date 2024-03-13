import { FaBookmark  } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    const { img, author_name, hashtag, read_time, release_date, title } = blog
    console.log(blog)
    return (
        <div className="space-y-3 mb-10">
            <img className="w-full rounded-md" src={img} alt="" />
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
                    <FaBookmark ></FaBookmark >
                </div>
            </div>
            <h2 className='text-3xl font-semibold'>{title}</h2>
            <p className='text-gray-400'>{hashtag}</p>
            <button className='underline text-green-500'>Mark as read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object
}
export default Blog;