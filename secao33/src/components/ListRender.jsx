import { useState } from "react";
import ConditionalRender from "./ConditionalRender";
import ShowUserName from "./ShowUserName"
import CarDetails from "./CarDetails";
import Fragment from "./Fragment"


const ListRender = () => {
    const [name, setName] = useState("Alfândega")
    const [list, setList] = useState(["Matheus", "Pedro", "Josias"]);

    const [brand, setBrand] = useState("toyota")
    const [km, setKm] = useState(100000);
    const [cor, setCor] = useState("branco");

    const[idade, setIdade] = useState(23);

    const [users, setUsers] = useState([
      {id: 1, nome: "Felipe", age: 23},
      {id: 2, nome: "TETO", age:30},
      {id: 3, nome: "Matue", age:26}
    ]);


    const [carList, setCarList] = useState([
      {id:1, brand:"fiat", km:0, newCar:true, color:"branco"},
      {id:2, brand:"toyota", km:50000, newCar:false, color:"vermelho"},
      {id:3, brand:"chevrolet", km:100000, newCar:false, color:"preto"}
    ]);

    const handleDeleteRandom = () =>{
      const randomNumber = Math.floor(Math.random() * 4)

      setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id)
      })
    }
  return (
    <>
        {/* <div>Renderizando listas</div>
          <ul>
              {list.map((item, i) => (
                  <li key={i}>{item}</li>
              ))}
          </ul>
          <div>Renderizando listas</div>
          <ul>
              {users.map((user, i) => (
                  <li key={user.id}>{user.nome} - {user.age}</li>
              ))}
          </ul>
          <button onClick={handleDeleteRandom}>Deletar user aleatorio</button>
          <ConditionalRender/> */}
        {/* <ShowUserName name={name} idade={idade} />
        <CarDetails brand={brand} km={km} color={cor} newCar={false}/>
        <CarDetails brand="Uno" km={0} color="vermelho" newCar={true}/>
        <CarDetails brand="etios" km={50000} color={"preto"} newCar={false}/> 

        

         {carList.map((car) => (
          <CarDetails  
            id={car.id} 
            brand={car.brand} 
            km={car.km} 
            newCar={car.newCar} 
            color={car.color}
          />
        ))} */}
            
        
      <Fragment/>
        

    </>
    
  )
};

export default ListRender