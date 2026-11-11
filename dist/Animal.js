export class Animal {
    nome;
    idade;
    tutor;
    constructor(nome, idade, tutor) {
        this.nome = nome;
        this.idade = idade;
        this.tutor = tutor;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    setTutor() {
        return this.tutor;
    }
    getTutor(tutor) {
        this.tutor = tutor;
    }
}
//# sourceMappingURL=Animal.js.map