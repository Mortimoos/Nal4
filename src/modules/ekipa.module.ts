import { Igralec, Uradnik } from './oseba.module.ts';
/**
 * Team class, holds the ...team.
 */

class EkipaKonstruktor {
    ime?: string;
    yearEstablished?: number;
    director?: Uradnik;
    trainer?: Uradnik;
    players?: Igralec[];
    id?: number;
}

export class Ekipa {
    public name?: string;
    public yearEstablished?: number;
    public director?: Uradnik;
    public trainer?: Uradnik;
    public players?: Igralec[];
    public id?: number;

    constructor(team: EkipaKonstruktor) {
        this.name = team.ime;
        this.yearEstablished = team.yearEstablished;
        this.director = team.director;
        this.trainer = team.trainer;
        this.players = team.players;
        this.id = team.id;
    }

    public addPlayer(igralec: Igralec): void {
        this.players?.push(igralec);
    }

    public updatePlayer(player: Igralec): void {
        this.players?.forEach((p, index) => {
            if (this.players && p.id === player.id) {
                this.players[index] = player;
            }
        });
    }

    public removePlayer(id: number): void {
        this.players = this.players?.filter(p => p.id !== id);
    }

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

export default Ekipa;