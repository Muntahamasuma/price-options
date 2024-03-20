import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-10 hover:bg-rose-600 px-2">
             <a href={route.path}>
                {route.name}</a>
        </li>
    );
};

Link.propTypes= {
    route: PropTypes.object
}

export default Link;