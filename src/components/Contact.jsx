import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Contact.css'

function Contact() {
  const wrapperRef = useScrollAnimation({ threshold: 0.05 })

  const contactMethods = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: '电话',
      value: '15813535608',
      href: 'tel:15813535608',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      label: '邮箱',
      value: '1175854704@qq.com',
      href: 'mailto:1175854704@qq.com',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16-0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: '地址',
      value: '广东 · 广州',
      href: '#',
    },
  ]

  return (
    <footer id="contact" className="contact-section" ref={wrapperRef}>
      <div className="container contact-container">
        <div className="contact-top">
          <h2 className="animate-el">
            一起<span className="highlight">创造</span>些什么吧
          </h2>
          <p className="contact-subtitle animate-el delay-1">
            无论是后端开发还是 AI 应用开发，我很乐意交流合作
          </p>
        </div>

        <div className="contact-methods">
          {contactMethods.map((method, i) => (
            <a
              key={i}
              href={method.href}
              className={'contact-method-card animate-el delay-' + String(i + 2)}
              data-index={'0' + String(i + 1)}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <div className="method-icon">{method.icon}</div>
              <span className="method-label">{method.label}</span>
              <span className="method-value">{method.value}</span>
            </a>
          ))}
        </div>

        <div className="contact-bottom">
          <div className="contact-divider" />
          <p className="copyright">
            {'\u00a9 ' + new Date().getFullYear() + ' 钟迪龙 \u2022 用代码构建逻辑，用设计表达想象'}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Contact
