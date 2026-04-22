import { Routes, Route } from 'react-router-dom';
import ReachUs from './pages/ReachUs';
import ITServices from './pages/ITServices';
import Reviews from './pages/Reviews';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ReachUs />} />
      <Route path="/it-services" element={<ITServices />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  );
}

export default App;
