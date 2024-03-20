import PropTypes from 'prop-types'
import { IoMdCheckmarkCircle } from "react-icons/io";
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-4 text-lg'>
            <IoMdCheckmarkCircle></IoMdCheckmarkCircle>{feature}
            </p>
        </div>
    );
};

Feature.propTypes={
    feature: PropTypes.object
}

export default Feature;