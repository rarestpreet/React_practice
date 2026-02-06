import { useContext } from "react"
import UserContext from "../context/UserContext"

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return <span>Please login</span>;
    }

    return <span>Hello {user.username}</span>;
}

export default Profile