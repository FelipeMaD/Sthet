import { useState } from "react"
import ConditionalRender from "./ConditionalRender";
import ShowUserName from "./ShowUserName"
import CarDetails from "./CarDetails";

const ListRender = () => {
    const [name, setName] = useState("Alfândega")
    const [list, setList] = useState(["Matheus", "Pedro", "Josias"]);

    const[idade, setIdade] = useState(23)

    const [users, setUsers] = useState([
      {id: 1, nome: "Felipe", age: 23},
      {id: 2, nome: "TETO", age:30},
      {id: 3, nome: "Matue", age:26}
    ]);

    const handleDeleteRandom = () =>{
      const randomNumber = Math.floor(Math.random() * 4)

      setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id)
      })
    }
  return (
    <>
      {/*
          <div>ListRender</div>
          <ul>
              {list.map((item, i) => (
                  <li key={i}>{item}</li>
              ))}
          </ul>
          <div>ListRender2</div>
          <ul>
              {users.map((user, i) => (
                  <li key={user.id}>{user.nome} - {user.age}</li>
              ))}
          </ul>
          <button onClick={handleDeleteRandom}>Deletar user aleatorio</button>
          <ConditionalRender/>
        */}
        <ShowUserName name={name} idade={idade} />
        <CarDetails brand="fiat" km={80000} color="amarelo" />
    </>
    
  )
};

export default ListRender