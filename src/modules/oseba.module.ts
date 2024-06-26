interface Oseba {
    firstName: string;
    lastName: string;
    birthYear: number;
    birthPlace?: string;
    id: number;
}


export interface Igralec extends Oseba {
    height: number;
    weight: number;
    injured: boolean;
}

export interface Uradnik extends Oseba {
    role: string;
    validity: number;
}

