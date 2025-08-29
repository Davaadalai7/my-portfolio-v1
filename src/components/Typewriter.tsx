"use client"
import React, { useEffect, useState } from "react"

const words = [
  "Full-Stack Developer",
  "React Enthusiast",
  "Modern Web Explorer",
  "Lifelong Learner",
  "Engineer with an Eye for Detail"
]

export default function Typewriter() {
  const [currentWord, setCurrentWord] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const word = words[currentWord]
    
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 100)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 50)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setCurrentWord((prev) => (prev + 1) % words.length)
    }
    
    return () => clearTimeout(timeout)
  }, [displayed, deleting, currentWord])

  return (
    <span className="text-black dark:text-white font-bold">
      {displayed}
      <span className="animate-pulse text-black dark:text-white">|</span>
    </span>
  )
} 