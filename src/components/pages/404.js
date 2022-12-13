import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn`t exist</p>
            <br/> <br/>
            <Link style={{'color': 'red', 'display': 'block','textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}} to='/'>Back to main page</Link>
        </div>
    )
}

export default Page404;