import {Menu} from "@headlessui/react";
import MenuItemLink from "./MenuItemLink";
import PropTypes from "prop-types";

const MenuItemGroup = ({title, items}) => {
    return (
        <li>
            <Menu as="div" className="relative">
                <Menu.Button className="hover:bg-red-500 px-4 py-2 rounded">
                    {title}
                </Menu.Button>
                <Menu.Items className="absolute left-0 mt-2 w-48 bg-gray-700 text-white text-sm rounded shadow-lg">
                    {items.map((item, index) => (
                        <Menu.Item key={index}>
                            {({active}) => (
                                <MenuItemLink
                                    path={item.path}
                                    label={item.label}
                                    isActive={active}
                                />
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Menu>
        </li>
    );
};

// Declaração dos tipos esperados para as props
MenuItemGroup.propTypes = {
    title: PropTypes.string.isRequired, // 'title' precisa ser uma string
    items: PropTypes.arrayOf(          // 'items' precisa ser um array de objetos
        PropTypes.shape({
            path: PropTypes.string.isRequired, // Cada item deve possuir `path` (string)
            label: PropTypes.string.isRequired, // E `label` (string)
        })
    ).isRequired,
};

export default MenuItemGroup;