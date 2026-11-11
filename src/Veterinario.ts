import { Funcionario } from "./Funcionario.js";

export class Veterinario extends Funcionario {
    private consultasRealizadas: number = 0;

    registrarConsulta(): void {
        this.consultasRealizadas++;
    }

    calcularBonus(): number {
        return this.consultasRealizadas * 50;
    }
}
