import React from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-red-600 text-white">
            <nav className="flex items-center justify-between px-8 py-4">
                {/* Logo */}
                <div className="text-2xl font-bold">RView</div>

                {/* Menu */}
                <ul className="flex space-x-6">
                    {/* Administração */}
                    <li>
                        <Menu as="div" className="relative">
                            <Menu.Button className="hover:bg-red-500 px-4 py-2 rounded">
                                Administração
                            </Menu.Button>
                            <Menu.Items className="absolute left-0 mt-2 w-48 bg-gray-700 text-white text-sm rounded shadow-lg">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="/admin/usuarios"
                                            className={`block px-4 py-2 ${
                                                active ? "bg-gray-600" : ""
                                            }`}
                                        >
                                            Usuários
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="/admin/logs"
                                            className={`block px-4 py-2 ${
                                                active ? "bg-gray-600" : ""
                                            }`}
                                        >
                                            Logs
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="/admin/performance"
                                            className={`block px-4 py-2 ${
                                                active ? "bg-gray-600" : ""
                                            }`}
                                        >
                                            Performance
                                        </Link>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Menu>
                    </li>

                    {/* Gráficos */}
                    <li>
                        <Menu as="div" className="relative">
                            <Menu.Button className="hover:bg-red-500 px-4 py-2 rounded">
                                Gráficos
                            </Menu.Button>
                            <Menu.Items className="absolute left-0 mt-2 w-48 bg-gray-700 text-white text-sm rounded shadow-lg">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="/graficos/cisco"
                                            className={`block px-4 py-2 ${
                                                active ? "bg-gray-600" : ""
                                            }`}
                                        >
                                            Cisco
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="/graficos/nokia"
                                            className={`block px-4 py-2 ${
                                                active ? "bg-gray-600" : ""
                                            }`}
                                        >
                                            Nokia
                                        </Link>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Menu>
                    </li>

                    {/* Relatórios */}
                    <li>
                        <Menu as="div" className="relative">
                            <Menu.Button className="hover:bg-red-500 px-4 py-2 rounded">
                                Relatórios
                            </Menu.Button>
                            <Menu.Items className="absolute left-0 mt-2 w-48 bg-gray-700 text-white text-sm rounded shadow-lg">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="/relatorios/cisco"
                                            className={`block px-4 py-2 ${
                                                active ? "bg-gray-600" : ""
                                            }`}
                                        >
                                            Cisco
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="/relatorios/nokia"
                                            className={`block px-4 py-2 ${
                                                active ? "bg-gray-600" : ""
                                            }`}
                                        >
                                            Nokia
                                        </Link>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Menu>
                    </li>

                    {/* Logout */}
                    <li>
                        <Link
                            to="/logout"
                            className="hover:bg-red-500 px-4 py-2 rounded block"
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
