class Notificacao{
    enviar(mensagem){
        throw new Error("o método enviar() precisa ser implementado na classe filha")
    }
}

class NotificacaoEmail extends Notificacao{
    enviar(mensagem){
        console.log(`enviando um email: ${mensagem}`)
    }
}

class NotificacaoSMS extends Notificacao{
    enviar(mensagem){
        console.log(`enviando um sms: ${mensagem}`)
    }
}

class FactoryNotifacacao{
    static criarNotificacao(tipo){
        switch(tipo){
            case 'email':
                return new NotificacaoEmail()
            break

            case 'SMS': 
                return new NotificacaoSMS()
            break
            default:
                throw new Error("tipo desconhecido")
        }
    }
}

const notif = FactoryNotifacacao.criarNotificacao('email')
notif.enviar("ola mundo")