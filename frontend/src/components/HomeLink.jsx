import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const HomeLink = ({path}) => {
    return (
        <li>
            <Link to={path} className="hover:bg-red-500 px-4 py-2 rounded block">
                Home
            </Link>
        </li>
    );
};

// Declaração dos tipos esperados
HomeLink.propTypes = {
    path: PropTypes.string.isRequired, // Caminho para logout
};

export default HomeLink;