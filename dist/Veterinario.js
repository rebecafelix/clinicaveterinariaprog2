import { Funcionario } from "./Funcionario.js";
export class Veterinario extends Funcionario {
    consultasRealizadas = 0;
    registrarConsulta() {
        this.consultasRealizadas++;
    }
    calcularBonus() {
        return this.consultasRealizadas * 50;
    }
}
//# sourceMappingURL=Veterinario.js.map