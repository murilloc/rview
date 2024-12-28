import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const LogoutLink = ({ path }) => {
    return (
        <li>
            <Link
                to={path}
                className="hover:bg-red-500 px-4 py-2 rounded block"
            >
                Logout
            </Link>
        </li>
    );
};

// Declaração dos tipos esperados
LogoutLink.propTypes = {
    path: PropTypes.string.isRequired, // Caminho para logout
};

export default LogoutLink;