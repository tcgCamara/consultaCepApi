import Express from 'express'   
import serviceBuscaCEP from './services/serviceCorreios.js'

const server = Express()
server.use(Express.json())

const PORT = 3000

// GET, POST, PUT, DELETE 
// CRUD - Create (POST), Read (GET), Update (PUT), Delete (DELETE)

server.listen(PORT, (req, res) => { 
    console.log('Servidor ecutando...')} 
)

server.get('/', (req,res) => {
    res.status(200).send('Servidor rodando!')
})

server.get('/cep', async (req, res) => {
    //console.log(req.query.cep)
    const cepParaBuscar = req.query.cep

    const cepConsultado = await serviceBuscaCEP(cepParaBuscar)

    res.status(200).send(cepConsultado)
})

server.post('/cep', (req, res) => {
    
})