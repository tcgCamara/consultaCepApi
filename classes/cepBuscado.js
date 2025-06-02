export default class Cep {

    constructor (receivedCepNumber) {
        //CEP sempre precisam ser texto, pois os ZEROS A ESQUERDA são importantes.
        this.cepNumber = String(receivedCepNumber)
        this.requestedReceivedData = {}
        this.cepFormatError = 'O CEP informado não corresponde a um formato de CEP válido.'
    }

    validateCepNumber () {
        // duas validações: o cep tem o comprimento de 8 caracteres e se são todos números
        
        // valida se o cep tem 8 dígitos
        if (this.cepNumber.length !== 8) {
            return false;
        }

        // valida se o cep contém apenas números
        for (let i = 0; i < this.cepNumber.length; i++) {
            const cepCharacterAvaliation = this.cepNumber[i]

            if (!'0123456789'.includes(cepCharacterAvaliation)) {
                return false
            }
        } 

        return true
    }

    indexSolicitation (){
        
    }
}