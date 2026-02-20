import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VersionA from './components/version-a/VersionA';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VersionA />} />
      </Routes>
    </Router>
  );
}

export default App;
