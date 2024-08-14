class Account {
    // validads
    #password
    #balance

    constructor(user) {
        this.email = user.email
        this.#password = user.password 
        this.#balance = 0
    }

    getBalance(email, password) {
        if (this.email === email && this.#password === password) {
            return this.#balance
        } else {
            return null
        }
    }
}

// objeto
// const user = {
//     email: 'johndogarfeld@gmail.com',
//     password: '2706'
// }

// instancia
const myAccount = new Account(user)

console.log(myAccount)