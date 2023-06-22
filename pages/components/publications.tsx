import React from "react";
import styles from '@/styles/Info.module.scss'
import {Rubik} from "next/font/google";

const rubik600 = Rubik({
    style:["normal"],
    weight:["600"],
    subsets:['latin'],
})

const publications = [
    {
        title: "Identification off ill Animals(poultry) Using Audio Processing And Thermal Imaging With Machine Learning",
        date: "2022-30-07",
        description: "To identify and separate sick animals from healthy ones thus production and efficiency is increased with less human intervention.",
        link:"https://www.ijert.org/identification-of-ill-animalspoultry-using-audio-processing-and-thermal-imaging-with-machine-learning"
    },
    {
        title: "Rating Of Quality Of Roads Through Image Processing And Live Traffic Analysis  ",
        date: "2022-30-07",
        description: "To evaluate the traffic congestion data, and compare the flow of traffic on the various types of roads to determine its quality.",
        link:"https://www.ijert.org/rating-quality-of-roads-through-image-processing-and-live-traffic-analysis"
    },
    {
        title: "A System For Analysing And Improving Sales Of A Product Using Machine Learning  ",
        date: "2022-30-07",
        description: "To evaluate the traffic congestion data, and compare the flow of traffic on the various types of roads to determine its quality.",
        link:""
    },
];
export default function Publications()
{
    return(
        <div id="publications" className={styles.publications}>
            <p className={rubik600.className} style={{fontSize:"38px",paddingBottom:"10px"}}>Publications</p>
            <ul className={styles.publicationList}>
                {publications.map((publication, index) => (
                    <li key={index} className={styles.publicationItem}>
                        <h3 className={styles.title}>{publication.title}</h3>
                        <p className={styles.date}>{publication.date}</p>
                        <p className={styles.description}>{publication.description}</p>
                        <a href={publication.link} target="_blank" className={styles.publicationLink}>View project</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
