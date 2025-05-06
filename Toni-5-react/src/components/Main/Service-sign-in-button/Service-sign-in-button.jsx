import React from "react";
import styles from "./Service-sign-in-button.module.css";

function ServiceSignInButton({icon, service, onClick, className, iconClass}) {
    return (
        <button className={className} onClick={onClick}>
            {icon && <img className={[styles["service-icon"], iconClass].filter(Boolean).join(" ")} src={icon} alt={service} />}
        </button>
    );
};

export default ServiceSignInButton;