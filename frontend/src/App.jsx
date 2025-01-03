import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./components/Home";
import AdminUsuarios from "./components/AdminUsuarios";
import AdminLogs from "./components/AdminLogs";
import AdminPerformance from "./components/AdminPerformance";
import GraficosCisco from "./components/GraficosCisco";
import GraficosNokia from "./components/GraficosNokia";
import RelatoriosCisco from "./components/RelatoriosCisco";
import RelatoriosNokia from "./components/RelatoriosNokia.jsx";
import Logout from "./components/Logout";

// Configuração principal do App
const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <Routes>
                    {/* Rotas para cada item do menu */}
                    <Route path="/" element={<Home/>} />
                    <Route path="/admin/usuarios" element={<AdminUsuarios />} />
                    <Route path="/admin/logs" element={<AdminLogs />} />
                    <Route path="/admin/performance" element={<AdminPerformance />} />
                    <Route path="/graficos/cisco" element={<GraficosCisco />} />
                    <Route path="/graficos/nokia" element={<GraficosNokia />} />
                    <Route path="/relatorios/cisco" element={<RelatoriosCisco />} />
                    <Route path="/relatorios/nokia" element={<RelatoriosNokia />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;