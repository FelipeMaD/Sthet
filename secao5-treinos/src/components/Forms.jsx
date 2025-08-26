import React, { useState } from 'react'
import formsStyle from '../styles/Forms.module.css'
const Forms = ({user}) => {

    // controlled inputs - AULA 6


    
    // AULA 3 - GERENCIAMENTO DE DADOS
    const[name, setName] = useState(user ? user.nome : "");
    const[email, setEmail] = useState(user ? user.email : "");
    const[idade, setIdade] = useState(user ? user.idade : "");
    const[descricao, setDescricao] = useState( user? user.descricao : "")

    // const handleName = (e) => {
    //     setName(e.target.value)
    // }
    
    const handleSubmit = (e) =>{
        e.preventDefault() // o prevent default evita o recarregamento da pagina ao enviar o formulario, para n estragar a experiencia do usuario!!
        // aqui no corpo do handlesubmit, podemos fazer validações para n enviar coisas erradas pro nosso app

        // limpando formulários - AULA 7
        setName("");
        setEmail("");
        setIdade("");
        setDescricao("");
    }

  return (
    <div className={formsStyle.contentBox}>
        {/* AULA 1 - CRIAÇÃO DE FORMS */}
        {/* aula 5 - envio de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                {/* AULA 4 - MUDANDO A CHAMADA DA FUNÇÃO PARA INLINE */}
                <input type="text" name='name' placeholder='Digite seu nome...' onChange={(e) => setName(e.target.value)} value={name}/>
            </div>

            {/* AULA 2 - LABEL ENVOLVENDO INPUT */}

            <label>
                <p>Email:</p>
                <input type="email" name='email' placeholder='Digite seu email...' onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>

            <label>
                <p>Idade:</p>
                {/* usando o onChange inline (função diretona) */}
                <input type="number" name='senha' placeholder='Digite sua idade...'  onChange={(e) => setIdade(e.target.value)} value={idade}/>
            </label>

            {/* textarea no formulário - AULA 8 */}
            <label>
                <p>Descrição:</p>
                <textarea name="descricao" placeholder='Descrição do user...' onChange={(e) => setDescricao(e.target.value)} value={descricao}></textarea>
            </label>
            
            <input type="submit" value='Enviar'/>
        </form>
        
    </div>
  )
}

export default Forms