import React from "react";
import styles from "@/styles/Info.module.scss"
import About from "@/pages/components/about";
import Currently from "@/pages/components/currently";
import Skills from "@/pages/components/skills";
import Profile from "@/pages/components/profile";
import Intrest from "@/pages/components/intrest";
import Links from "@/pages/components/links";
import Name from "@/pages/components/name";
import Search from "@/pages/components/search";
import Education from "@/pages/components/education";
import Experience from "@/pages/components/experience";
import Projects from "@/pages/components/projects";
import Courses from "@/pages/components/courses";
import Publications from "@/pages/components/publications";
import Achievements from "@/pages/components/achievements";
import Footer from "@/pages/components/footer";
import Image from "next/image";
import {useEffect} from "react";


export default function Home() {
    useEffect(() => {
        window.addEventListener('scroll', function() {
            const scrollToTopBtn = document.getElementById('scrollToTopBtn');
            if (window.scrollY > 100) {
                // @ts-ignore
                scrollToTopBtn.style.display = 'block';
            } else {
                // @ts-ignore
                scrollToTopBtn.style.display = 'none';
            }
        });
    }, []);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  return (
    <main className={styles.body}>
            <Search/>
        <Name/>
            <Skills/>
        <Profile/>
        <Currently/>
            <Intrest/>
            <Links/>
            <About/>
            <Education/>
            <Experience/>
            <Projects/>
            <Courses/>
            <Publications/>
            <Achievements/>
            <Footer/>
        <button id="scrollToTopBtn" className={styles.scrollBtn} onClick={scrollToTop}>
            <Image style={{filter: "brightness(100%) invert(100%)"}} title={"Up"} src="/icons/upload.png" alt="up" width="50" height="50"/>
        </button>
    </main>
  )
}
