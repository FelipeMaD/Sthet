
import { useState } from "react";

const ManageData = () => {

    let someData = 10;

    const [number, setNumber] = useState(20);

  return (
    <>
        <div>ManageData</div>
        <p>Valor da variavel: {someData}</p>
      

        <p>Valor novo da variável: {number}</p>
        <button onClick={ () => (setNumber(35))}>Realmente mudando o valor do estado do numero: </button>
    </>
    
  );
}

export default ManageData;