class Usuario{
    constructor(id, nome, email){
        this.id = id;
        this.nome = nome;
        this.email = email
    }
}

class UserRepo{
    constructor(){
        this.users = []
    }

    addUser(user){
        this.users.push(user)
    }

    deletUser(id){
        this.users = this.users.filter(user=>user.id !=id)
    }

    getUserById(id){
        return this.users.find(user=> user.id == id)
    }

    getAllUsers(){
        return this.users
    }
}

const userRepository = new UserRepo()

const user1 = new Usuario(1,'ale', 'aa')

userRepository.addUser(user1)