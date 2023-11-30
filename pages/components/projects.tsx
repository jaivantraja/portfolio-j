import React from "react";
import styles from '@/styles/Info.module.scss'
import {Rubik} from "next/font/google";
import {it} from "node:test";

const rubik600 = Rubik({
    style:["normal"],
    weight:["600"],
    subsets:['latin'],
})

const projects=
    [
        {
            title: "Inventory Management Using Django Framework",
            info: "",
            desc: "A web-based application that incorporates Django framework to efficiently manage purchases and sales from various companies and store them in the respective inventory model.",
            github: "https://github.com/jaivantraja/inventory-management.git",
            demo: ""
        },
        {
            title: "Resume Builder Tool Using Java",
            info: "",
            desc: "The resume builder tool is used to create resume documents and store it in the computer's file manager. Further the documents can be sent to employer's mail and the employer can login and view in on the other side.",
            github: "https://github.com/jaivantraja/resume-builder.git",
            demo: ""
        },
        {
            title: "Automated Real-time Landslide Detection System",
            info: "",
            desc: "A real-time robust and efficient landslide detection system using instance segmentation algorithms such as YOLOv8 to analyze objects in every frame being captured through a camera achieved through thresholding the slope areas as Region of Interest. Furthermore, a website is developed using ReactJs and Flask to retrieve analysis of the event from the Firebase that provides a world-map highlighted with areas prone to landslide , images of the event along with a confidence threshold.",
            github: "https://github.com/jaivantraja/landslide-system.git",
            demo: ""
        },
        {
            title: "Expense Tracker App Using Flutter",
            info: "",
            desc: "It is an app that manages the expenses of individuals who frequently travel. Users can create an account, and then add their trip schedules, further add expenses anytime they want, and can view it. Users can then store and save it on their phone as a CSV file and can also share it through other social media apps.",
            github: "https://github.com/jaivantraja/expense-app.git",
            demo: ""
        },
    ]
export default function Projects()
{
    return(
        <div id={"projects"} className={styles.projects}>
            <p className={styles.heading} style={{fontSize:"38px",paddingBottom:"10px"}}>Projects</p>
            {projects.map((item, index) => (
            <div className={styles.projectCard} key={index}>
                    <p style={{fontWeight:"bold",fontSize:"35px"}} className={styles.projectTitle}>{item.title}</p>
                <p style={{fontSize:"25px",color:"#cccc"}}> {item.desc}</p>
                    <p style={{fontSize:"25px"}} className={styles.projectDescription}>{item.info}</p>
                <a href={item.github} target="_blank" className={styles.projectLink}>View project</a>
            </div>
            ))}
        </div>
    )
}
