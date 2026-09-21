import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 'codediary',
      title: 'CodeDiary – Developer Workspace & Learning Platform',
      category: 'Next.js / Supabase / PWA',
    bullets: [
      'All-in-one developer workspace for DSA practice, technical notes, code snippets, and interview preparation',
      '500+ coding interview questions across 100+ programming topics with structured solutions and complexity analysis', 
      'Integrated code editor and code-sharing workspace for writing, executing, and sharing programming solutions', 
      'Progress analytics with streaks, daily activity, learning milestones, and completed-topic tracking'
    ],
      tech: [
        'Next.js',
        'React',
        'TypeScript',
        'Supabase',
        'Monaco Editor',
        'PWA'
      ],
      githubUrl: 'https://github.com/rahul-github-18',
      liveUrl: 'https://kodediary.vercel.app'
    },

    {
      id: 'threads',
      title: 'Trending – Social Media Platform',
      category: 'React / Spring Boot / PostgreSQL',
      bullets: [ 
        'Full-stack social media platform built with React, Spring Boot, and PostgreSQL', 
        'Secure JWT authentication and authorization using Spring Security', 
        'Create, edit, delete, like, and manage threads through RESTful APIs',
        'User profiles with follow / unfollow relationships and follower management'
      ],
      tech: [
        'React',
        'TypeScript',
        'Spring Boot',
        'Spring Security',
        'JWT',
        'PostgreSQL'
      ],
      githubUrl: 'https://github.com/rahul-github-18/Trending',
      liveUrl: 'https://trendingthread.vercel.app'
    },

    {
      id: 'talenttrack',
      title: 'TalentTrack – Job Discovery & Management Platform',
      category: 'Java / Spring Boot / PostgreSQL',
     bullets: [ 
       'Full-stack job discovery platform for browsing and managing job opportunities', 
       'Candidate dashboard for tracking job applications and application status',
       'Multi-role authentication and authorization for different user types', 
       'Scalable RESTful backend with Spring Boot, Hibernate ORM, and PostgreSQL for reliable data management'
     ],
      tech: [
        'Java',
        'Spring Boot',
        'Hibernate',
        'Spring Security',
        'JWT Authentication',
        'HTML',
        'CSS',
        'JavaScript',
        'PostgreSQL',
        'REST API'
      ],
      githubUrl: 'https://github.com/rahul-github-18',
      liveUrl: 'https://attalenttrack.onrender.com'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <span className="section-eyebrow">Featured Work</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-description">
          A selection of applications I have designed and developed across
          frontend, backend, databases, and full-stack systems.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((proj) => (
          <article key={proj.id} className="clean-card proj-card">

            <div className="proj-top-header">
              <div className="proj-heading">
                <span className="proj-cat-tag">
                  {proj.category}
                </span>

                <h3 className="proj-card-title">
                  {proj.title}
                </h3>
              </div>

              <div className="proj-actions">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn secondary-btn"
                  >
                    <GithubIcon size={13} />
                    <span>GitHub</span>
                  </a>
                )}

                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn primary-btn"
                  >
                    <Globe size={13} />
                    <span>Live Demo</span>
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>

            <ul className="proj-short-features">
              {proj.bullets.map((bullet, index) => (
                <li key={index}>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="proj-tech-row">
              {proj.tech.map((technology, index) => (
                <span
                  key={index}
                  className="tech-badge"
                >
                  {technology}
                </span>
              ))}
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}
