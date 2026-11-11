export class Funcionario {
    nome;
    matricula;
    salario;
    constructor(nome, matricula, salario) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
    getSalario() {
        return this.salario;
    }
    alterarSalario(novoSalario) {
        if (novoSalario > 0) {
            this.salario = novoSalario;
        }
        else {
            console.log("Salário inválido!");
        }
    }
}
//# sourceMappingURL=Funcionario.js.map