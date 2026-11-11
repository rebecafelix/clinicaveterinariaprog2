import {Animal} from "./Animal.js";

export default class Cachorro extends Animal {
    private raca: string;

    constructor(nome: string, idade: number, tutor: string, raca: string) {
        super(nome, idade, tutor);
        this.raca = raca;
    }

    public getRaca(): string {
        return this.raca;
    }

    public setRaca(raca: string): void {
        this.raca = raca;
    }

    public som(): void {
        console.log("O cachorro late");
    }

    public descrevercuidados(): void {
        console.log("Cuidados com cachorros: Exercício regular, alimentação balanceada, vacinação e atenção veterinária.");
    }
}