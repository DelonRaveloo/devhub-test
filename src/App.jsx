import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Assignations from './pages/Assignations';
import Reporting from './pages/Reporting';
import Sidebar from './components/Sidebar';
import './Styles/App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 bg-gray-50 p-6 overflow-auto">
          <Routes>
            <Route path="/assignations" element={<Assignations />} />
            <Route path="/reporting" element={<Reporting />} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
