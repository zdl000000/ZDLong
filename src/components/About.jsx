import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './About.css'

function About() {
  const wrapperRef = useScrollAnimation({ threshold: 0.1 })

  const stats = [
    { value: '1+', label: '年开发经验' },
    { value: '2', label: '核心项目' },
    { value: '10+', label: '技术栈' },
    { value: 'Top', label: '专业排名' },
  ]

  return (
    <section id="about" className="section about-section" ref={wrapperRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-avatar-col animate-el-left delay-1">
            <div className="about-avatar-wrapper">
              <div className="about-avatar-placeholder">
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="42" r="22" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-dim)' }} />
                  <ellipse cx="60" cy="95" rx="35" ry="20" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-dim)' }} />
                </svg>
              </div>
            </div>
          </div>

          <div className="about-content-col animate-el-right delay-2">
            <p className="section-tag">关于我</p>
            <h2 className="section-title">
              后端开发 <span className="highlight">&amp;</span> AI 应用开发
            </h2>
            <p className="about-text">
              我是钟迪龙，一名拥有 1 年多经验的 Java 后端开发工程师。
              毕业于广州工商学院，具备完整的软件项目开发经验，从需求分析、
              技术方案设计到开发部署和线上问题排查。
            </p>
            <p className="about-text">
              我熟悉 Spring Cloud 微服务架构，深入理解 JVM 和并发编程，
              同时也是一名 AI 应用开发爱好者，探索技术与创意的交叉点。
            </p>

            <div className="about-contact">
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>15813535608</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>1175854704@qq.com</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16-0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>广东 · 广州</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats">
          {stats.map((stat, i) => (
            <div key={i} className={'stat-card animate-el delay-' + (i + 1)}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
