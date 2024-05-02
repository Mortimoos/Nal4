import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import React, {useContext} from "react";
import {GlobalContext} from "./context/GlobalContext.tsx";
import Header from "./components/global/Header.tsx";
import Noga from "./components/global/Noga.tsx";
import Body from "./components/global/Body.tsx";
import Teams from "./components/Ekipa.tsx";
import teams from "./data/ekipe.ts";
import TeamDetails from "./components/EkipaDet.tsx";

const MainLayout: React.FC = () => {
    const { selectedTeam } = useContext(GlobalContext);

    return (
        <>
            <Header team={selectedTeam} />
            <Body team={selectedTeam} />
            <div className="my-3">
                <Outlet />
            </div>
            <Noga />
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

// Ustvarimo folder Interfaces, noter damo interfaces/classes
//Ustvarimo folder Data, ki ima index.ts in exportamo array, ki pa zadovolji
// struktoro od interfaces. Potem pa importam data v vse fajle, kjer to uporabljam
//in ni vec json data format, temvec js
