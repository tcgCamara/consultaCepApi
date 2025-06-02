# Projeto para Constultar API externa 280525

O intuito deste projeto foca no aprendizado da construção de rotas/endpoints de um backend que faz a consulta de uma API externa. Este projeto não é uma cópia de nenhum outro projeto online, mas é a minha forma de aprendizado, onde coloco diversos conhecimentos em um só lugar, supondo que fosse uma proposta de um cliente para mim. Logo, alguns comentários explícitos são formas de anotações do aprendizado sobre a leitura do código e não a descrição do código em si. 

Proposta do Cliente: 
- O cliente necessita de um microserviço de uma API para um projeto em funcionamento que realiza consulta de CEP a uma terceira API externa. Ele deve passar as informações que deverão requeridas através do CEP informado. As solicitações dos clientes desta API devem ser armazenadas em um banco de dados que futuramente será consultado para verificação de perfil dos clientes que utilizam seu serviço - através das localidades dos CEP consultado, que não fará parte desta etapa. 

O foco do aprendizado aqui é: 
- Construção de um backend que é uma API Restful utilizando Express para construção do servidor e das rotas 
- Dispobilizizar as rotas ao usuário/cliente para consulta através dos principais métodos HTTP (get, post, put e delete)
- Através do endpoint, construir os requests de dados e parâmetros (query, route e body params)
- Consultar uma API externa através do método GET pela função Fetch() e receber os dados em JSON
- Tratar os dados em JSON e enviar apenas as informações necessárias (alguns dados recebidos da API externa são praticamente nulos)
- Responder a requisição do usuário com o solicitado

Como utilizar esta API:
- 

Regras do negócio pensadas:
- Devem haver duas rotas para o cliente: uma onde consulta o CEP e outra onde busca os CEPs já consultados.
- O cliente deve enviar o CEP, contendo 8 caracteres numéricos/texto, sem hífen, apenas números/texto. Qualquer informação que diverge disso, deverá ser informado ao cliente. 
- As informações 
- 


Construção de API com rotas local que consulta outra API remota que cruza informações sobre endereço a partir do CEP enviado. A resposta ao cliente é dado somente com as informações desejadas, como número do CEP localizado, nome da Rua, município, estado e outras informações.
 