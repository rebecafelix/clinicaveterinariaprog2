import { Animal } from "./Animal.js";
import { Funcionario } from "./Funcionario.js";
import {Consulta} from "./consulta.js"

export class Clinica {
    private funcionarios: Funcionario[] = [];
    private animais: Animal[] = [];
    private consultas: Consulta[] = [];

    cadastrarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    cadastrarAnimal(animal: Animal): void {
        this.animais.push(animal);
    }

    registrarConsulta(consulta: Consulta): void {
        this.consultas.push(consulta);
    }
}
