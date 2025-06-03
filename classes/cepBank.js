export default class DataBankCep {

    #memory = {}

    // construct () {}

    addNewContent (dataId, data) {
        this.#memory[dataId] = data
    }

    findCepInside (data) {
        if (data in this.#memory) {
            console.log('O cep existe na memória!')
            return this.#memory[data]
        }
        console.log('o CEP não existe na memória... ... ...')
        return
    }

    listAllContent (data) {
        return this.#memory

    }
    
}