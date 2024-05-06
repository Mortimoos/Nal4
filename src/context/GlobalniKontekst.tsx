import React, { createContext, useState } from 'react';
import Ekipa from '../modules/ekipa.module.ts';
import initialTeams from '../temp/ekipe';

// Context creation: Create a context to manage global state for teams and selected team
export const GlobalniKontekst = createContext<{
    teams: Ekipa[]; // Array to store teams
    selectedTeam: Ekipa | null; // Variable to store the currently selected team
    setSelectedTeam: (team: Ekipa | null) => void; // Function to update the selected team
}>({
    teams: [], // Initialize teams as an empty array
    selectedTeam: null, // Initialize selectedTeam as null
    setSelectedTeam: () => {}, // Initialize setSelectedTeam as an empty function
});

// Provider component: Component to provide the global state to its children
export const GlobalniProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // State initialization: Initialize the state for teams and selectedTeam
    const [teams] = useState<Ekipa[]>(initialTeams); // State variable to store teams data, initialized with initialTeams
    const [selectedTeam, setSelectedTeam] = useState<Ekipa | null>(null); // State variable to store the selected team, initialized as null

    // Context value assignment: Combine state variables into context value
    const contextValue = {
        teams: teams, // Set teams data in context value
        selectedTeam: selectedTeam, // Set selected team in context value
        setSelectedTeam: setSelectedTeam // Set function to update selected team in context value
    };

    // Rendering provider with context value: Render the context provider with the context value and provide children components access to the context
    return (
        <GlobalniKontekst.Provider value={contextValue}>
            {children} {/* Render children components */}
        </GlobalniKontekst.Provider>
    );
};
