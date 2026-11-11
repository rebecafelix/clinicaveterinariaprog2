import { Funcionario } from "./Funcionario.js";
export class Recepcionista extends Funcionario {
    agendamentosConfirmados = 0;
    confirmarAgendamento() {
        this.agendamentosConfirmados++;
    }
    calcularBonus() {
        return this.agendamentosConfirmados * 10;
    }
}
//# sourceMappingURL=recepcionista.js.map