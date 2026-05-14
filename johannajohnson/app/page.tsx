"use client";

import { useEffect, useRef, useState } from "react";
import "./landingpage.css"; 

export default function LandingPage() {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const words = ["Welcome To My Website"];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      if (typedText.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        timeout = setTimeout(() => {}, 500);
      } else {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
      }
    } else {
      if (typedText.length === currentWord.length) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
      } else {
        timeout = setTimeout(() => {
          setTypedText(currentWord.slice(0, typedText.length + 1));
        }, 100);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, wordIndex]);

 
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationId: number;
    let time = 0;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gradient = ctx.createLinearGradient(
        Math.sin(time) * 100 + canvas.width / 2,
        Math.cos(time * 0.7) * 100 + canvas.height / 2,
        Math.sin(time + Math.PI) * 100 + canvas.width / 2,
        Math.cos(time * 1.3 + Math.PI) * 100 + canvas.height / 2
      );
      
      gradient.addColorStop(0, "rgba(99, 102, 241, 0.15)");
      gradient.addColorStop(0.5, "rgba(168, 85, 247, 0.1)");
      gradient.addColorStop(1, "rgba(236, 72, 153, 0.08)");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      
      for (let i = 0; i < 50; i++) {
        const x = Math.sin(time * 0.5 + i) * 200 + canvas.width * (i % 100) / 100;
        const y = Math.cos(time * 0.3 + i * 2) * 150 + canvas.height * 0.5;
        const size = Math.sin(time * 2 + i) * 2 + 3;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${0.1 + Math.sin(time + i) * 0.05})`;
        ctx.fill();
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="landing-container">
     
      <canvas ref={canvasRef} className="canvas-background" />
      
      
      <div className="floating-element floating-1" />
      <div className="floating-element floating-2" />
      <div className="floating-element floating-3" />

      
      <div className="main-content">
        <div className="typing-container">
          <h1 className="typing-text">
            {typedText}
            <span className="cursor" />
          </h1>
        </div>
      </div>
    </div>
  );
}