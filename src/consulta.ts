import { Animal } from "./Animal.js";
import {Veterinario} from "./Veterinario.js"


export class Consulta {
    private animal: Animal;
    private veterinario: Veterinario;
    private data: Date;

    constructor(
        animal: Animal,
        veterinario: Veterinario,
        data: Date
    ) {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;

        this.veterinario.registrarConsulta();
    }

    descreverConsulta(): void {
        console.log("Animal: " + this.animal);
        console.log("Data: " + this.data);
    }
}
