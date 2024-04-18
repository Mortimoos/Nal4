import {createBrowserRouter, Link, Outlet, RouterProvider, useParams} from 'react-router-dom';
import React from "react";
import Ekipa from "./components/Ekipa.tsx";
import {GlobalContext} from "./context/GlobalContext.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <SeznamEkip ekipa={teamData.ekipa}/>
    },
    {
        path: '/team/:id',
        element: <TeloWrapper />
    }
])

export function TeloWrapper() {
    const {id} = useParams();
    const teamId = parseInt(id);
    // const ekipa = teamData.ekipa.map((ekipa, index) => ({id: index + 1, ekipa})); //mapped id to index position

    const team = teamData.ekipa.find(team => team.id === teamId);

    console.log(team)


    return (<div>
        <Menu ekipa={team}/>
        <Telo ekipa={team}/>
        <Noga className="menu"/>
    </div>)
}

function App() {
    console.log("BLA",teamData.ekipa);

    return <div>
        <ul>
            {teamData.ekipa.map((team, index) => (
                <li key={index}>
                    <Link to={`/team/${team.id}`}>{team.ime}</Link>
                </li>
            ))}
        </ul>
        <Outlet/>
    </div>

}

export default App;

// Ustvarimo folder Interfaces, noter damo interfaces/classes
//Ustvarimo folder Data, ki ima index.ts in exportamo array, ki pa zadovolji
// struktoro od interfaces. Potem pa importam data v vse fajle, kjer to uporabljam
//in ni vec json data format, temvec js
