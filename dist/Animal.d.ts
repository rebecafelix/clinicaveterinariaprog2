export declare abstract class Animal {
    private nome;
    private idade;
    private tutor;
    constructor(nome: string, idade: number, tutor: string);
    getNome(): string;
    setNome(nome: string): void;
    getIdade(): number;
    setIdade(idade: number): void;
    setTutor(): string;
    getTutor(tutor: string): void;
    abstract som(): void;
    abstract descrevercuidados(): void;
}
//# sourceMappingURL=Animal.d.ts.map