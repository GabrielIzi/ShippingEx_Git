import React, {useState, useEffect} from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/SHIPPINGEX.png'
import styles from './MenuBar.module.css'

function MenuBar(){
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <>
            <header
                className={`${styles.MenuBar} ${menuOpen ? styles.open : ""} ${
                    scrolled ? styles.scrolled : ""
                }`}
                >
                <img src={logo} alt="Logo da Empresa" />
                <div className={`${styles.MenuBarOps} ${menuOpen ? styles.show : ""}`}>
                    <Link
                    to="/login"
                    className={`${styles.MenuBarOps0} ${
                        location.pathname === "/login" ? styles.active : ""
                    }`}
                    >
                    <strong className={styles.LoginToggle} >Login</strong>
                    </Link>
                    <a
                    href="/"
                    className={location.pathname === "/" ? styles.active : ""}
                    >
                    <strong>Início</strong>
                    </a>
                    <Link
                    to="/encomendas"
                    className={`${styles.MenuBarOps2} ${
                        location.pathname === "/encomendas" ? styles.active : ""
                    }`}
                    >
                    <strong>Rastrear</strong>
                    </Link>
                    <Link
                    to="/termos"
                    className={`${styles.MenuBarOps3} ${
                        location.pathname === "/termos" ? styles.active : ""
                    }`}
                    >
                    <strong>Termos</strong>
                    </Link>
                </div>
                <Link to="/login" className={styles.BtnLogin}>
                    <strong>LOGIN</strong>
                </Link>
                <button className={styles.MenuToggle} onClick={toggleMenu}>
                    ☰
                </button>
            </header>
        </>
    );
}

export default MenuBar;