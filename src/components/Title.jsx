import { useContext } from "react"
import UserContext from "../contexts/UserContext"

export default function Title () {
    const {loggedInUser} = useContext(UserContext)
    return <header>
        <h1 className="header__title">Northcoders News</h1>
        <p className="header__username">{loggedInUser.username}</p>
    </header>
}