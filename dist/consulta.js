import { Animal } from "./Animal.js";
import { Veterinario } from "./Veterinario.js";
export class Consulta {
    animal;
    veterinario;
    data;
    constructor(animal, veterinario, data) {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
        this.veterinario.registrarConsulta();
    }
    descreverConsulta() {
        console.log("Animal: " + this.animal);
        console.log("Data: " + this.data);
    }
}
//# sourceMappingURL=consulta.js.map