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
    await cepController.accessCepApi(req, res)  
})

server.get('/storage', (req, res) => {
    //a query ?cep=number pode ser enviada para filtrar
    //retorna ao cliente todos os CEP solicitados ou somente um através da query cepOnly 
    cepController.filterConsultedCep(req, res)
    
})