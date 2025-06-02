async function serviceBuscaCEP (cepParaBuscar) {

    const buscaCepURL = 'http://viacep.com.br/ws/'+ cepParaBuscar + '/json/'
    const erroCepIndisponivel = 'Houve um erro em sua pesquisa. O CEP não corresponde a um CEP válido.'
    const erroNaConsulta = 'Cep: '+ cepParaBuscar + ' não foi encontrado. Erro: '

    try {
        const respostaConsulta = await fetch(buscaCepURL)
        const respostaConsultaJson = await respostaConsulta.json()        

        console.log(respostaConsulta.status)
        console.log(respostaConsultaJson)

        if ('erro' in respostaConsultaJson) {
            return erroCepIndisponivel
        }

        return respostaConsultaJson

    } catch (e) {
        throw(console.log(erroNaConsulta + e ))
    }

}

export default serviceBuscaCEP