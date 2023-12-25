"use client"
import React, { useState } from 'react';
import Slider from "@/app/components/slider/Slider"

export default function Home() {

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <h2>What do readers say about book?</h2>
            <Slider />
            <h2>Intro (from my perspective)</h2>
            <p>
                Step into my world, where the pages of J.K. Rowlings magical masterpiece, the Harry Potter series, unfold before you. As a devoted fan, I invite you to join me on a journey through the realms of wizardry, friendship, and the inexhaustible allure of Hogwarts School of Witchcraft and Wizardry. Rowlings unparalleled storytelling has woven a tapestry of enchantment that has left an indelible mark on readers of all ages. Come, lets explore the captivating universe that has captured my heart and the hearts of millions worldwide.
            </p>
        </div>
    )
}
