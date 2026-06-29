import React, { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Skills.css'

function Skills() {
  const wrapperRef = useScrollAnimation({ threshold: 0.1 })

  const skillCategories = [
    {
      title: '服务端',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <circle cx="6" cy="6" r="1" fill="currentColor" />
          <circle cx="6" cy="18" r="1" fill="currentColor" />
        </svg>
      ),
      skills: [
        { name: 'SpringBoot', level: 90 },
        { name: 'Spring Cloud', level: 80 },
        { name: 'SSM', level: 85 },
        { name: 'RabbitMQ', level: 60 },
        { name: '设计模式', level: 65 },
      ],
    },
    {
      title: '数据库',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'Redis', level: 80 },
      ],
    },
    {
      title: '前端',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      skills: [
        { name: 'Vue3', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'Vite', level: 70 },
      ],
    },
    {
      title: '工具 & 其他',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      skills: [
        { name: 'Git', level: 80 },
        { name: 'Maven', level: 75 },
        { name: 'HTTP/TCP', level: 65 },
      ],
    },
  ]

  return (
    <section id="skills" className="section skills-section" ref={wrapperRef}>
      <div className="container">
        <p className="section-tag animate-el">核心能力</p>
        <h2 className="section-title animate-el delay-1">技术栈</h2>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={i} className={'skill-category-card animate-el delay-' + (i + 2)}>
              <div className="skill-cat-header">
                <div className="skill-cat-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-list">
                {cat.skills.map((skill, j) => (
                  <div key={j} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className='skill-fill active'
                        style={{ '--target-width': skill.level + '%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
