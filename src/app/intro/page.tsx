"use client"
import React, { useState } from 'react';
import Slider from "@/app/components/slider/Slider"

export default function Home() {

    const [currentPage, setCurrentPage] = useState(0);

    const pageContent = [
        {
            title: 'Introduction to [Your Favorite Book]',
            content: 'Welcome to my website! [Your favorite book] is an amazing journey into a world of...',
        },
        {
            title: 'Exploring the World of [Your Favorite Book]',
            content: '[Your favorite book] is filled with intriguing characters and a captivating setting...',
        },
        {
            title: 'My Personal Connection with [Your Favorite Book]',
            content: 'I first discovered [Your favorite book] when...',
        },
    ];

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <h2>What do readers say about book?</h2>
            <Slider />
            <h2>Intro (from my perspective)</h2>
            <p>
                Step into my world, where the pages of J.K. Rowling's magical masterpiece, the Harry Potter series, unfold before you. As a devoted fan, I invite you to join me on a journey through the realms of wizardry, friendship, and the inexhaustible allure of Hogwarts School of Witchcraft and Wizardry. Rowling's unparalleled storytelling has woven a tapestry of enchantment that has left an indelible mark on readers of all ages. Come, let's explore the captivating universe that has captured my heart and the hearts of millions worldwide.
            </p>
        </div>
    )
}
