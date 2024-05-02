/**
 * Represents a person.
 */
interface Person {
    /**
     * The first name of the person.
     */
    firstName: string;

    /**
     * The last name of the person.
     */
    lastName: string;

    /**
     * The year of birth of the person.
     */
    birthYear: number;

    /**
     * The place of birth of the person (optional).
     */
    birthPlace?: string;

    /**
     * The ID of the person.
     */
    id: number;
}

/**
 * Represents a player who is a person participating in a game or sport.
 */
export interface Player extends Person {
    /**
     * The height of the player in centimeters.
     */
    height: number;

    /**
     * The weight of the player.
     */
    weight: number;

    /**
     * Indicates whether the player is injured or not.
     */
    injured: boolean;
}

/**
 * Represents an official who is a person who holds an office.
 */
export interface Official extends Person {
    /**
     * The role of the official.
     */
    role: string;
    // The validity of the official.
    validity: number;
}

