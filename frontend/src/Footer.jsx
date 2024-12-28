import { useState, useEffect } from 'react';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    return (
        <footer className="bg-gray-100 text-gray-700 py-4">
            <div className="container mx-auto text-center">
                <p>Data e Hora Atual: {currentTime.toLocaleString()}</p>
            </div>
        </footer>
    );
};

export default Footer;
