import React from "react";
import styles from '@/styles/Info.module.scss'
import {Rubik} from "next/font/google";
import Image from "next/image";

const rubik600 = Rubik({
    style:["normal"],
    weight:["700"],
    subsets:['latin'],
})

const timelineData = [
    {
        src:"./icons/esillicon.jpg",
        status:"Active",
        name: "eSilicon Labs",
        title: "Landslide Prediction System",
        description:"Currently working on a real-time efficient and robust landslide detection system.",
    },
    {
        src:"./icons/sap.png",
        status: "Active",
        name: "SAP Labs",
        title: "Blockchain Based Validation System",
        description:"Currently working on a blockchain based badge validation system.",
    },
    {
        src:"./icons/sap.png",
        status: "Completed",
        name: "Squash Apps",
        title: "Full Stack-Web Development",
        description:"Worked using NodeJS(ExpressJS), ReactJS, MongoDB, Postman API tool",
    }
];

export default function Experience()
{
    return(
        <div id={"experience"} className={styles.experience}>
            <p className={styles.heading} style={{fontSize:"38px",paddingBottom:"10px"}}>Experience</p>
            <div className={styles.portfolioGrid}>
                {timelineData.map((item, index) => (
                    <div className={styles.portfolioItem} key={index}>
                        <div style={{height:"240px"}}>
                             <Image  src={item.src} alt={item.title} width="230" height="20"/>
                        </div>
                            <h2 style={{fontWeight:"bold",fontSize:"35px",paddingBottom:"40px"}}>{item.name} ({item.status})</h2>
                            <h3 style={{fontWeight:"bold",fontSize:"25px"}}>{item.title}</h3>
                            <p style={{color:"#cccc"}}>{item.description} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
