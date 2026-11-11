import {Animal} from "./Animal.js";

export default class Aves extends Animal {
    gaiola: boolean;

    constructor(nome: string, idade: number, tutor: string, gaiola: boolean) {
        super(nome, idade, tutor);
        this.gaiola = gaiola;
    }

    public getGaiola(): boolean {
        return this.gaiola;
    }

    public setGaiola(gaiola: boolean): void {
        this.gaiola = gaiola;
    }

    public som(): void {
        console.log("A ave canta");
    }

    public descrevercuidados(): void {
        console.log("Cuidados com aves: Fornecer uma gaiola adequada, alimentação balanceada, água limpa e atenção regular.");
    }

}