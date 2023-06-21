import React from "react";
import {useState} from "react";
import styles from '@/styles/Info.module.scss'
import Image from "next/image";
const menuItems = [
    { label: 'About', url: '#about' },
    { label: 'Courses', url: '#courses' },
    { label: 'Experience', url: '#experience' },
    { label: 'Education', url: '#education' },
    { label: 'Projects', url: '#projects' },
    { label: 'Publications', url: '#publications' },
    { label: 'Contacts', url: '#contact' },
];
export default function Search()
{
    return(
        <div id={"top"} className={styles.searchBar}>
                {menuItems.map((item, index) => (
                    <div key={index} className={styles.a}>
                        <a href={item.url}>{item.label}</a>
                    </div>
                ))}
        </div>

    )
}