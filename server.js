import Express from 'express'   
import serviceBuscaCEP from './services/serviceCorreios.js'
import Cep from './classes/cepBuscado.js'

const server = Express()
server.use(Express.json())

const PORT = 3000

server.listen(PORT, (req, res) => { 
    console.log('Servidor ecutando...')} 
)

server.get('/', (req,res) => {
    res.status(200).send('Servidor rodando!')
})

server.get('/cep/:id/', async (req, res) => {
    //espera-se os query params: ?cep=bool&rua=bool&bairro=true&municipio=true&estado=true

    const cepNumerico = new Cep(req.params.id)
    cepNumerico.requestedReceivedData = req.query;
    const verifiedCepNumber = cepNumerico.validateCepNumber()

    if (!verifiedCepNumber){
        res.status(400).send(cepNumerico.cepFormatError).end()
    }

    const cepResponse = await serviceBuscaCEP(cepNumerico.cepNumber)

    res.status(200).send(cepResponse)
})

server.get('/registros', (req, res) => {
    
})