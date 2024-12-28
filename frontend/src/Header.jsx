import React from "react";
import Logo from "./components/Logo.jsx";
import NavigationMenu from "./components/NavigationMenu.jsx";
import MenuItemGroup from "./components/MenuItemGroup.jsx";
import LogoutLink from "./components/LogoutLink.jsx";

const Header = () => {
    return (
        <header className="bg-red-600 text-white">
            <nav className="flex items-center justify-between px-8 py-4">
                {/* Logo */}
                <Logo />

                {/* Navigation Menu */}
                <NavigationMenu>
                    {/* Administração */}
                    <MenuItemGroup
                        title="Administração"
                        items={[
                            { path: "/admin/usuarios", label: "Usuários" },
                            { path: "/admin/logs", label: "Logs" },
                            { path: "/admin/performance", label: "Performance" },
                        ]}
                    />

                    {/* Gráficos */}
                    <MenuItemGroup
                        title="Gráficos"
                        items={[
                            { path: "/graficos/cisco", label: "Cisco" },
                            { path: "/graficos/nokia", label: "Nokia" },
                        ]}
                    />

                    {/* Relatórios */}
                    <MenuItemGroup
                        title="Relatórios"
                        items={[
                            { path: "/relatorios/cisco", label: "Cisco" },
                            { path: "/relatorios/nokia", label: "Nokia" },
                        ]}
                    />

                    {/* Logout */}
                    <LogoutLink path="/logout" />
                </NavigationMenu>
            </nav>
        </header>
    );
};

export default Header;