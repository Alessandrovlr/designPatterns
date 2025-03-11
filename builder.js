class Hamburger {
    constructor(pao, carne, queijo, molho, salada){
        this.pao = pao
        this.carne = carne
        this.queijo = queijo
        this.molho = molho
        this.salada = salada
    }

    getBurger (){
        console.log(`hamburger feito com o pao ${this.pao}, carne ${this.carne}, ${this.salada? 'salada' : 'sem salada'}`)
    }
}

class Hamburger{
    constructor(){
        this.pao = 'trigo'
        this.carne = 'picanha'
        this.queijo = 'prato'
        this.salada = false
    }

    setPao(pao){
        this.pao = pao
        return this
    }
    setCarne(carne){
        this.carne = carne
        return this
    }
    setqueijo(queijo){
        this.queijo = queijo
        return this
    }
    addSalada(salada){
        this.salada = salada
        return this
    }

    build(){
        return new Hamburger(this.pao, this.carne, this.queijo, this.salada)
    }
}