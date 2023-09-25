import { useRouteError } from "react-router-dom";

const Error=()=>{
    const error=useRouteError();
    console.log(error);
    return(
        <div>
            <h1>404 not Found</h1>
            <h2>Something not found</h2>
            <h3>{error.data}</h3>
            <h3>{error.status}:{error.statusText}</h3>
        </div>
    )
}

export default Error;