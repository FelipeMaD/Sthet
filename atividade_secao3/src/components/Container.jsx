import React from 'react'

const Container = ({children}) => {
  return (
    <div>
        <div>
            <h2>--------------</h2>
        </div>
        <div>
            {children}
        </div>
        <div>
            <h2>--------------</h2>
        </div>
       
    </div>
  )
}

export default Container