import { Funcionario } from "./Funcionario.js";

export class Recepcionista extends Funcionario {
    private agendamentosConfirmados: number = 0;

    confirmarAgendamento(): void {
        this.agendamentosConfirmados++;
    }

    calcularBonus(): number {
        return this.agendamentosConfirmados * 10;
    }
}
