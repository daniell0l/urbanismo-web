import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../screens/home';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
