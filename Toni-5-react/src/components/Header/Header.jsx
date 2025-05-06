import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo/spotify.svg";

function Header() {
    return (
        <div className={styles["header"]}>
            <img    
                src={logo}
                alt="Logo Spotify"
                className={styles["header__logo"]}
            />
        </div>
    );
};

export default Header;