import Express from 'express'   
import cepController from './controllers/cepController.js'

const server = Express()
server.use(Express.json())

const PORT = 3000

server.listen(PORT, (req, res) => { 
    console.log('Servidor escutando...')} 
)

server.get('/', (req,res) => {
    res.status(200).send('Servidor rodando!')
})

server.get('/cep/:id/', async (req, res) => {
    // const cepResponse = await serviceBuscaCEP(cepNumerico.cepNumber)
    const cepResponse = await cepController.accessCepApi(req, res)

    res.status(200).send(cepResponse)
})

server.get('/registros', (req, res) => {
    //espera-se as queries: ?cepOnly=number
    //retorna ao cliente todos os CEP solicitados ou somente um através da query cepOnly 
    
})