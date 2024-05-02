import { Player, Official } from './person.module.ts';
/**
 * Team class, holds the ...team.
 */

class TeamConstructor {
    name?: string;
    yearEstablished?: number;
    director?: Official;
    trainer?: Official;
    players?: Player[];
    id?: number;
}

export class Team {
    /**
     * The name of the team.
     */
    public name?: string;

    /**
     * The year of establishment of the team.
     */
    public yearEstablished?: number;

    /**
     * The director of the team.
     */
    public director?: Official;

    /**
     * The trainer of the team.
     */
    public trainer?: Official;

    /**
     * The players in the team.
     */
    public players?: Player[];

    /**
     * The ID of the team.
     */
    public id?: number;

    /**
     * Creates a new instance of the Team class.
     * @param name - The name of the team.
     * @param yearEstablished - The year of establishment of the team.
     * @param director - The director of the team.
     * @param trainer - The trainer of the team.
     * @param players - The players in the team.
     */
    constructor(team: TeamConstructor) {
        this.name = team.name;
        this.yearEstablished = team.yearEstablished;
        this.director = team.director;
        this.trainer = team.trainer;
        this.players = team.players;
        this.id = team.id;
    }

    /**
     * Adds a player to the team.
     * @param player - The player to add.
     */
    public addPlayer(player: Player): void {
        this.players?.push(player);
    }

    /**
     * Updates a player in the team.
     * @param player - The updated player.
     */
    public updatePlayer(player: Player): void {
        this.players?.forEach((p, index) => {
            if (this.players && p.id === player.id) {
                this.players[index] = player;
            }
        });
    }

    /**
     * Removes a player from the team.
     * @param id - The ID of the player to remove.
     */
    public removePlayer(id: number): void {
        this.players = this.players?.filter(p => p.id !== id);
    }

    /**
     * Prints the data of the team.
     * @returns A string representation of the team's data.
     */
    public printData(): string {
        return `
        Team: ${this.name}, 
        Year of establishment: ${this.yearEstablished}, 
        Director: ${this.director?.firstName} ${this.director?.lastName}, 
        Trainer: ${this.trainer?.firstName} ${this.trainer?.lastName}, 
        Players: ${this.players?.map(p => `${p.firstName} ${p.lastName}`).join(', ')}
        `;
    }

    public getPlayerCount(): number {
        return this.players?.length || 0;
    }
}

export default Team;