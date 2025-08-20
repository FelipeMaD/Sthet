import React, { useState } from 'react'
import formsStyle from '../styles/Forms.module.css'
const Forms = () => {

    // AULA 3 - GERENCIAMENTO DE DADOS
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");

    // const handleName = (e) => {
    //     setName(e.target.value)
    // }


  return (
    <div className={formsStyle.contentBox}>
        {/* AULA 1 - CRIAÇÃO DE FORMS */}
        
        <form >
            <div>
                <label htmlFor="name">Nome: </label>
                {/* AULA 4 - MUDANDO A CHAMADA DA FUNÇÃO PARA INLINE */}
                <input type="text" name='name' placeholder='Digite seu nome...' onChange={(e) => setName(e.target.value)}/>
            </div>

            {/* AULA 2 - LABEL ENVOLVENDO INPUT */}

            <label>
                <p>Email:</p>
                <input type="email" name='email' placeholder='Digite seu email...' onChange={(e) => setEmail(e.target.value)} />
            </label>

            <input type="submit" value='Enviar'/>
        </form>
        
    </div>
  )
}

export default Forms