import { Link } from 'react-router-dom';

const Layout = ({children}) => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/" href="/">Inicio</Link></li>
                        <li><Link to="/Dashboard">Dashboard</Link></li>
                        <li><Link to="/Login">Login</Link></li>  
                        <li><Link to="/Register">Register</Link></li>
                    </ul>
                    <button>Cerrar sesión</button>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>Sitio desarrollado por DanoDev</footer>
        </>
    )
}   

export { Layout };