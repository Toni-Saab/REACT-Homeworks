import React from "react";
import styles from "./Main.module.css";
import SignInMethods from "./Sign-in-methods/Sign-in-methods";

function Main() {
    return (
        <div className={styles["main"]}>
            <h1 className={styles["main__title"]}>
                LIFE IS WASTED ON THE LIVING
            </h1>
            <p className={styles["main__sign-in-text"]}>
                Sign in <br /> with
            </p>
            <SignInMethods className={styles["main__sign-in-methods"]}/>
        </div>
    );
};

export default Main;