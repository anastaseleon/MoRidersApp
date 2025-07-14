import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                {/* Add login, register, profile, etc. later */}
            </Routes>
        </Router>
    );
}

export default App;
