import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Navbar";
import Dashboard from "./page/Dashboard";
import Leads from "./page/Leads";
import Batteries from "./page/Batteries";
import Finance from "./page/Finance";

function App() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen">
        <Sidebar />
        <div className="flex-1 md:p-6 p-0 min-h-screen md:min-h-0">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/batteries" element={<Batteries />} />
            <Route path="/finance" element={<Finance />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
