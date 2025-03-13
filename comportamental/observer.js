class SistemaDeNotificacao{
    #observadores
    constructor(){
        this.#observadores = []
    }

    addObservador(observador){
        this.#observadores.push(observador)
    }

    removerObservador(observador){
        this.#observadores = this.#observadores.filter((item)=> item.nome != observador.nome)
    }

    notificar(dados){
        this.#observadores.forEach(observador => observador.update(dados))
    }

}

class Observador{
    constructor(nome){
        this.nome = nome
    }

    update(mensagem){
        console.log(`o usuario ${this.nome} recebeu a notificação ${mensagem}`)
    }
}

const sistema_notificacao = new SistemaDeNotificacao()
const usuario1 = new Observador("Ale")
const usuario2 = new Observador("Mateus")
const usuario3 = new Observador("klein")

sistema_notificacao.addObservador(usuario1)
sistema_notificacao.addObservador(usuario2)


sistema_notificacao.notificar(`nova mensagem`)
sistema_notificacao.removerObservador(usuario1)
sistema_notificacao.notificar(`outra mensagem`)