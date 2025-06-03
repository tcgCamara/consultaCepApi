import Cep from '../classes/cepBuscado.js';
import serviceBuscaCEP from '../services/serviceCorreios.js';

class cepController {

    // incluído static para que não precise instanciar a classe a uma variável
    static async accessCepApi (req, res) {
        //espera-se as queries: ?cep=bool&rua=bool&bairro=true&municipio=true&estado=true
        //talvez esta query fosse melhor melhor um JSON no Body da requisição... 
    
        const numericCep = new Cep(req.params.id)
        numericCep.requestedData = req.query;

        //console.log(numericCep.requestedData)

        if (!numericCep.validateCepNumber()){
            res.status(400).send(numericCep.cepFormatError).end()
            return
        }

        try {
            const cepResponse = await serviceBuscaCEP(numericCep.cepNumber)
            const indexedResponse = numericCep.indexSolicitation(numericCep.requestedData, cepResponse)
            
            res.status(200).send(indexedResponse)
        } catch (e) {
            res.status(500).send('Internal server error.')
        }

        
        
    }

    static filterConsultedCep () {

    }

}

export default cepController