import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Projects.css'

function Projects() {
  const wrapperRef = useScrollAnimation({ threshold: 0.05 })

  const projects = [
    {
      title: '在线视频分享系统',
      tag: '微服务架构',
      desc: '基于 Spring Cloud 微服务架构的视频分享平台，涵盖资源管理、互动服务和管理后台。集成 Elasticsearch 全文搜索、Redis 缓存优化、Seata 分布式事务。',
      tech: ['Spring Cloud', 'MySQL', 'Redis', 'Elasticsearch', 'Nacos', 'Seata'],
    },
    {
      title: '个人博客系统',
      tag: '前后端分离',
      desc: '基于 SpringBoot + Vue3 的现代化博客系统，采用 RESTful API 设计规范，实现文章 CRUD、评论管理、用户认证等完整功能。',
      tech: ['SpringBoot', 'MySQL', 'MyBatis', 'Vue3', 'Vite', 'ElementPlus'],
    },
    {
      title: '后端系统研发',
      tag: '企业级应用',
      desc: '参与后台系统业务研发，负责需求分析、技术方案制定、Demo 验证及核心业务系统的部署和问题排查。',
      tech: ['Java', 'Spring Boot', 'Git', 'Maven', 'MySQL'],
    },
  ]

  return (
    <section id="projects" className="section projects-section" ref={wrapperRef}>
      <div className="container">
        <p className="section-tag animate-el">精选作品</p>
        <h2 className="section-title animate-el delay-1">项目经历</h2>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className={'project-card animate-el-scale delay-' + String(i + 2)}>
              <div className="project-image">
                <ProjectIcon type={i} />
              </div>
              <div className="project-info">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-tag">{project.tag}</span>
                </div>
 <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t, j) => (
                    <span key={j} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectIcon({ type }) {
  const icons = [
    <svg key="v" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="8" y="16" width="48" height="32" rx="4" />
      <polygon points="26,26 26,42 40,34" fill="currentColor" opacity="0.15" />
      <line x1="8" y1="24" x2="56" y2="24" />
      <line x1="8" y1="40" x2="56" y2="40" />
    </svg>,
    <svg key="b" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="12" y="8" width="40" height="48" rx="3" />
      <line x1="20" y1="20" x2="44" y2="20" />
      <line x1="20" y1="28" x2="44" y2="28" />
      <line x1="20" y1="36" x2="36" y2="36" />
    </svg>,
    <svg key="bk" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="16" y="12" width="32" height="40" rx="3" />
      <circle cx="32" cy="28" r="6" />
      <line x1="24" y1="42" x2="40" y2="42" />
      <line x1="28" y1="46" x2="36" y2="46" />
    </svg>,
  ]

  return (
    <div className="project-icon-wrap">
      {icons[type] || icons[0]}
    </div>
  )
}

export default Projects
