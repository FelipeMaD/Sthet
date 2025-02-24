import Evento from "../assets/evento.jpg"

const NewTank = () =>{

    //funções vão aqui

    return(
        <div>
            {/*Imagem em public*/}
            <h1>Importando imagens no meu projeto</h1>
            <img src="/evento 3.jpg" alt="foto do evento" />
            {/* imagem em src */}
            <img src={Evento} alt="" />
        </div>
    );

}

export default NewTank;