import React from "react";
import Image from "next/image";
import styles from "@/styles/Info.module.scss"
export default function Links()
{
    return(
        <div className={styles.links}>
            <a href="https://www.linkedin.com/in/jaivant-rajasekaran-b6b6a7220" target="_blank">
                <Image className={styles.linkImg} title={"LinkedIn"} src="./icons/linkedin.png" alt="LinkedIn" width="40" height="50"/>
            </a>
            <a href="https://www.github.com/jaivantraja" target="_blank">
                <Image className={styles.linkImg} title={"Github"} src="./icons/github.png" alt="Github" width="40" height="50"/>
            </a>
            <a href="mailto:rajajai2003@gmail.com" target="_blank">
                <Image className={styles.linkImg} title={"Gmail"} src="./icons/gmail-logo.png" alt="Gmail" width="40" height="50"/>
            </a>
            <a href="https://stackoverflow.com/users/22091209/jaivant-rajasekaran" target="_blank">
                <Image className={styles.linkImg}  title={"StackOverflow"} src="./icons/stack-overflow.png" alt="Stackoverflow" width="40" height="50"/>
            </a>
        </div>
    )
}
