import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content container">
        <div className="hero-text">
          <p className="hero-greeting">你好，我是</p>
          <h1 className="hero-title">
            ZD<span className="highlight">Long</span>
          </h1>
          <h2 className="hero-subtitle">
            后端开发工程师 · AI 应用开发
          </h2>
          <p className="hero-desc">
            专注构建高性能后端系统，探索 AI 驱动的设计边界。<br />
            用代码构建逻辑，用设计表达想象。
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              查看作品
            </a>
            <a href="#contact" className="btn btn-outline">
              联系我
            </a>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-line" />
          <span>向下滚动</span>
        </div>
      </div>
    </section>
  )
}

export default Hero


