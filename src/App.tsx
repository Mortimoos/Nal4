import React, { useContext } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { GlobalContext } from './context/GlobalContext';
import Teams from './components/Teams';
import TeamDetails from './components/TeamDetails';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import teams from './temp/ekipe';
import 'bootstrap/dist/css/bootstrap.min.css';


const MainLayout: React.FC = () => {
  const { selectedTeam } = useContext(GlobalContext);

  return (
    <>
      <Header team={selectedTeam} />
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
        { index: true, element: <Teams teams={teams} /> },
        { path: 'team/:id', element: <TeamDetails /> }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
