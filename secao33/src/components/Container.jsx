import React from 'react'

const Container = ({children, myProp}) => {
  return (
    <div>
        <p>Esse é o conteudo do children</p>
        {children}
        <p>{myProp}</p>
    </div>
  )
}

export default Container