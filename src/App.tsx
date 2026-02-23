import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeV2 from './pages/HomeV2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2" element={<HomeV2 />} />
      </Routes>
    </Router>
  );
}

export default App;
