import React from "react";
import styles from "@/styles/Info.module.scss"
import {Rubik} from "next/font/google";
import Image from "next/image";

const rubik600 = Rubik({
    style:["normal"],
    weight:["600"],
    subsets:['latin'],
})
export default function Skills()
{
    return(
        <div className={styles.skills}>
                <div className={styles.skillSet}>
                    <div className={styles.img}>
                        <Image className={styles.image} src="./icons/python.png" alt="Python" width="35" height="40"/>
                        <span>Python</span>
                    </div>
                    <div className={styles.img}>
                        <Image className={styles.image} src="./icons/java.png" alt="Java" width="35" height="40"/>
                        <span>Java</span>
                    </div>
                    <div className={styles.img} >
                        <Image className={styles.image} src="./icons/java-script.png" alt="JS" width="35" height="40"/>
                        <span>Javascript</span>
                    </div>
                    <div className={styles.img}>
                        <Image className={styles.image} src="./icons/atom.png" alt="React" width="35" height="40"/>
                        <span>React</span>
                    </div>
                    <div className={styles.img}>
                        <Image className={styles.image} src="./favicon.ico" alt="React" width="35" height="40"/>
                        <span>NextJS</span>
                    </div>
                    <div className={styles.img}>
                        <Image className={styles.image} src="./icons/sql-server.png" alt="SQL" width="35" height="60"/>
                        <span style={{color:"black",fontWeight:"bold"}}>SQL</span>
                    </div>
                </div>
                <div className={styles.skillName}>
                    <div >
                        <span style={{color:"black"}}>Django</span>
                    </div>
                    <div>
                        <span style={{color:"black"}}>TensorFlow</span>
                    </div>
                    <div>
                        <span style={{color:"black"}}>OpenCV</span>
                    </div>
                 </div>
            <div className={styles.skillName>
                    <div >
                        <span style={{color:"black"}}>Flutter</span>
                    </div>
                    <div >
                        <span style={{color:"black"}}>Firebase</span>
                    </div>
                    <div >
                        <span style={{color:"black"}}>MongoDB</span>
                    </div>
            </div>
            </div>
    );

}
