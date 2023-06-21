import React from "react";
import styles from '@/styles/Info.module.scss'
import {Rubik} from "next/font/google";

const rubik500 = Rubik({
    style:["normal"],
    weight:["500"],
    subsets:['latin'],
})
export default function Currently()
{
    return(
        <div className={styles.current}>
            <h1>
                <b style={{color:"white"}}>Currently:</b>
            </h1>
            <p>
                Pursuing Bachelors In Computer Science Engineering At PSG Institute Of Technology And Applied Research, Coimbatore, India.
            </p>
        </div>
    );
}