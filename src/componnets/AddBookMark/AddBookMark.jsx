import PropTypes from 'prop-types';
import { FaDeleteLeft } from "react-icons/fa6";

const AddBookMark = ({ mark,hidenClass }) => {
    return (
        <div className='bg-gray-300 p-4 rounded-md my-3 flex justify-between '>
            <h3>{mark}</h3>
            <button className={hidenClass}><FaDeleteLeft />
            </button>
        </div>
    );
};
AddBookMark.propTypes = {
    mark: PropTypes.string,

}
export default AddBookMark;