import PropTypes from 'prop-types';
const AddBookMark = ({mark}) => {
    return (
        <div className='bg-gray-300 p-4 rounded-md my-3'>
            <h3>{mark}</h3>
        </div>
    );
};
AddBookMark.propTypes={
    mark:PropTypes.string,
   
}
export default AddBookMark;