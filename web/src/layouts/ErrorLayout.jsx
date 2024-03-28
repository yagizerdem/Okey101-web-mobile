import '../styles/error.css'
import { useRouteError } from "react-router";

export default function ErrorLayout(){
    const {error} = useRouteError();
    console.log(error)
    return(
        <div className="error">
            {error.message}            
        </div>
    )
}