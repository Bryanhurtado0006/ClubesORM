import React from "react";

const data: React.FC <{nombre:string}> = ({nombre}) => {

    return (
        <div>
        <h1>Data Component</h1>
        <p>{nombre}</p>
        </div>
    );
}

export default data;