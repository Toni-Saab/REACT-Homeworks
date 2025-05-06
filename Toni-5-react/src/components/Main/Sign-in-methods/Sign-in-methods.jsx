import React from "react";
import styles from "./Sign-in-methods.module.css";

import ServiceSignInButton from "../Service-sign-in-button/Service-sign-in-button";
import apple from "../../../assets/icons/apple.svg";
import google from "../../../assets/icons/google.svg";
import twitterX from "../../../assets/icons/twitter-x.svg";

function SignInMethods({className}) {
    const handleAppleSignIn = () => {
        console.log("Clicked Apple");
      };
      
      const handleGoogleSignIn = () => {
        console.log("Clicked Google");
      };
      
      const handleXSignIn = () => {
        console.log("Clicked X");
      };

    return (
        <div className={`${className || ""} ${styles["sign-in-methods"]}`}>
            <ServiceSignInButton 
                icon={apple}
                alt={"Sign In with Apple"}
                onClick={handleAppleSignIn}
                className={styles["main__sign-in-button"]}
                iconClass={styles["main__sign-in-icon-apple"]}
            />

            <ServiceSignInButton
                icon={google}
                alt={"Sign In with Google"}
                onClick={handleGoogleSignIn}
                className={styles["main__sign-in-button"]}
                iconClass={styles["main__sign-in-icon-google"]}
            />

            <ServiceSignInButton
                icon={twitterX}
                alt={"Sign In with Twitter-X"}
                onClick={handleXSignIn}
                className={styles["main__sign-in-button"]}
                iconClass={styles["main__sign-in-icon-twitterX"]}
            />
        </div>
    );
};

export default SignInMethods;