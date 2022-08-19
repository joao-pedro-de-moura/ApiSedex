import React, { useState } from 'react'
import { useEffect } from 'react'

const ApiSedex = () => {
    const [vlInput, setVlInput] = useState("80320-050")
    const [cep, setCep] = useState()

    function handleSetInput(endereco) {
        setValorInput(endereco.cep)
      }

      async function handleRequisicao() {
        const url = `https://viacep.com.br/ws/${vlInput}/json/`
        const response = await fetch(url)
        const json = await response.json()
    
        const resposta = {
          cep: json.cep
        }
        setCep(resposta)
        setVlInput("")
    } 
    useEffect (() => {
        handleRequisicao()
    }, []) 
   
  return (
   
    <div>
         

        <p> asasasasasa </p>
        <input type="text" value={cep} onChange = {({endereco}) => handleSetInput(endereco)}/>

    </div>
     
  )
  
}

export default ApiSedex