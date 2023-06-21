import React, {useEffect} from "react";
import styles from "@/styles/Info.module.scss"
import {Rubik} from "next/font/google";

const rubik = Rubik({
    style:["normal"],
    weight:["400"],
    subsets:['latin']
})
const name = "Hi! I Am Jaivant B R, " +
    " Welcome to my portfolio!";

export default function Name()
{
    useEffect(() => {
        const typingAnimation = document.getElementById("typingAnimation");
        let i = 0;
        let interval = setInterval(() => {
            if (i <= name.length) {
                // @ts-ignore
                typingAnimation.textContent = name.slice(0, i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 200);
    }, []);
    return(
        <div id="name" className={styles.name}>
            <h1 id={"typingAnimation"}></h1>
        </div>
    );
}