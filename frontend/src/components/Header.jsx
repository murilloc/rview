//import React from 'react';

const Header = () => {
    return (
        <header className="bg-red-600 text-white py-4">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">RView</div>
                <ul className="flex space-x-6">
                    <li className="hover:underline cursor-pointer">Administração</li>
                    <li className="hover:underline cursor-pointer">Gráficos</li>
                    <li className="hover:underline cursor-pointer">Relatórios</li>
                    <li className="hover:underline cursor-pointer">Logout</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
