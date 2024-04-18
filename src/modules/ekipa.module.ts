import {Igralec, Funkcionar} from "./oseba.module.ts";

class TeamConst {
    id?: number;
    name?: string;
    yearEstablished?: number;
    director?: Funkcionar;
    trainer?: Funkcionar;
    player?: Igralec[];
}

export class Team {
    public id?: number;
    public name ?: string;
    public yearEstablished?: number;
    public director?: Funkcionar;
    public trainer?: Funkcionar;
    public player?: Igralec[];


    constructor(team: TeamConst) {
        this.id = team.id;
        this.name = team.name;
        this.yearEstablished = team.yearEstablished;
        this.director = team.director;
        this.trainer = team.trainer;
        this.player = team.player;
    }

    public addPlayer(player: Igralec): void {
        this.player?.push(player);
    }

    public updatePlayer(player: Igralec): void {
        this.player?.forEach((p, i) => {
            if (this.player && p.id === player.id) {
                this.player[i] = player;
            }
        });
    }

    public removePlayer(id: number): void {
        this.player = this.player?.filter(p => p.id !== id);
    }

    public printData(): string {
        const teamInfo = `
        Team: ${this.name}, 
        Year of establishment: ${this.yearEstablished}, 
        Director: ${this.director ? `${this.director.firstName} ${this.director.lastName}` : 'N/A'}, 
        Trainer: ${this.trainer ? `${this.trainer.firstName} ${this.trainer.lastName}` : 'N/A'}, 
        Players: ${this.player?.length ? this.player.map(p => `${p.firstName} ${p.lastName}`).join(', ') : 'No players available'}
    `;
        return teamInfo;
    }

    public getPlayerCount(): number {
        return this.player?.length || 0;
    }
}

export default Team;