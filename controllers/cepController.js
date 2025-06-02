import Cep from '../classes/cepBuscado.js';
import serviceBuscaCEP from '../services/serviceCorreios.js';

class cepController {

    // incluído static para que não precise instanciar a classe a uma variável
    static async accessCepApi (req, res) {
        //espera-se as queries: ?cep=bool&rua=bool&bairro=true&municipio=true&estado=true
        //talvez esta query fosse melhor melhor um JSON no Body da requisição... 
    
        const numericCep = new Cep(req.params.id)
        numericCep.requestedReceivedData = req.query;

        const verifiedCepNumber = numericCep.validateCepNumber()
    
        if (!verifiedCepNumber){
            return numericCep.cepFormatError
        }

        const cepResponse = await serviceBuscaCEP(numericCep.cepNumber)

        return cepResponse
        
    }

}

export default cepController