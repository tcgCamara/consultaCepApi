async function serviceBuscaCEP (requiredCEP) {

    const URL = 'http://viacep.com.br/ws/'+ requiredCEP + '/json/'

    // estes erros deveriam ser apresentados em um throw console.log(), mas é legal ver a resposta na web. rs
    const unreacheableCep = 'Houve um erro em sua pesquisa. O CEP não corresponde a um CEP válido.'
    const serviceQueryError = 'Cep: '+ requiredCEP + ' não foi encontrado. Erro: '

    try {
        const responseURL = await fetch(URL)
        const responseContentJson = await responseURL.json()        

        console.log(responseURL.status)
        console.log(responseContentJson)

        if ('erro' in responseContentJson) {
            return unreacheableCep
        }

        return responseContentJson

    } catch (e) {
        throw(console.log(serviceQueryError + e ))
    }

}

export default serviceBuscaCEP