import React from "react";
import styles from '@/styles/Info.module.scss'
import Image from "next/image";

export default function Profile()
{
    return(
        <div className={styles.profile}>
            <Image style={{paddingTop:'37px',userSelect:"none"}} title={"Jaivant"} src="/profile.jpg" alt="profile" width="1500" height="50"/>
        </div>
    )
}