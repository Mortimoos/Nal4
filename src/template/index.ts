interface Template {
    app: {
        version: string;
        name: string;
        copyright: string,
        author: string,
        sport: {
            name: string;
            management: {
                count: number;
            }
            players: {
                count: number;
            }
        }
    }
}

export const template: Template = {
    app: {
        version: import.meta.env.VITE_VERSION || "0.0",
        name: import.meta.env.VITE_NAME || "React App",
        copyright: `Copyright © ${new Date(Date.now()).getFullYear()} SportsHub®. All rights reserved.`,
        author: import.meta.env.VITE_AUTHOR || "Blaze Banjanski",
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
