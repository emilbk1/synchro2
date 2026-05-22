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

    // Check if dark mode
    const isDark = () => document.documentElement.classList.contains("dark")

    // Star types for galaxy effect
    type Star = {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      floatOffset: number
      floatSpeed: number
      floatAmplitude: number
      twinkleSpeed: number
      twinkleOffset: number
      color: string
      type: 'small' | 'medium' | 'large' | 'bright'
    }

    const stars: Star[] = []

    // Color palettes for galaxy
    const darkColors = [
      '100, 180, 220',  // cyan
      '180, 140, 255',  // purple
      '255, 180, 120',  // orange/warm
      '120, 200, 255',  // light blue
      '255, 255, 255',  // white
      '200, 220, 255',  // ice blue
      '255, 200, 220',  // pink
    ]

    const lightColors = [
      '45, 85, 125',    // dark blue
      '100, 60, 150',   // purple
      '150, 100, 60',   // brown/warm
      '60, 120, 180',   // medium blue
      '80, 80, 100',    // gray
      '70, 100, 140',   // steel blue
      '140, 80, 100',   // mauve
    ]

    // Create small background stars (distant)
    for (let i = 0; i < 300; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1 + 0.3,
        speedX: (Math.random() - 0.5) * 0.05,
        speedY: (Math.random() - 0.5) * 0.03,
        opacity: Math.random() * 0.4 + 0.1,
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: Math.random() * 0.005 + 0.002,
        floatAmplitude: Math.random() * 5 + 2,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: darkColors[Math.floor(Math.random() * darkColors.length)],
        type: 'small'
      })
    }

    // Create medium stars
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.1,
        speedY: (Math.random() - 0.5) * 0.08,
        opacity: Math.random() * 0.5 + 0.2,
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: Math.random() * 0.01 + 0.005,
        floatAmplitude: Math.random() * 15 + 5,
        twinkleSpeed: Math.random() * 0.04 + 0.02,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: darkColors[Math.floor(Math.random() * darkColors.length)],
        type: 'medium'
      })
    }

    // Create large stars (closer)
    for (let i = 0; i < 80; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 2,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.1,
        opacity: Math.random() * 0.6 + 0.3,
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: Math.random() * 0.015 + 0.008,
        floatAmplitude: Math.random() * 25 + 10,
        twinkleSpeed: Math.random() * 0.05 + 0.02,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: darkColors[Math.floor(Math.random() * darkColors.length)],
        type: 'large'
      })
    }

    // Create bright prominent stars
    for (let i = 0; i < 25; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 3,
        speedX: (Math.random() - 0.5) * 0.08,
        speedY: (Math.random() - 0.5) * 0.05,
        opacity: Math.random() * 0.4 + 0.5,
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: Math.random() * 0.008 + 0.004,
        floatAmplitude: Math.random() * 20 + 8,
        twinkleSpeed: Math.random() * 0.06 + 0.03,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: darkColors[Math.floor(Math.random() * darkColors.length)],
        type: 'bright'
      })
    }

    // Animation loop
    let animationFrameId: number
    let time = 0
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 1

      const dark = isDark()
      const colors = dark ? darkColors : lightColors

      // Draw all stars
      stars.forEach((star, index) => {
        // Calculate floating position
        const floatY = Math.sin(time * star.floatSpeed + star.floatOffset) * star.floatAmplitude
        const floatX = Math.cos(time * star.floatSpeed * 0.7 + star.floatOffset) * (star.floatAmplitude * 0.5)
        
        // Calculate twinkle effect
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7
        const currentOpacity = star.opacity * twinkle

        const posX = star.x + floatX
        const posY = star.y + floatY

        // Get color based on theme
        const colorIndex = index % colors.length
        const color = colors[colorIndex]

        // Draw glow for larger stars
        if (star.type === 'bright' || star.type === 'large') {
          const gradient = ctx.createRadialGradient(
            posX, posY, 0,
            posX, posY, star.size * 3
          )
          gradient.addColorStop(0, `rgba(${color}, ${currentOpacity * 0.5})`)
          gradient.addColorStop(0.5, `rgba(${color}, ${currentOpacity * 0.2})`)
          gradient.addColorStop(1, `rgba(${color}, 0)`)
          
          ctx.beginPath()
          ctx.arc(posX, posY, star.size * 3, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()
        }

        // Draw star core
        ctx.beginPath()
        ctx.arc(posX, posY, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${currentOpacity})`
        ctx.fill()

        // Draw cross sparkle for bright stars
        if (star.type === 'bright') {
          const sparkleSize = star.size * 2 * twinkle
          ctx.strokeStyle = `rgba(${color}, ${currentOpacity * 0.6})`
          ctx.lineWidth = 0.5
          
          ctx.beginPath()
          ctx.moveTo(posX - sparkleSize, posY)
          ctx.lineTo(posX + sparkleSize, posY)
          ctx.stroke()
          
          ctx.beginPath()
          ctx.moveTo(posX, posY - sparkleSize)
          ctx.lineTo(posX, posY + sparkleSize)
          ctx.stroke()
        }

        // Update position (slow drift)
        star.x += star.speedX
        star.y += star.speedY

        // Wrap around edges
        if (star.x < -20) star.x = canvas.width + 20
        if (star.x > canvas.width + 20) star.x = -20
        if (star.y < -50) star.y = canvas.height + 50
        if (star.y > canvas.height + 50) star.y = -50
      })

      // Draw subtle connections between nearby medium/large stars
      const connectableStars = stars.filter(s => s.type === 'medium' || s.type === 'large')
      connectableStars.forEach((starA, i) => {
        connectableStars.slice(i + 1).forEach((starB) => {
          const dx = starA.x - starB.x
          const dy = starA.y - starB.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(starA.x, starA.y)
            ctx.lineTo(starB.x, starB.y)
            const opacity = (1 - distance / 120) * 0.08
            const color = dark ? '150, 180, 220' : '60, 90, 130'
            ctx.strokeStyle = `rgba(${color}, ${opacity})`
            ctx.lineWidth = 0.5
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

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.6 }} />
}
