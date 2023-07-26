import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../screens/home';
import Login from '../screens/login'

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
