import React from "react";
import styles from '@/styles/Info.module.scss';
import {Rubik} from "next/font/google";
const rubik600 = Rubik({
    style:["normal"],
    weight:["600"],
    subsets:['latin'],
})

const rubik300 = Rubik({
    style:["normal"],
    weight:["300"],
    subsets:['latin'],
})
const str="--> Resume (click here)"
export default function About()
{
    // @ts-ignore
    return (
        <div id="about" className={styles.about} >
           <p className={rubik600.className} style={{fontSize:"38px"}}>
               About
           </p>
            <p className={rubik300.className} style={{fontSize:"25px",color:"#cccc"}}>
                A passionate and enthusiastic learner about the latest advancements in the field and staying forefront of technological innovation.
                My strong analytical thinking, attention to detail, and commitment to quality have consistently contributed to the success.
                 Actively seeking opportunities to delve into solving real world problems by committing to continuous growth and exploration.
            </p>
            <div>
                <a className={styles.resumeLink}>
                    <p  style={{fontSize:"25px", paddingTop:"10px", letterSpacing:"2px", cursor:"pointer"}}>{str}</p>
                </a>
            </div>
        </div>
    );
}
