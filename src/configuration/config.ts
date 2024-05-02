interface Config {
    app: {
        ime: string;
        email: string;
        leto: string;
        sport: {
            name: string;
            management: {
                count: number;
            };
            players: {
                count: number;
            };
        };
    };
}

export const config: Config = {
    app: {
        ime: import.meta.env.VITE_NAME || "React App",
        email: import.meta.env.VITE_EMAIL || "krimones@gmail.com",
        leto: import.meta.env.VITE_LETO || "Tara Jakhel",
        sport: {
            name: "Football",
            management: {
                count: 2
            },
            players: {
                count: 11
            }
        }
    }
};
