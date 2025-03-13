class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// Cria um manipulador para controlar o acesso ao objeto
const proxy = {
    get(target, prop) {
       return target[prop]; 
    },
    set(target, prop, value) {
        if (prop === "idade" && value < 0) {
            console.log("Erro: Idade não pode ser negativa.")
            return false
        }
        target[prop] = value;
        console.log(`Propriedade ${prop} alterada para ${value}`)
        return true
    }
};


const pessoa1 = new Pessoa("Jorge", 12);
const pessoaProxy = new Proxy(pessoa1, proxy);

pessoaProxy.apresentar(); 
pessoaProxy.idade = 20;   
pessoaProxy.nome = "lucas"
pessoaProxy.idade = -5;    
