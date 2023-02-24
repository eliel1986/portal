import { Link } from "react-router-dom";
import { Header } from './styles.js'

export function Navbar() {
    return (
        <Header>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/faturamento">{Faturamento}</Link>
                </li>
                <li>
                    <Link to="/imc">IMC</Link>
                </li>
        </Header>
    );
}