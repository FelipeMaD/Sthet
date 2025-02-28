import { useState } from "react"


const ConditionalRender = () => {

    const[x, setX] = useState(true)

    const[nome, setNome] = useState("Marolento");

    const handleMudarNomeJoao = () =>{
        setNome("joão");
    }

  return (
    <div>
        <h1>Isso será exibido???</h1>
        {x && <p>Se x for true, sim!!!!</p>}
        {!x && <p>Agora x n é mais né meu mano</p>}
        <h1>Nome desse mininu é joao?</h1>
        {nome === "joão" ? (
            <div>
                <p>issoo o nome desse cara é literalmente joao</p>
            </div>
        ) : (
            <div>
                <p>Errado cpç, nome dele é marola bota fe</p>
            </div>
        )}
        <button onClick={handleMudarNomeJoao}>Mudar nome do cara p verificar condição</button>
    </div>
  )
}

export default ConditionalRender