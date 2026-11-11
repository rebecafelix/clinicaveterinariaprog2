import { Animal } from "./Animal.js";
import { Funcionario } from "./Funcionario.js";
import { Consulta } from "./consulta.js";
export class Clinica {
    funcionarios = [];
    animais = [];
    consultas = [];
    cadastrarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }
    cadastrarAnimal(animal) {
        this.animais.push(animal);
    }
    registrarConsulta(consulta) {
        this.consultas.push(consulta);
    }
}
//# sourceMappingURL=Clinica.js.map