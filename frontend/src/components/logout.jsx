import axios from "axios"
import { useEffect } from "react"

function Logout() {
    useEffect(() => {
        const response = axios.post("http://localhost:3001/auth/logout", null, {
                withCredentials: true,
        },)
        response.then((message) => console.log(message))
    }, [])

    return (
        <div className="logout">

        </div>
    )
}

export default Logout