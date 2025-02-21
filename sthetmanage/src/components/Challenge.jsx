const Challenge = () => {

    const valor1 = 10;
    const valor2 = 43;

    const handleSomarValores = () =>{
        console.log("O valor da soma é: " + (valor1 + valor2));
    };

    return(
        <div>
            <h1>Imprimindo o primeiro valor: {valor1}</h1>
            <h1>Imprimindo o segundo valor: {valor2}</h1>
            <button onClick={handleSomarValores}>Some estes valores aqui!</button>
            
        </div>

    );
}

export default Challenge;