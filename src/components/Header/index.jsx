import styles from "./index.module.scss"
import logo from './img/logo.svg'
import { useNavigate } from "react-router-dom"

export default function Header(props) {
    
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault()

        const searchValues = event.target[0].value

        props.onSubmit(searchValues)
        event.target[0].value = ""

        navigate("/")

    }

    return (
        <div className={styles.header}>
            <img src={logo} alt="Logo DNC" />

            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="Buscar Filme" />
            </form>

        </div>
    )
}
