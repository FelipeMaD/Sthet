import { useState } from "react"

const ListRender = () => {

    const [list, setList] = useState(["Matheus", "Pedro", "Josias"])

  return (
    <>
        <div>ListRender</div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    </>
    
  )
}

export default ListRender