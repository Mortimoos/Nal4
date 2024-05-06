interface Config {
    app: {
        ime: string;
        email: string;
        leto: string;
        website: string;
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

const defaultAppInfo = {
    ime: "React App",
    email: "krimones@gmail.com",
    leto: "Tara Jakhel",
    website: "https://neodemonica.com"
};

export const config: Config = {
    app: {
        ime: import.meta.env.VITE_NAME || defaultAppInfo.ime,
        email: import.meta.env.VITE_EMAIL || defaultAppInfo.email,
        leto: import.meta.env.VITE_LETO || defaultAppInfo.leto,
        website: import.meta.env.VITE_WEBSITE || defaultAppInfo.website,
        sport: {
            name: "Hockey",
            management: {
                count: 2
            },
            players: {
                count: 11
            }
        }
    }
};
