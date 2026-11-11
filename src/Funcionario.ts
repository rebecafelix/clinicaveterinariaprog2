
export abstract class Funcionario {
    private nome: string;
    private matricula: number;
    private salario: number;

    constructor(nome: string, matricula: number, salario: number) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }

    public getNome():string {
        return this.nome;
    }

    public setNome(nome:string):void{
        this.nome = nome;
    }

    public getMatricula():number{
        return this.matricula;
    }

    public setMatricula(matricula:number): void{
        this.matricula = matricula;
    }

    public getSalario(): number {
        return this.salario;
    }

    alterarSalario(novoSalario: number): void {
        if (novoSalario > 0) {
            this.salario = novoSalario;
        } else {
            console.log("Salário inválido!");
        }
    }

    abstract calcularBonus(): number;
}
