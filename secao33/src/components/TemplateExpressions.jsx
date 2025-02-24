const TemplateExpressions = () => {

    const name = "Felipe";
    const data = {
        age : 12, 
        description: "ola cacetin"
    }


    return (
        <div>
            <h1>Olá, {name}</h1>
            <p>Voce é um {data.description}</p>
            <p>{4*22}</p>
        </div>
    );
};

export default TemplateExpressions;