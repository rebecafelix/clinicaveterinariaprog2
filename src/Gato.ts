import { Animal } from "./Animal.js";

export default class Gato extends Animal {
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
        console.log("O gato mia");
    }

    public descrevercuidados(): void {
        console.log("Cuidados com gatos: Alimentação adequada, higiene da caixa de areia, vacinação e atenção veterinária.");
    }
}