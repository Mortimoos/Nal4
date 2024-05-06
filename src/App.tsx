import React, { useContext } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { GlobalniKontekst } from './context/GlobalniKontekst.tsx';
import Ekipe from './components/Ekipe.tsx';
import TeamDetails from './components/TeamDetails';
import HeaderBody from './components/global/HeaderBody.tsx';
import Footer from './components/global/Footer';
import teams from './temp/ekipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const MainLayout: React.FC = () => {
  const { selectedTeam } = useContext(GlobalniKontekst);

  return (
    <>
      <HeaderBody team={selectedTeam} />
      <div className="my-3">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Ekipe teams={teams} /> },
        { path: 'team/:id', element: <TeamDetails /> }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
