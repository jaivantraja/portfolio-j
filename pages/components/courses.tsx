import React from "react";
import styles from '@/styles/Info.module.scss'
import {Rubik} from "next/font/google";
import Image from "next/image";

const rubik600 = Rubik({
    style:["normal"],
    weight:["600"],
    subsets:['latin'],
})
const courses=
    [
        {
            title:"Supervised Machine Learning: Regression And Classification",
            period:"3 Weeks",
            link:"https://coursera.org/share/081cb72d36b3fbbfd99aee0abb76cca5",
            author:"Andrew Ng, DeepLearning.AI"
        },
        {
            title:"Python Crash Course By Google",
            period:"6 Weeks",
            link:"https://coursera.org/share/dddb88ba4d5b5e5973d2e91fbb124df2",
            author:"Google"
        },
        {
            title:"Neural Networks And Deep Learning",
            period:"4 Weeks",
            link:"https://coursera.org/share/77209f67ef7a23e7b521316ab8450358",
            author:"Andrew Ng, DeepLearning.AI"
        },
        {
            title:"Postman API Fundamentals Student Expert",
            period:"",
            link:"https://api.badgr.io/public/assertions/guhVLhZrRR6BGYZs6HrWWg?identity__email=21z120%40psgitech.ac.in",
            author:"Postman Student Program"
        },

    ]

export default function Courses()
{
    const handleClick =(param:string )=>
    {
        window.open(param,"_blank");
    }
    return(
        <div id="courses" className={styles.courses}>
            <p className={styles.heading} style={{fontSize:"38px",paddingBottom:"10px"}}>Courses</p>
            <div className={styles.courseList}>
                {courses.map((item, index) => (
                <div className={styles.courseCard} key={index} onClick={()=>handleClick(item.link)}>
                        <div className={styles.courseInfo}>
                            <a  className={styles.courseTitle}>{item.title}</a>
                            <div className={styles.courseView}>
                                <a href={item.link} target="_blank">
                                    <Image  style={{filter: "brightness(100%) invert(100%)"}} title={"next"} src="./icons/next.png" alt="next" width="50" height="50"/>
                                </a>
                            </div>
                            <p  className={styles.courseDescription}>{item.period}</p>
                            <p style={{textDecoration:"underline"}} className={styles.courseDescription}>{item.author}</p>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    )
}
