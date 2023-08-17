import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../screens/home';
import Login  from '../screens/login/'
import  Register  from '../screens/register'
import { Principal } from '../screens/principal'
import AlvaraConstrucao from '../screens/alvaraConstrucao'
import { AlvaraRegularizacao } from '../screens/alvaraRegularizacao'
import  Condominio  from '../screens/condominio'
import { Resizing } from '../screens/resizing'
import { ProjectPermit } from '../screens/projectPermit'
import { ConstructionPermit } from '../screens/constructionPermit';
import { RegularizationPermit } from '../screens/regularizationPermit';
import { CondominiumSituation } from '../screens/condominiumSituation';
import { ResizingSituation } from '../screens/resizingSituation';
import { ListUser } from '../screens/listUser';
import { ListClients } from '../screens/listClients';
import { Profile } from '../screens/profile';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Principal" element={<Principal />} />
        <Route path='/AlvaraConstrucao' element={<AlvaraConstrucao />} />
        <Route path='/AlvaraRegularizacao' element={<AlvaraRegularizacao />} />
        <Route path='/Condominio' element={<Condominio />} />
        <Route path='/Resizing' element={<Resizing />} />
        <Route path='/ProjectPermit' element={< ProjectPermit/>} />
        <Route path='/ConstructionPermit' element={< ConstructionPermit/>} />
        <Route path='/RegularizationPermit' element={< RegularizationPermit/>} />
        <Route path='/CondominiumSituation' element={< CondominiumSituation/>} />
        <Route path='/ResizingSituation' element={< ResizingSituation/>} />
        <Route path='/ListUser' element={<ListUser />} />
        <Route path='/ListClients' element={<ListClients  />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;