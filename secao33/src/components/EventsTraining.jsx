const EventsTraining = () =>{

    const handleMyEvent = (e) =>{
        console.log("Assou");
        console.log(e)
    }

    const renderSomethin = (x) =>{
        if (x >= 10) {
            return <h1>Isso aqui apareceu apenas se {x} apareceu na escolha</h1>
        } else{
            return <h5>Esse aqui não tinha o negocio esperado</h5>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent} >Clique aqui!</button>
            </div>
            <div>
                <button onClick={ () => console.log("Esse clique aqui teve a logica dentro do html mano")}>Clique nesse aqui agora!</button>
            </div>
        </div>
        

    );

};
export default EventsTraining;