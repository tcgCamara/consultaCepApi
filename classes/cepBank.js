export default class DataBankCep {

    #memory = {}
    #errorAbsentCep = 'O CEP não existe na memória...'
    
    // construct () {}

    addNewContent (dataId, data) {
        this.#memory[dataId] = data
    }

    findCepInside (data) {
        if (data in this.#memory) {
            console.log('O cep existe na memória!')
            return this.#memory[data]
        }
        //console.log('O CEP não existe na memória...')
        return this.#errorAbsentCep
    }

    listAllContent (data) {
        return this.#memory

    }
    
}