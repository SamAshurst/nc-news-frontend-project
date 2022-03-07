import { useContext } from "react"
import UserContext from "../contexts/UserContext"

export default function Title () {
    const {loggedInUser} = useContext(UserContext)
    return <header>
        <h1>Northcoders News</h1>
        <h3>Unfolding the truth</h3>
        <img src={loggedInUser.avatar_url} alt={`${loggedInUser.username}'s avatar`}/>
        <p>{loggedInUser.username}</p>
    </header>
}