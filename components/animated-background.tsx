"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = document.body.scrollHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("scroll", () => {
      canvas.height = document.body.scrollHeight
    })

    // Particles
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      baseY: number
      floatOffset: number
      floatSpeed: number
      floatAmplitude: number
    }> = []

    // Create more particles with floating behavior
    for (let i = 0; i < 120; i++) {
      const y = Math.random() * canvas.height
      particles.push({
        x: Math.random() * canvas.width,
        y: y,
        baseY: y,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.6 + 0.1,
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: Math.random() * 0.02 + 0.01,
        floatAmplitude: Math.random() * 30 + 10,
      })
    }

    // Check if dark mode
    const isDark = () => document.documentElement.classList.contains("dark")

    // Animation loop
    let animationFrameId: number
    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 1

      // Draw particles
      particles.forEach((particle) => {
        // Calculate floating position using sine wave
        const floatY = Math.sin(time * particle.floatSpeed + particle.floatOffset) * particle.floatAmplitude
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y + floatY, particle.size, 0, Math.PI * 2)

        // Color based on theme
        if (isDark()) {
          ctx.fillStyle = `rgba(100, 180, 220, ${particle.opacity})`
        } else {
          ctx.fillStyle = `rgba(45, 85, 125, ${particle.opacity})`
        }
        ctx.fill()

        // Update position (slower horizontal drift)
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < -50) particle.y = canvas.height + 50
        if (particle.y > canvas.height + 50) particle.y = -50
      })

      // Draw connections
      particles.forEach((particleA, i) => {
        particles.slice(i + 1).forEach((particleB) => {
          const dx = particleA.x - particleB.x
          const dy = particleA.y - particleB.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particleA.x, particleA.y)
            ctx.lineTo(particleB.x, particleB.y)
            const opacity = (1 - distance / 150) * 0.2
            if (isDark()) {
              ctx.strokeStyle = `rgba(100, 180, 220, ${opacity})`
            } else {
              ctx.strokeStyle = `rgba(45, 85, 125, ${opacity})`
            }
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.4 }} />
}
