import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-sky-300 rounded-xl p-4 space-y-10 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-6xl font-bold'>{price}</span>
                <span className='text-3xl'>/month</span>
                
            </h2>
            <h4 className='text-center text-2xl font-semibold bg-orange-200 rounded-sm'>{name}</h4>
            <div className='flex-grow bg-sky-200 p-2 rounded-md space-y-4'>
            {
                features.map(feature => <Feature key={feature.id} feature={feature}></Feature>)
            }
            </div>
            <button className="btn btn-warning w-full hover:bg-sky-800 hover:text-white">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes={
    option: PropTypes.object
}

export default PriceOption;