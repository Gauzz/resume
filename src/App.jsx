import React, { useEffect, useMemo, useRef, useState } from "react";
import { experience, profile, projects, skillGroups } from "./data";

const projectCategories = [
  {
    id: "all",
    label: "All Projects",
  },
  {
    id: "backend",
    label: "Backend Systems",
  },
  {
    id: "fullstack",
    label: "Fullstack Apps",
  },
  {
    id: "ai",
    label: "AI / MLOps",
  },
  {
    id: "devops",
    label: "DevOps / Cloud",
  },
  {
    id: "finance",
    label: "Finance / Trading",
  },
  {
    id: "compliance",
    label: "Compliance Projects",
  },
  {
    id: "blockchain",
    label: "Blockchain / Web3",
  },
  {
    id: "healthcare",
    label: "Healthcare Tech",
  },
  {
    id: "edtech",
    label: "EdTech Platforms",
  },
  {
    id: "xr",
    label: "AR / VR / XR",
  },
  {
    id: "architecture",
    label: "Architecture / Perf",
  },
  {
    id: "mobile",
    label: "Mobile Engineering",
  },
  {
    id: "quality",
    label: "Quality Engineering",
  },
  {
    id: "legal",
    label: "Legal Tech",
  },
];

const MOBILE_PROJECT_BREAKPOINT = "(max-width: 820px)";
const CATEGORY_SWIPE_THRESHOLD = 52;

function App() {
  const [activeCategory, setActiveCategory] = useState(projectCategories[0].id);
  const repoNavRef = useRef(null);
  const swipeStartRef = useRef(null);

  const nameParts = profile.name.trim().split(/\s+/);
  const firstName = nameParts[0] ?? profile.name;
  const lastName = nameParts.slice(1).join(" ");

  const ecosystemGroups = useMemo(() => skillGroups, []);
  const activeCategoryIndex = useMemo(
    () =>
      projectCategories.findIndex((category) => category.id === activeCategory),
    [activeCategory],
  );

  const categorizedProjects = useMemo(() => {
    return projectCategories.reduce((accumulator, category) => {
      if (category.id === "all") {
        accumulator[category.id] = projects;
        return accumulator;
      }

      accumulator[category.id] = projects.filter((project) =>
        project.categories?.includes(category.id),
      );
      return accumulator;
    }, {});
  }, []);

  const visibleProjects = categorizedProjects[activeCategory] ?? projects;
  const footerLinks = profile.links.filter((link) =>
    ["linkedin", "github", "email"].includes(link.label.toLowerCase()),
  );

  const isMobileCategoryView = () =>
    typeof window !== "undefined" &&
    window.matchMedia(MOBILE_PROJECT_BREAKPOINT).matches;

  useEffect(() => {
    if (!isMobileCategoryView()) {
      return;
    }

    const repoNav = repoNavRef.current;
    if (!repoNav) {
      return;
    }

    const activeTab = repoNav.querySelector(
      `[data-category-id="${activeCategory}"]`,
    );

    activeTab?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth",
    });
  }, [activeCategory]);

  const handleRepoTouchStart = (event) => {
    if (!isMobileCategoryView()) {
      swipeStartRef.current = null;
      return;
    }

    const touchPoint = event.changedTouches[0];
    swipeStartRef.current = {
      x: touchPoint.clientX,
      y: touchPoint.clientY,
    };
  };

  const handleRepoTouchCancel = () => {
    swipeStartRef.current = null;
  };

  const handleRepoTouchEnd = (event) => {
    if (!swipeStartRef.current || !isMobileCategoryView()) {
      swipeStartRef.current = null;
      return;
    }

    const touchPoint = event.changedTouches[0];
    const deltaX = touchPoint.clientX - swipeStartRef.current.x;
    const deltaY = touchPoint.clientY - swipeStartRef.current.y;
    swipeStartRef.current = null;

    if (
      Math.abs(deltaX) < CATEGORY_SWIPE_THRESHOLD ||
      Math.abs(deltaX) <= Math.abs(deltaY)
    ) {
      return;
    }

    if (
      deltaX < 0 &&
      activeCategoryIndex >= 0 &&
      activeCategoryIndex < projectCategories.length - 1
    ) {
      setActiveCategory(projectCategories[activeCategoryIndex + 1].id);
      return;
    }

    if (deltaX > 0 && activeCategoryIndex > 0) {
      setActiveCategory(projectCategories[activeCategoryIndex - 1].id);
    }
  };

  return (
    <div className="app">
      <div className="grid-overlay" aria-hidden="true" />
      <main className="resume-shell">
        <section className="hero reveal">
          <div className="hero-main">
            <h2>
              <span>{firstName}</span>
              <span>{lastName || firstName}</span>
            </h2>
            <nav className="contact-strip" aria-label="Contact links">
              {profile.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  title={link.label}
                >
                  <img src={link.icon} alt="" aria-hidden="true" />
                </a>
              ))}
            </nav>
            <p className="role">{profile.role}</p>
            <p className="summary">{profile.summary}</p>
          </div>
          <aside className="hero-image-wrap">
            <img
              src={profile.image}
              alt="Portrait placeholder"
              className="hero-image"
            />
          </aside>
        </section>

        <section className="section reveal">
          <div className="section-title">Technical Ecosystem</div>
          <div className="chip-columns">
            {ecosystemGroups.map((group) => (
              <article key={group.title} className="chip-group">
                <h3>{group.title}</h3>
                <div className="chip-list">
                  {group.skills.map((skill) => (
                    <span className="chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal">
          <div className="section-title">Career Timeline</div>
          <div className="timeline-list">
            {experience.map((job) => (
              <article
                className={`timeline-item ${job.current ? "is-current" : ""}`}
                key={`${job.company}-${job.role}`}
              >
                <div className="timeline-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p>{job.company}</p>
                  </div>
                  <span>{job.duration}</span>
                </div>
                <p className="timeline-lead">{job.points[0]}</p>
                <ul>
                  {job.points.slice(1).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section repo-section reveal">
          <div className="section-title">Project Repositories</div>
          <div className="repo-board">
            <aside
              className="repo-nav"
              aria-label="Project categories"
              ref={repoNavRef}
            >
              {projectCategories.map((category) => (
                <button
                  type="button"
                  key={category.id}
                  data-category-id={category.id}
                  className={`repo-tab ${activeCategory === category.id ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span>{category.label}</span>
                </button>
              ))}
            </aside>
            <div
              className="repo-list"
              onTouchStart={handleRepoTouchStart}
              onTouchEnd={handleRepoTouchEnd}
              onTouchCancel={handleRepoTouchCancel}
            >
              {visibleProjects.length === 0 ? (
                <p className="repo-empty">
                  No projects found in this category.
                </p>
              ) : (
                visibleProjects.map((project) => (
                  <article className="project-row" key={project.name}>
                    <div className="project-head">
                      <h3>{project.name}</h3>
                      <span>{project.tag}</span>
                    </div>
                    <p>{project.description}</p>
                    <div className="stack-row">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </section>

        <footer className="footer reveal">
          <div className="footer-links">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
