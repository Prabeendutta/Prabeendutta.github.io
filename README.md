# Prabeen Dutta — Senior DevOps / Platform Engineer Portfolio

[![Live Portfolio](https://img.shields.io/badge/Portfolio-projtrunks.xyz-111827?style=flat\&logo=google-chrome\&logoColor=white)](https://projtrunks.xyz)
[![GitHub](https://img.shields.io/badge/GitHub-Prabeendutta-181717?style=flat\&logo=github\&logoColor=white)](https://github.com/Prabeendutta)

Production-ready personal portfolio website for **Prabeen Dutta**, focused on **DevOps, Platform Engineering, Site Reliability Engineering (SRE), Cloud Infrastructure, Kubernetes, Terraform, CI/CD, and DevSecOps**.

🌐 **Live Website:** https://projtrunks.xyz

---

## About the Portfolio

This portfolio is designed to provide recruiters, hiring managers, and engineering teams with a concise view of my technical background, professional experience, cloud and DevOps capabilities, certifications, projects, and engineering approach.

The visual design follows an **infrastructure and observability dashboard** concept, inspired by real-world production environments.

The interface uses elements such as:

* Infrastructure-style status indicators
* Deployment-inspired experience timeline
* Service-registry-style technology cards
* Engineering metrics
* Dark technical dashboard aesthetic
* Responsive layouts for desktop, tablet, and mobile

The goal is not only to present information, but to demonstrate how I approach **reliability, automation, infrastructure, and production engineering**.

---

## Live Website

### 🌐 Production

**https://projtrunks.xyz**

The website is deployed using **GitHub Pages** with a custom domain and HTTPS.

### Source Code

**https://github.com/Prabeendutta/Prabeendutta.github.io**

---

## Technology Stack

| Category               | Technologies                         |
| ---------------------- | ------------------------------------ |
| Frontend               | HTML5, CSS3, JavaScript              |
| Cloud                  | AWS, Azure, GCP                      |
| Containers             | Docker                               |
| Orchestration          | Kubernetes, Amazon EKS               |
| Infrastructure as Code | Terraform, CloudFormation            |
| CI/CD                  | Jenkins, GitLab CI/CD                |
| Monitoring             | CloudWatch, Grafana, Datadog, Splunk |
| Version Control        | Git, GitHub                          |
| Security               | IAM, DevSecOps, SAST, DAST           |
| Web Hosting            | GitHub Pages                         |
| Domain                 | projtrunks.xyz                       |

---

## Repository Structure

```text
Prabeendutta.github.io/
│
├── index.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── main.js
│   │
│   └── resume/
│       └── Prabeen_Dutta_Resume.pdf
│
├── .gitignore
├── CNAME
└── README.md
```

### Key Files

**`index.html`**

Contains the complete portfolio structure and content, including:

* Hero section
* Professional summary
* Skills
* Experience
* Projects
* Certifications
* Contact information
* Resume download

**`assets/css/style.css`**

Contains the complete visual design system:

* Layout
* Typography
* Colors
* Responsive behavior
* Animations
* Cards
* Navigation
* Dashboard-style components

**`assets/js/main.js`**

Handles interactive functionality such as:

* Mobile navigation
* Scroll reveal effects
* Typing/role animation
* Active navigation tracking
* UI interactions

**`assets/resume/Prabeen_Dutta_Resume.pdf`**

Current downloadable resume used by the portfolio.

**`CNAME`**

Contains the production custom domain:

```text
projtrunks.xyz
```

---

## Run Locally

This is a lightweight static website and does not require Node.js, npm, a framework, or a build process.

### Option 1 — Open Directly

Open:

```text
index.html
```

in your browser.

### Option 2 — Python Local Server

Recommended for local development:

```bash
cd Prabeendutta.github.io
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

### Option 3 — VS Code Live Server

If using the VS Code Live Server extension, open the project folder and launch `index.html` with Live Server.

---

## Making Changes

Most portfolio content can be updated directly in:

```text
index.html
```

### Common Updates

| Change               | File                                         |
| -------------------- | -------------------------------------------- |
| Name / headline      | `index.html`                                 |
| Professional summary | `index.html`                                 |
| Experience           | `index.html`                                 |
| Projects             | `index.html`                                 |
| Certifications       | `index.html`                                 |
| Skills               | `index.html`                                 |
| Contact details      | `index.html`                                 |
| Colors / styling     | `assets/css/style.css`                       |
| Animations           | `assets/css/style.css` / `assets/js/main.js` |
| Navigation behavior  | `assets/js/main.js`                          |
| Resume               | `assets/resume/Prabeen_Dutta_Resume.pdf`     |
| Rotating hero roles  | `assets/js/main.js`                          |

---

## Update the Resume

Replace:

```text
assets/resume/Prabeen_Dutta_Resume.pdf
```

with the latest resume.

Keep the same filename if possible so the existing download links continue working.

If you change the filename, update the corresponding links in:

```text
index.html
```

---

## Deployment

The production website is hosted using **GitHub Pages**.

The deployment flow is intentionally simple:

```text
Local Changes
      │
      ▼
Git Commit
      │
      ▼
Git Push
      │
      ▼
GitHub main branch
      │
      ▼
GitHub Pages
      │
      ▼
https://projtrunks.xyz
```

### Deploy Changes

After making changes locally:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages automatically builds and deploys the updated site from the `main` branch.

---

## GitHub Pages Configuration

The repository is:

```text
https://github.com/Prabeendutta/Prabeendutta.github.io
```

GitHub Pages uses:

```text
Branch: main
Directory: / (root)
```

The production custom domain is:

```text
projtrunks.xyz
```

HTTPS is enabled for the production domain.

---

## Custom Domain

The portfolio uses:

```text
https://projtrunks.xyz
```

The root domain is configured with the GitHub Pages IP addresses:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

The `www` hostname uses:

```text
www → prabeendutta.github.io
```

DNS is managed through GoDaddy.

---

## Design Philosophy

The portfolio intentionally uses a technical infrastructure-inspired visual language rather than a generic developer portfolio template.

### Core principles

**Production mindset**

The site presents engineering experience through reliability, automation, infrastructure, and operational thinking.

**Technical credibility**

Technologies are presented in the context of practical engineering work rather than simply listing tools.

**Recruiter accessibility**

Important information should be discoverable quickly:

* Professional identity
* Experience
* Core technologies
* Certifications
* Projects
* Resume
* GitHub
* Contact information

**Performance**

The website uses a lightweight static architecture with no framework or runtime dependency.

**Accessibility**

The interface includes accessibility-focused features such as:

* Semantic HTML
* Keyboard-focus states
* Skip navigation
* ARIA attributes
* Reduced-motion support
* Responsive layouts

---

## Performance & Reliability

The website intentionally avoids unnecessary dependencies.

There is:

* No backend
* No database
* No Node.js runtime
* No npm dependency tree
* No application server
* No build pipeline required

This makes the portfolio:

* Fast to deploy
* Easy to maintain
* Low dependency
* Easy to understand
* Highly portable

---

## Browser & Responsive Support

The website is designed for:

* Desktop
* Laptop
* Tablet
* Mobile

Before major production updates, test:

* Navigation
* Resume download
* External links
* Mobile menu
* Responsive layout
* Typography
* Animations
* Accessibility
* HTTPS

---

## Production Checklist

Before pushing a major update:

* [ ] Verify resume is the latest version
* [ ] Verify LinkedIn URL
* [ ] Verify GitHub URL
* [ ] Verify email address
* [ ] Verify phone number
* [ ] Verify project links
* [ ] Verify certification information
* [ ] Test desktop layout
* [ ] Test mobile layout
* [ ] Test navigation
* [ ] Test resume download
* [ ] Test external links
* [ ] Check browser console for errors
* [ ] Run Lighthouse audit
* [ ] Commit changes
* [ ] Push to `main`
* [ ] Verify production site at `https://projtrunks.xyz`

---

## Future Improvements

Potential future enhancements include:

* Interactive architecture diagrams
* Detailed engineering case studies
* DevOps/SRE technical blog
* GitHub project integration
* AWS certification showcase
* Kubernetes architecture examples
* Infrastructure-as-Code examples
* Production incident/case-study write-ups
* Open-source contribution showcase
* Performance and accessibility improvements
* Custom analytics
* Automated portfolio deployment checks

---

## Author

### Prabeen Dutta

**Senior DevOps Engineer | Platform Engineer | SRE | DevSecOps | Kubernetes | Cloud**

Focused on building reliable, scalable, automated, and secure cloud infrastructure and developer platforms.

### Connect

* 🌐 Portfolio: https://projtrunks.xyz
* 💻 GitHub: https://github.com/Prabeendutta
* 💼 LinkedIn: https://www.linkedin.com/in/prabeen-dutta/
* 📧 Email: [prabeendutta@gmail.com](mailto:prabeendutta@gmail.com)

---

## License

This repository contains my personal portfolio website and associated content.

The source code is provided primarily for demonstration and educational purposes. Please do not reuse my personal information, resume, branding, or professional content without permission.
