import React from 'react'

const Component = () => {

    let num = 10;
    let nota = "unactive";


  return (
    <div>
        <h1 style={num > 10 ? {
            color: "red",
            backgroundColor : "black"
        }:{
            color:"blue"
        }}>{num}</h1>

        <h2 className={nota === "active" ? "active" : "unactive"}>{nota}</h2>
    </div>
  )
}

export default Component