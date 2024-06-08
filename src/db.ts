import Dexie, { Entity, EntityTable } from "dexie";


export class Roll extends Entity<AppDB> {
    gameId!: number;
    die!: IDie[];
    result!: number;
    created!: number
}
export class Game extends Entity<AppDB> {
    title!: string;
    rolls!: Roll[];
    numberOfDice!: number;
    edited!: number;
    created!: number
}

export interface IDie {
    size: number,
}

export default class AppDB extends Dexie {
    games!: EntityTable<Game>;
    rolls!: EntityTable<Roll, 'gameId'>;

    constructor() {
        super('db_0.1');
        this.version(1).stores({
            games: '++id',
            rolls: '++id, result'

        });
        this.games.mapToClass(Game);
        this.games.mapToClass(Roll);
    }
}

export const db = new AppDB();

export async function getGames() {
    return await db.games.toArray();
}

export async function addGame(game: Partial<Game>) {
    await db.games.add(game);
}

export async function updateGame(id: number, updates: Partial<Game>) {
    await db.games.update(id, { ...updates });
}

export async function deleteGame(id: number) {
    await db.games.delete(id);
}

export async function getRolls() {
    return await db.rolls.toArray();
}

export async function addRoll(roll: Roll) {
    await db.rolls.add(roll);
}

export async function deleteRoll(id: number) {
    await db.rolls.delete(id);
}



