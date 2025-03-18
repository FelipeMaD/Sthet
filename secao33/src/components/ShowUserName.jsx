const ShowUserName = (props) => {


    return (
        <>
            <p>o nome do usuário é: {props.name}</p>
            <p>E ele tem exatamente {props.idade} anos</p>
        </>
    )

}

export default ShowUserName;