export declare abstract class Funcionario {
    private nome;
    private matricula;
    private salario;
    constructor(nome: string, matricula: number, salario: number);
    getNome(): string;
    setNome(nome: string): void;
    getMatricula(): number;
    setMatricula(matricula: number): void;
    getSalario(): number;
    alterarSalario(novoSalario: number): void;
    abstract calcularBonus(): number;
}
//# sourceMappingURL=Funcionario.d.ts.map