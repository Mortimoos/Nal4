import React, { createContext, useState } from 'react';
import Team from "../modules/ekipa.module.ts";
import initialTeams from '../data/ekipe.ts';

export const GlobalContext = createContext<{
    teams: Team[];
    selectedTeam: Team | null;
    setSelectedTeam: (team: Team | null) => void;
}>({
    teams: initialTeams,
    selectedTeam: null,
    setSelectedTeam: () => {},
});

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [teams] = useState<Team[]>(initialTeams);
    const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

    return (
        <GlobalContext.Provider value={{ teams, selectedTeam, setSelectedTeam }}>
            {children}
        </GlobalContext.Provider>
    );
};
