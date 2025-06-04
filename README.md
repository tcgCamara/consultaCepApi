# Projeto para Constultar API Externa

O intuito deste projeto foca no aprendizado da construção de rotas/endpoints de um backend que faz a consulta de uma API externa. Este projeto não é uma cópia de nenhum outro projeto online, mas é a minha forma de aprendizado onde coloco diversos conhecimentos em um só lugar, supondo que fosse uma proposta de um cliente para mim. Logo, alguns comentários explícitos são formas de anotações do aprendizado sobre a leitura do código e não a descrição do código em si. 


Proposta do Cliente: 
- O cliente necessita de um microserviço de API para um projeto em funcionamento que realiza consulta de CEP a uma terceira API externa. Ele deve passar o número do CEP e ser retornado apenas os detalhes solicitados, como bairro, UF, logradouro (rua) etc. As solicitações dos clientes desta API devem ser armazenadas em um banco de dados para que futuramente seja consultado para verificações de perfil regional dos clientes que utilizam este serviço. 


Para este projeto, o foco do aprendizado é: 
- Construção de um backend que é uma API Restful utilizando Express para construção do servidor e das rotas; 
- Dispobilizizar as rotas ao usuário/cliente para consulta através dos principais métodos HTTP (get, post, put e delete);
- Através do endpoint, construir os requests de dados e parâmetros (query, route e body params);
- Consultar uma API externa e receber os dados em JSON;
- Tratar os dados dados recebidos da API Externa e enviar apenas as informações solicitadas pelo cliente (alguns dados recebidos da API externa são praticamente nulos)
- Construir um armazenamento dos requests em uma memória interna (futuro banco de dados).


A partir da solicitação, foram levantados as seguintes regras do negócio:
Regras gerais:
- Devem haver duas rotas para o cliente: uma onde consulta o CEP e outra onde busca os CEPs já consultados.

Rota de consulta do CEP: 
- O cliente deve enviar o CEP, contendo 8 caracteres numéricos/texto, sem hífen, apenas números/texto. Qualquer informação que diverge disso, deverá ser informado ao cliente. 
- Caso o cliente envie a ?query com os parâmetros necessários, enviar somente aqueles que tiverem o valor 'true'; 
- Caso o cliente não envie as propriedades durante o request do CEP, todos os dados deverão ser enviados. 

Rota de consultas da memória: 
- O registro dos CEPs consultados só serão armazenados quando a consulta a API for bem sucedida. Qualquer divergência deverá ser informado ao cliente;
- Quando for consultar o armazenamento, o cliente pode enviar algum CEP para saber se ele já foi consultado, se não solicita, o sistema deverá retornar todos os dados armazenados;


Como utilizar esta API:

GET /cep/:id
Consulta um CEP na API externa e retorna apenas os dados solicitados por query params.

Parâmetros de rota:
:id — (string) CEP com exatamente 8 dígitos, apenas números. Sem hífen.

Query strings (opcional):
Permite filtrar os campos retornados. Use true para incluir:
- cep: boolean - Retorna o próprio CEP consultado
- logradouro: boolean - Retorna o nome da rua
- bairro: boolean - Retorna o bairro
- localidade: boolean - Retorna a cidade
- uf: boolean - Retorna a sigla do estado
... (outros campos da API ViaCEP)

Exemplo: GET /cep/21910510?bairro=true&uf=true
Resposta: Status 200 
{
  "bairro": "Tauá",
  "uf": "RJ"
}

Erro: 400 - Bad request
Texto: O CEP informado não corresponde a um formato de CEP válido.

Erro: 500 - Internal server error
Texto: "Internal server error..."


GET /storage
Consulta os CEPs que já foram buscados e armazenados na memória. A resposta é um JSON com a primeira Chave é o CEP e seu valor é um JSON com os dados retornados da API (ViaCEP). 

Query strings (opcional):
- cep: string - Se fornecido, retorna apenas esse CEP, se existir na memória.

Exemplo 1: GET /storage
Resposta: Status 200 (um JSON com todos os CEP consultados)

Exemplo 2: GET /storage?cep=21910510
Resposta: Status 200
{
  "21910510": {
    "cep": "21910-510",
    "logradouro": "Rua Vinte e Oito de Outubro",
    "complemento": "",
    "unidade": "",
    "bairro": "Tauá",
    "localidade": "Rio de Janeiro",
    "uf": "RJ",
    "estado": "Rio de Janeiro",
    "regiao": "Sudeste",
    "ibge": "3304557",
    "gia": "",
    "ddd": "21",
    "siafi": "6001"
  }
}
Caso o CEP não esteja em memória, 
Resposta em texto: "O CEP não existe na memória..."


Estrutura do Projeto: 
- server.js: Inicializa o servidor Express e define as rotas principais
- cepController.js: Controlador com lógica das rotas de consulta e leitura de memória
- cepBuscado.js: Classe de CEP: valida, formata e filtra os dados recebidos da API
- cepBank.js: Classe de memória local (simula um banco de dados)
- serviceCorreios.js: Serviço que faz a consulta HTTP à API do ViaCEP
- README.md: Documentação e explicação geral do projeto

