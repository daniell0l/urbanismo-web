import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../screens/home';
import Login from '../screens/login'
import Register from '../screens/register/index'
import Principal from '../screens/principal/index'
import AlvaraConstrucao from '../screens/alvaraConstrucao/index'

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Principal" element={<Principal />} />
        <Route path='/AlvaraConstrucao' element={<AlvaraConstrucao />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
