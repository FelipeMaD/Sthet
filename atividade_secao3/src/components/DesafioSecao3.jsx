import React, { useState } from 'react'
import UserDetails from './UserDetails'
import Teste from './teste.jsx'
import Fruta from './Fruta.jsx'
import Container from './Container.jsx'
import ExecuteFunction from './ExecuteFunction.jsx'
import Message from './Message.jsx'
import ChangeMessage from './ChangeMessage.jsx'
const DesafioSecao3 = () => {

    // const showMessage = () => {
    //     console.log("Aqui está sua função sendo executada no seu elemento filho - ")
    // }

    // let caixa = 0;

    // const calculaPreco = (preco, quantidade) => {
    //     let resultado = preco*quantidade;
    //     caixa += resultado;
    //     return resultado;
    // }

    // const[usersList, setUsersList] = useState([
    //     {id:1, nome:"Felipe", idade:23, profissao:"Programador"},
    //     {id:2, nome:"joao", idade:17, profissao:"ladrão"},
    //     {id:3, nome:"pedro", idade:21, profissao:"jogador"}
    // ])

    // const[carrinhoFrutas, setCarrinhoFrutas] = useState([
    //     {id: 1, nome:"maçã", preco:2.50, quantidade:5},
    //     {id: 2, nome:"banana", preco:5, quantidade:2},
    //     {id: 3, nome:"melancia", preco:12.50, quantidade:3},
    //     {id: 4, nome:"laranja", preco:4.50, quantidade:3}
    // ]);

    const[message, setMessage] = useState("");

    const handleChangeMessage = (msg) =>{
        setMessage(`${msg}`)
    }

    

  return (
    <div>

        {/* <h1>Desafio da secão 3 - curso</h1> */}

        {/* {usersList.map((user) => (
            <UserDetails 
                key={user.id}
                name={user.nome}
                age={user.idade}
                work={user.profissao}
            />
        ))} */}
        {/* {carrinhoFrutas.map( (fruta) => (
            <Fruta nome={fruta.nome} preco={fruta.preco} quantidade={fruta.quantidade} total={calculaPreco(fruta.preco, fruta.quantidade)} />
        ))}
        <h1>Preço total da compra de hoje: {caixa}</h1> */}


        {/* children props - fazendo alguma coisa aqui c ela */}

        {/* <Container>
            <p>Porém, a cada chamada nova do meu container, </p>
        </Container>
        <Container>
            <p>Apenas seu corpo que sinalizei como children irá mudar</p>
        </Container>
        <Container>
            <p>Mantendo os caras de cima e de baixo no padrão que devem ser!</p>
        </Container> */}

        {/* funções como prop - estudo */}

        

        {/* state lifting */}

        <Message msg={message}/>
        <ChangeMessage myFunction={handleChangeMessage}/>

    </div>
  )
}

export default DesafioSecao3