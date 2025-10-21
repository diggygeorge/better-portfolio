"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Progress } from "./ui/Progress"
import { cn } from "@/lib/utils" // optional helper if using shadcn utils

export default function LoadingScreen() {
  const messages = [
    "Fetching the gallery...",
    "Setting up the backend...",
    "Compiling the projects...",
    "Polishing the design..."
  ]

  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  // progress bar animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : 100))
    }, 100) // fills over ~5s
    return () => clearInterval(interval)
  }, [])

  // message cycling
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length)
    }, 1500)
    return () => clearInterval(messageInterval)
  }, [])

  // hide screen after done loading
  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setVisible(false), 500)
      return () => clearTimeout(timeout)
    }
  }, [progress])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          {/* Big Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Daniel Thomas
          </motion.h1>

          {/* Fun Message */}
          <motion.p
            key={messageIndex}
            className="text-lg text-muted-foreground mb-6 h-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {messages[messageIndex]}
          </motion.p>

          {/* Progress Bar */}
          <div className="w-64 md:w-96">
            <Progress value={progress} className="h-2" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
