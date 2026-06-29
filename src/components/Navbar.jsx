import React, { useState, useEffect, useCallback } from 'react'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [handleScroll])

  const navItems = [
    { label: '首页', href: '#hero' },
    { label: '关于', href: '#about' },
    { label: '项目', href: '#projects' },
    { label: '技能', href: '#skills' },
    { label: '联系', href: '#contact' },
  ]

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  const navClass = 'navbar' + (scrolled ? ' navbar-scrolled' : '')

  return (
    <nav className={navClass}>
      <div className="navbar-inner container">
        <a className="navbar-logo" href="#hero">
          ZDL<span>.</span>
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="菜单"
        >
          <span className={'navbar-toggle-bar' + (mobileOpen ? ' active' : '')} />
          <span className={'navbar-toggle-bar' + (mobileOpen ? ' active' : '')} />
          <span className={'navbar-toggle-bar' + (mobileOpen ? ' active' : '')} />
        </button>

        <ul className={'navbar-menu' + (mobileOpen ? ' open' : '')}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="navbar-contact-btn" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}>
              联系我
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
