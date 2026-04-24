/**
 * App.jsx
 * Main application component that defines the routing structure using React Router.
 */

import { Routes, Route } from 'react-router-dom';
import ReachUs from './pages/ReachUs';
import ITServices from './pages/ITServices';
import Reviews from './pages/Reviews';
import RecruitmentPolicies from "./pages/RecruitmentPolicies";

/**
 * App component handles the top-level routing for the website.
 * @returns {JSX.Element} The rendered component with defined routes.
 */
function App() {
  return (
    <Routes>
      {/* Home page / Contact page */}
      <Route path="/" element={<ReachUs />} />
      
      {/* IT Services detailed page */}
      <Route path="/it-services" element={<ITServices />} />
      
      {/* Customer reviews and testimonials */}
      <Route path="/reviews" element={<Reviews />} />
      
      {/* Recuitment policies */}
      <Route path="/recruitment-policies" element={<RecruitmentPolicies />} />

    </Routes>
  );
}

export default App;

