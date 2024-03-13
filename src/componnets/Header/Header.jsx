import Blogs from "../Bologs/Blogs";
import profile from '../../assets/profile.png'
import Bookmerks from "../Bookmerks/Bookmerks";
const Header = () => {
    return (
        <div >
            <div className="bg-slate-500  ">
                <div className="flex justify-between p-3 items-center max-w-[80%] mx-auto">
                    <h1 className='text-3xl    font-bold text-white'>Knowledge Cafe</h1>
                    <img src={profile} alt="" />
                </div>
            </div>
            <div className="max-w-[80%] mx-auto md:flex mt-5">
                <Blogs></Blogs>
                <Bookmerks></Bookmerks>
            </div>
        </div>
    );
};

export default Header;