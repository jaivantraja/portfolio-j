import React from "react";
import styles from '@/styles/Info.module.scss'
import Image from "next/image";
export default function Footer()
{
    return(
        <div id={"contact"} className={styles.footer}>
             <div className={styles.head}>
                    <p className={styles.footerTitle}>Copyright &copy; 2023 Jaivant B R </p>
                    <p className={styles.footerTitle}>All rights reserved</p>
                 <a href={"#top"}>
                 <Image style={{filter: "brightness(100%) invert(100%)"}} title={"Up"} src="/icons/upload.png" alt="up" width="50" height="50"/>
             </a>
             </div>
                <div className={styles.Navigation}>
                    <h2 className={styles.footerTitle}>Navigation</h2>
                    <a href="#about" className={styles.navigationLink}>About</a>
                    <a href="#education" className={styles.navigationLink}>Education</a>
                    <a href="#experience" className={styles.navigationLink}>Experience</a>
                    <a href="#projects" className={styles.navigationLink} >Projects</a>
                    <a href="#courses" className={styles.navigationLink}>Courses</a>
                    <a href="#publications" className={styles.navigationLink}>Publications</a>
                </div>
                <div className={styles.socialLinks}>
                    <h2 className={styles.footerTitle}>Social Links</h2>
                    <a href={"https://www.linkedin.com/in/jaivant-rajasekaran-b6b6a7220"}>
                         <Image style={{filter: "brightness(100%) invert(100%)"}} title={"LinkedIn"} src="/icons/linkedin.png" alt="LinkedIn" width="25" height="50"/>
                    </a>
                    <a href={"mailto:rajajai2003@gmail.com"}>
                         <Image style={{filter: "brightness(100%) invert(100%)"}} title={"Gmail"} src="/icons/gmail-logo.png" alt="Gmail" width="25" height="50"/>
                    </a>
                    <a href={"https://medium.com/@rajajai2003"}>
                        <Image style={{filter: "brightness(100%) invert(100%)"}}  title={"Medium"} src="/icons/medium.png" alt="stack" width="25" height="50"/>
                    </a>
                    <a href="https://stackoverflow.com/users/22091209/jaivant-rajasekaran" target="_blank">
                        <Image style={{filter: "brightness(100%) invert(100%)"}} className={styles.linkImg}  title={"StackOverflow"} src="/icons/stack-overflow.png" alt="Stackoverflow" width="25" height="50"/>
                    </a>
                    <a href="https://www.github.com/jaivantraja" target="_blank">
                        <Image style={{filter: "brightness(100%) invert(100%)"}} className={styles.linkImg} title={"Github"} src="/icons/github.png" alt="Github" width="25" height="50"/>
                    </a>
                </div>
        </div>
    )
}