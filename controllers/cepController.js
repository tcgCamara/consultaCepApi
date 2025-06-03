import Cep from '../classes/cepBuscado.js';
import serviceBuscaCEP from '../services/serviceCorreios.js';
import DataBankCep from '../classes/cepBank.js';

const storedMemory = new DataBankCep()

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
            
            storedMemory.addNewContent(numericCep.cepNumber, indexedResponse)
            console.log(storedMemory.listAllContent())

            res.status(200).send(indexedResponse)
        } catch (e) {
            res.status(500).send('Internal server error...')
        }        
    }

    static filterConsultedCep (req, res) {
        if ('cep' in req.query) {
            const valorCep = req.query.cep
            console.log('O cep ' +req.query.cep + '  é contido na pesquisa!')
            res.status(200).send(storedMemory.findCepInside(valorCep))
            return
        }

        res.status(200).send(storedMemory.listAllContent()).end()
    }

}

export default cepController