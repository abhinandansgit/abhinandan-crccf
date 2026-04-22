import { Routes, Route } from 'react-router-dom';
import ReachUs from './pages/ReachUs';
import ITServices from './pages/ITServices';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ReachUs />} />
      <Route path="/it-services" element={<ITServices />} />
    </Routes>
  );
}

export default App;
