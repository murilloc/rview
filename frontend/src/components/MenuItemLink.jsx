import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const MenuItemLink = ({path, label, isActive}) => {
    return (
        <Link
            to={path}
            className={`block px-4 py-2 ${isActive ? "bg-gray-600" : ""}`}
        >
            {label}
        </Link>
    );
};

// Declaração dos tipos esperados
MenuItemLink.propTypes = {
    path: PropTypes.string.isRequired, // Caminho do link (obrigatório)
    label: PropTypes.string.isRequired, // Texto do link (obrigatório)
    isActive: PropTypes.bool, // Estado de ativo (opcional)
};

export default MenuItemLink;