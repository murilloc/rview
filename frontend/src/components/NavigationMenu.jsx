import PropTypes from "prop-types";

const NavigationMenu = ({ children }) => {
    return <ul className="flex space-x-6">{children}</ul>;
};

// Declaração dos tipos esperados para as props
NavigationMenu.propTypes = {
    children: PropTypes.node.isRequired, // 'children' deve ser um React Node (elementos JSX) e é obrigatório
};

export default NavigationMenu;