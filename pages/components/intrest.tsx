import React from "react";
import styles from "@/styles/Info.module.scss"
export default function Intrest()
{
    return(
        <div className={styles.interest}>
            <h1>
               <b style={{color:"white"}}> Phone Number:</b> +91 8946074645
            </h1>
            <h1>
                <b style={{color:"white"}}> Based In:</b> Coimbatore,India
            </h1>
        </div>
    )
}