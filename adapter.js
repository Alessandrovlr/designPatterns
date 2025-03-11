class FerramentaPagamentoAntiga{
    processoPagamento(quantia){
        console.log(`vai fazer o pagamento de ${this.quantia}`)
    }
}

class NovaVersaoAPIPagamento{
    pagar(detalhe_pagamento){
        console.log(`fazer pagamento no novo sistema ${detalhe_pagamento.valor}`)
    }
}

class AdaptadorPagamento{
    constructor(novaVersaoAPIPagamento){
        this.novaVersaoAPIPagamento = novaVersaoAPIPagamento
    }
    processoPagamento(quantia){
        this.novaVersaoAPIPagamento.pagar({valor: quantia})
    }
}

const novoPagamento = new NovaVersaoAPIPagamento()
const adaptador = new AdaptadorPagamento(novoPagamento)
adaptador.processoPagamento(100)