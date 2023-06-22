import React from "react";
import styles from '@/styles/Info.module.scss'
import {Rubik} from "next/font/google";

const rubik600 = Rubik({
    style:["normal"],
    weight:["600"],
    subsets:['latin'],
})

export default function Education()
{
    return(
        <div id={"education"} className={styles.education}>
            <p className={rubik600.className} style={{fontSize:"38px"}}>Education</p>
            <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                    <h3 className={styles.date}>2021 - 2025</h3>
                    <h4 className={styles.degree}>BE Computer Science Engineering <b>GPA OF 8.48/10</b></h4>
                    <p className={styles.school}>PSG Insitute Of Technology And Applied Research, Coimbatore, India</p>
                </div>
                <div className={styles.timelineItem}>
                    <h3 className={styles.date}>2015 - 2021</h3>
                    <h4 className={styles.degree}>Secondary School</h4>
                    <p className={styles.school}>The NGP School, Coimbatore, India</p>
                </div>
                <div className={styles.timelineItem}>
                    <h3 className={styles.date}>2013 - 2015</h3>
                    <h4 className={styles.degree}>Primary School</h4>
                    <p className={styles.school}>Singapore International School, Indonesia</p>
                </div>
                <div className={styles.timelineItem}>
                    <h3 className={styles.date}>2013 - 2015</h3>
                    <h4 className={styles.degree}>Primary School</h4>
                    <p className={styles.school}>Rama International School, Indonesia</p>
                </div>
        </div>
        </div>
    )
}
