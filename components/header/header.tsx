import React from 'react'
import style from "./header.module.scss";

const Header = () => {
    return (

        <nav className={style.navbar}>
            <ul className={style.nav_menu}>
                <li><a href="#home">Home</a></li>
                <li><a href="#cadastro">Cadastro</a></li>
                <li><a href="#planos">Planos</a></li>
                <li><a href="#sobre">Sobre</a></li>
            </ul>
        </nav >

    )
}

export default Header