export abstract class Animal {
    private nome:string;
    private idade: number;
    private tutor: string;

    constructor(nome: string, idade: number, tutor: string){
        this.nome = nome;
        this.idade = idade;
        this.tutor = tutor;

    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome:string): void{
        this.nome = nome;
    }

    public getIdade():number{
        return this.idade;
    }

    public setIdade(idade:number):void{
        this.idade = idade;
    }

    public setTutor():string{
        return this.tutor;
    }

    public getTutor(tutor:string):void{
        this.tutor = tutor;
    }

    abstract som(): void;
    abstract descrevercuidados():void;

}