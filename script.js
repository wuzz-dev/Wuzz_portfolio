/* ==========================================================================
   INTERACTIVE PORTFOLIO ENGINE (FIGMA NODE-MAP CODE)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // ----------------------------------------------------------------------
    // 1. DATA STORAGE
    // ----------------------------------------------------------------------
    const skillsData = {
        'web-dev': {
            title: 'Web Dev',
            icon: 'globe',
            description: 'Developing highly interactive, fast, and accessible full-stack web applications and static sites. Combining fluid design principles with solid engineering backend implementations.',
            subdomains: ['HTML5 / CSS3', 'React / Next.js', 'Vite / Node.js', 'Responsive Design', 'Web Performance'],
            projects: [
                {
                    name: 'Responsive SaaS Portal',
                    tag: 'Full-Stack App',
                    desc: 'A complete multi-tenant client subscription dashboard. Featuring serverless APIs, auth configurations, and custom visual charts.',
                    techs: ['Vite', 'React', 'Tailwind', 'Node.js'],
                    link: '#',
                    featured: true
                },
                {
                    name: 'Figma Token Exporter Plugin',
                    tag: 'Product Plugin',
                    desc: 'An automated plugin that exports Figma variables and tokens directly into Tailwind and vanilla CSS theme files.',
                    techs: ['Figma API', 'JSON', 'JavaScript'],
                    link: '#'
                }
            ]
        },
        'data-analytics': {
            title: 'Data Analytics',
            icon: 'bar-chart-2',
            description: 'Extracting value from complex databases, setting up business metrics pipelines, and building interactive dashboard suites that drive strategic decisions.',
            subdomains: ['BI Dashboards', 'Statistical Modeling', 'ETL Pipelines', 'A/B Testing', 'Customer Cohorts'],
            projects: [
                {
                    name: 'Funnel Analytics Dashboard',
                    tag: 'Data Pipeline',
                    desc: 'Real-time SaaS conversion funnel analytics detailing user acquisition, activation, retention, and churn metrics.',
                    techs: ['SQL', 'Tableau', 'Python', 'Pandas'],
                    link: '#',
                    featured: true
                },
                {
                    name: 'Market Sentiment Crawler',
                    tag: 'Web Scraper',
                    desc: 'ETL pipeline that scrapes daily financial news feeds and parses sentiment indices for investment trend scoring.',
                    techs: ['Python', 'Pandas', 'NLP Engine', 'AWS Lambda'],
                    link: '#'
                }
            ]
        },
        'ai-automation': {
            title: 'AI Automation',
            icon: 'bot',
            description: 'Architecting agentic AI systems, custom RAG (Retrieval-Augmented Generation) pipelines, and intelligent API workflows to automate complex enterprise knowledge tasks.',
            subdomains: ['Large Language Models', 'Vector Databases', 'Prompt Engineering', 'Semantic Search', 'LangChain'],
            projects: [
                {
                    name: 'Cognitive Wiki Assistant',
                    tag: 'RAG Agent',
                    desc: 'An agentic chat assistant for enterprise databases using document embeddings, vector stores, and custom semantic search.',
                    techs: ['Python', 'Gemini API', 'Pinecone', 'LangChain'],
                    link: '#',
                    featured: true
                },
                {
                    name: 'Auto-Code Audit Engine',
                    tag: 'GitHub Action',
                    desc: 'A GitHub Action that automatically reviews code changes for security vulnerabilities and refactoring recommendations.',
                    techs: ['Node.js', 'GitHub API', 'Gemini Model'],
                    link: '#'
                }
            ]
        },
        'digital-strategy': {
            title: 'Digital Strategy',
            icon: 'award',
            description: 'Evaluating business roadmaps, analyzing competitor matrices, and aligning technical engineering budgets with business value and product market fit.',
            subdomains: ['Product Roadmap', 'Tech Stack Audit', 'ROI Modeling', 'Market Fit Research', 'Competitor Matrix'],
            projects: [
                {
                    name: 'FinTech Growth Roadmapping',
                    tag: 'Product Strategy',
                    desc: 'Conducted market fit research and pricing restructuring for a micro-investing startup, leading to a 40% growth in active accounts.',
                    techs: ['Strategy', 'Financial Modeling', 'User Testing'],
                    link: '#'
                }
            ]
        },
        'creative-coding': {
            title: 'Creative Coding',
            icon: 'code-2',
            description: 'Developing interactive visual installations, algorithmic models, physics simulations, and generative graphics that blur the lines between art and technology.',
            subdomains: ['WebGL / Three.js', 'Generative Art', 'HTML5 Canvas', 'Interactive Audio', 'Shaders (GLSL)'],
            projects: [
                {
                    name: '3D Terrain Audio visualizer',
                    tag: 'Three.js Art',
                    desc: 'Real-time landscape generator that morphs, scales, and glows in synchronization with microphone input audio frequencies.',
                    techs: ['Three.js', 'Web Audio API', 'GLSL Shaders'],
                    link: '#',
                    featured: true
                },
                {
                    name: 'Fluid Dynamics Sandbox',
                    tag: 'Interactive Script',
                    desc: 'A real-time particle and fluid physics simulator built completely using a 2D HTML5 canvas.',
                    techs: ['HTML5 Canvas', 'Math', 'JavaScript'],
                    link: '#'
                }
            ]
        },
        'python': {
            title: 'Python Development',
            icon: 'terminal',
            description: 'Leveraging Python for automated data mining, backend API development, algorithmic testing, and machine learning scripts.',
            subdomains: ['FastAPI / Flask', 'Web Scraping', 'Automation Scripts', 'Pandas & NumPy', 'Deep Learning'],
            projects: [
                {
                    name: 'Automated Reports Daemon',
                    tag: 'Automation Tool',
                    desc: 'A cron daemon that aggregates Weekly Database Metrics and generates print-ready PDF summaries.',
                    techs: ['Python', 'FastAPI', 'ReportLab'],
                    link: '#'
                }
            ]
        },
        'system-archi': {
            title: 'System Archi',
            icon: 'server',
            description: 'Designing highly-available, cost-effective serverless architectures, cloud load balancing, and container orchestration build pipelines.',
            subdomains: ['AWS / GCP Platforms', 'Docker Containers', 'Serverless Functions', 'CI/CD Pipelines', 'Infrastructure as Code'],
            projects: [
                {
                    name: 'On-Demand Image Pipeline',
                    tag: 'Serverless API',
                    desc: 'A high-performance image processing and storage API hosting millions of media assets on serverless compute.',
                    techs: ['AWS S3', 'Lambda', 'Docker Engine'],
                    link: '#'
                }
            ]
        },
        'project-mgmt': {
            title: 'Project Management',
            icon: 'check-square',
            description: 'Leading product sprints, removing developer roadblocks, managing timelines, and keeping technical squads aligned with client deliverables.',
            subdomains: ['Agile / Scrum', 'Sprint Planning', 'Linear Tracker', 'Risk Assessment', 'Client Communication'],
            projects: [
                {
                    name: 'Tenant Migration Sprint Sync',
                    tag: 'Agile Sync',
                    desc: 'Synchronized an agile team of 14 designers, backend engineers, and QA testers to migrate platform infrastructure on budget.',
                    techs: ['Scrum', 'Risk Strategy', 'Project Scopes'],
                    link: '#'
                }
            ]
        }
    };

    // Gather all projects for the global gallery
    const allProjects = [];
    Object.keys(skillsData).forEach(key => {
        const skill = skillsData[key];
        const category = ['web-dev', 'digital-strategy', 'project-mgmt'].includes(key) ? 'design' : 
                         ['data-analytics'].includes(key) ? 'analytics' : 'tech';
        
        skill.projects.forEach(p => {
            allProjects.push({
                ...p,
                category: category,
                domain: skill.title,
                domainKey: key
            });
        });
    });

    // Featured subset (flagged with `featured: true` on individual projects above)
    // shown inside the "View Profile" modal. Add/remove the flag on any project
    // to control what shows up there.
    const featuredProjects = allProjects.filter(p => p.featured);

    // Hand-picked highlights for the "Core Tech Stack" tag cloud in the profile.
    // Edit freely — these are independent of the mind-map subdomain lists.
    const coreTechStack = [
        'React / Next.js', 'Python', 'FastAPI / Flask', 'LangChain',
        'Vector Databases', 'AWS / GCP', 'Docker', 'Three.js / WebGL',
        'SQL', 'Pandas & NumPy', 'Figma API', 'CI/CD Pipelines'
    ];

    // Quick "journey" timeline shown in the profile modal. Replace with real
    // milestones (roles, dates, companies) whenever you're ready — this is
    // placeholder scaffolding, same as the rest of the sample content.
    const experienceTimeline = [
        {
            period: '2024 — Present',
            title: 'Multi-Domain Consultant',
            desc: 'Independently leading end-to-end builds across web platforms, AI automation, and data analytics for early-stage teams.'
        },
        {
            period: '2022 — 2024',
            title: 'Expanded into AI & Cloud Systems',
            desc: 'Shipped RAG pipelines, serverless architectures, and automation tooling on top of an existing web & data foundation.'
        },
        {
            period: '2020 — 2022',
            title: 'Foundations in Web & Data',
            desc: 'Built full-stack web apps and early analytics dashboards, developing the design + engineering core skillset.'
        }
    ];

    // Accent gradient + icon per domain — mirrors the colors already used on
    // the mind-map node icons and SVG connector gradients, so anything pulled
    // from skillsData (e.g. featured project thumbnails) stays visually consistent.
    const domainVisuals = {
        'web-dev':          { colors: ['#06b6d4', '#3b82f6'], icon: 'globe' },
        'data-analytics':   { colors: ['#06b6d4', '#8b5cf6'], icon: 'bar-chart-2' },
        'ai-automation':    { colors: ['#ec4899', '#8b5cf6'], icon: 'bot' },
        'digital-strategy': { colors: ['#f59e0b', '#8b5cf6'], icon: 'award' },
        'creative-coding':  { colors: ['#8b5cf6', '#06b6d4'], icon: 'code-2' },
        'python':           { colors: ['#3776ab', '#ffd343'], icon: 'terminal' },
        'system-archi':     { colors: ['#3b82f6', '#06b6d4'], icon: 'server' },
        'project-mgmt':     { colors: ['#ec4899', '#8b5cf6'], icon: 'check-square' }
    };

    // ----------------------------------------------------------------------
    // 2. DOM ELEMENTS
    // ----------------------------------------------------------------------
    const mindMapViewport = document.getElementById('mind-map-viewport');
    const connectionsSvg = document.getElementById('connections-svg');
    const centerNode = document.getElementById('center-node');
    const cursorGlow = document.getElementById('cursor-glow');
    const headerCard = document.getElementById('card-header');
    const dockThemeBtn = document.getElementById('btn-dock-theme');
    const interactiveNodes = document.querySelectorAll('.interactive-node');
    const lineLabels = document.querySelectorAll('.line-label');
    function getViewportLocalRect(rect, viewportRect) {
        return {
            left: rect.left - viewportRect.left,
            top: rect.top - viewportRect.top,
            right: rect.right - viewportRect.left,
            bottom: rect.bottom - viewportRect.top,
            width: rect.width,
            height: rect.height
        };
    }

    function getRectCenter(rect) {
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
    }

    function getRectEdgePoint(rect, target) {
        const center = getRectCenter(rect);
        const dx = target.x - center.x;
        const dy = target.y - center.y;

        if (Math.abs(dx) < 0.001 && Math.abs(dy) < 0.001) {
            return center;
        }

        const xRatio = Math.abs(dx) > 0.001 ? (rect.width / 2) / Math.abs(dx) : Infinity;
        const yRatio = Math.abs(dy) > 0.001 ? (rect.height / 2) / Math.abs(dy) : Infinity;
        const ratio = Math.min(xRatio, yRatio);

        return {
            x: center.x + dx * ratio,
            y: center.y + dy * ratio
        };
    }

    function getSatelliteRectFromCenter(satEl, center) {
        const width = satEl.offsetWidth;
        const height = satEl.offsetHeight;

        return {
            left: center.x - width / 2,
            top: center.y - height / 2,
            right: center.x + width / 2,
            bottom: center.y + height / 2,
            width,
            height
        };
    }

    function fmtCoord(value) {
        return Number(value.toFixed(2));
    }

    function createProjectConnectionPath(start, end, branchIndex, branchCount) {
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 1) {
            return `M ${fmtCoord(start.x)} ${fmtCoord(start.y)} L ${fmtCoord(end.x)} ${fmtCoord(end.y)}`;
        }

        const branchOffset = branchIndex - (branchCount - 1) / 2;
        const bend = branchOffset * Math.min(22, Math.max(10, distance * 0.08));
        const normalX = -dy / distance;
        const normalY = dx / distance;
        const cp1X = start.x + dx * 0.45 + normalX * bend;
        const cp1Y = start.y + dy * 0.45 + normalY * bend;
        const cp2X = start.x + dx * 0.78 + normalX * bend;
        const cp2Y = start.y + dy * 0.78 + normalY * bend;

        return `M ${fmtCoord(start.x)} ${fmtCoord(start.y)} C ${fmtCoord(cp1X)} ${fmtCoord(cp1Y)}, ${fmtCoord(cp2X)} ${fmtCoord(cp2Y)}, ${fmtCoord(end.x)} ${fmtCoord(end.y)}`;
    }

    function extendPointPastTarget(start, end, amount) {
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 1) return end;

        return {
            x: end.x + (dx / distance) * amount,
            y: end.y + (dy / distance) * amount
        };
    }

    // Details Drawer Elements
    const detailsDrawer = document.getElementById('details-drawer');
    const closeDrawerBtn = document.getElementById('close-drawer');
    const drawerTitle = document.getElementById('drawer-title');
    const drawerIcon = document.getElementById('drawer-icon');
    const drawerDesc = document.getElementById('drawer-description');
    const drawerSubdomains = document.getElementById('drawer-subdomains');
    const drawerProjectsList = document.getElementById('drawer-projects-list');

    // Profile Modal Elements
    const profileModal = document.getElementById('profile-modal');
    const openProfileBtn = document.getElementById('btn-view-profile');
    const closeProfileBtn = document.getElementById('close-profile-modal');
    const profileSkillTags = document.getElementById('profile-skill-tags');
    const profileTimelineList = document.getElementById('profile-timeline');
    const profileFeaturedGrid = document.getElementById('profile-featured-projects');
    const btnProfileSeeAll = document.getElementById('btn-profile-see-all');
    const hobbyModal = document.getElementById('hobby-modal');
    const openHobbyBtn = document.getElementById('btn-settings');
    const closeHobbyBtn = document.getElementById('close-hobby-modal');

    // Contact Modal Elements
    const contactModal = document.getElementById('contact-modal');
    const openContactBtn = document.getElementById('btn-connect');
    const closeContactBtn = document.getElementById('close-contact-modal');
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    // Projects Drawer Elements
    const projectsDrawer = document.getElementById('projects-drawer');
    const openProjectsBtn = document.getElementById('btn-explore-work');
    const closeProjectsBtn = document.getElementById('close-projects-drawer');
    const allProjectsGrid = document.getElementById('all-projects-grid');
    const filterTabs = document.querySelectorAll('.filter-tab');

    function createOutgoingDrawerClone(drawer) {
        const clone = drawer.cloneNode(true);
        clone.removeAttribute('id');
        clone.querySelectorAll('[id]').forEach(el => {
            if (el.id.startsWith('close-')) el.classList.add('drawer-clone-close');
            el.removeAttribute('id');
        });
        clone.classList.add('drawer-swap-clone', 'open');
        clone.setAttribute('aria-hidden', 'true');
        clone.style.pointerEvents = 'none';
        document.body.appendChild(clone);

        const removeClone = () => clone.remove();
        clone.addEventListener('transitionend', (event) => {
            if (event.target === clone && event.propertyName === 'right') {
                removeClone();
            }
        }, { once: true });
        setTimeout(removeClone, 650);

        requestAnimationFrame(() => clone.classList.remove('open'));
    }

    function swapDrawerOpen(drawer, updateContent) {
        if (!drawer) return;

        if (drawer.classList.contains('open')) {
            createOutgoingDrawerClone(drawer);
        }

        const previousTransition = drawer.style.transition;
        drawer.style.transition = 'none';
        drawer.classList.remove('open');
        updateContent();
        void drawer.offsetWidth;
        drawer.style.transition = previousTransition;
        requestAnimationFrame(() => drawer.classList.add('open'));
    }
    function toggleHeaderCard(forceState) {
        if (!headerCard) return;
        const shouldExpand = typeof forceState === 'boolean' ? forceState : !headerCard.classList.contains('expanded');
        headerCard.classList.toggle('expanded', shouldExpand);
        headerCard.setAttribute('aria-expanded', String(shouldExpand));
    }

    if (headerCard) {
        headerCard.addEventListener('click', () => toggleHeaderCard());
        headerCard.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleHeaderCard();
            }
        });
    }



    document.querySelectorAll('#card-header .dock-btn').forEach(control => {
        control.addEventListener('click', (e) => e.stopPropagation());
    });

    if (dockThemeBtn) {
        dockThemeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isDark = document.body.classList.toggle('dark-mode');
            dockThemeBtn.classList.toggle('active', isDark);
            dockThemeBtn.setAttribute('aria-pressed', String(isDark));
        });
    }

    if (openHobbyBtn) {
        openHobbyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            hobbyModal.classList.add('open');
            hobbyModal.setAttribute('aria-hidden', 'false');
            openHobbyBtn.setAttribute('aria-expanded', 'true');
        });
    }

    if (closeHobbyBtn) {
        closeHobbyBtn.addEventListener('click', () => {
            hobbyModal.classList.remove('open');
            hobbyModal.setAttribute('aria-hidden', 'true');
            if (openHobbyBtn) openHobbyBtn.setAttribute('aria-expanded', 'false');
        });
    }

    // ----------------------------------------------------------------------
    // 3. INTERACTIVE MOUSE FOLLOW GLOW
    // ----------------------------------------------------------------------
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updateGlowPosition() {
        // Linear interpolation for smooth trailing delay
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;

        cursorGlow.style.left = `${glowX}px`;
        cursorGlow.style.top = `${glowY}px`;

        requestAnimationFrame(updateGlowPosition);
    }
    updateGlowPosition();

    // ----------------------------------------------------------------------
    // 4. DYNAMIC SVG CONNECTING LINES (Level 0 to Level 1)
    // ----------------------------------------------------------------------
    function drawConnectionLines() {
        const canvasEl = document.getElementById('mind-map-canvas');

        let savedTransform = '';
        if (canvasEl) {
            savedTransform = canvasEl.style.transform;
            canvasEl.style.transform = 'none';
        }

        // Clean existing domain path elements
        const existingPaths = connectionsSvg.querySelectorAll('path:not(.project-connection-path)');
        existingPaths.forEach(p => p.remove());

        // Check if map diagram is visible (desktop mode)
        const isDesktop = window.innerWidth > 1024;
        if (!isDesktop) {
            if (canvasEl) canvasEl.style.transform = savedTransform;
            return;
        }

        const viewportRect = mindMapViewport.getBoundingClientRect();
        const centerRect = centerNode.getBoundingClientRect();

        const cX = centerRect.left - viewportRect.left + centerRect.width / 2;
        const cY = centerRect.top - viewportRect.top + centerRect.height / 2;

        interactiveNodes.forEach(node => {
            const nodeRect = node.getBoundingClientRect();
            
            // Smart connection coordinates to card boundaries (Figma edge-wiring style)
            let nX, nY;
            const cardCenterX = nodeRect.left - viewportRect.left + nodeRect.width / 2;
            
            if (node.id === 'node-python') {
                // Connect to top of Python card
                nX = nodeRect.left - viewportRect.left + nodeRect.width / 2;
                nY = nodeRect.top - viewportRect.top;
            } else if (cardCenterX > cX) {
                // Card is to the right of center - connect to its left edge
                nX = nodeRect.left - viewportRect.left;
                nY = nodeRect.top - viewportRect.top + nodeRect.height / 2;
            } else {
                // Card is to the left of center - connect to its right edge
                nX = nodeRect.right - viewportRect.left;
                nY = nodeRect.top - viewportRect.top + nodeRect.height / 2;
            }

            // Generate custom curved path calculations
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            
            // Calculate bezier control points for premium curves
            const dx = nX - cX;
            const dy = nY - cY;
            
            // Midpoint anchor controls
            const cp1X = cX + dx * 0.45;
            const cp1Y = cY + dy * 0.15;
            const cp2X = nX - dx * 0.3;
            const cp2Y = nY;

            const pathString = `M ${cX} ${cY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${nX} ${nY}`;
            
            path.setAttribute('d', pathString);
            path.setAttribute('id', `path-${node.id}`);
            
            connectionsSvg.appendChild(path);

            // Dynamically position the associated line label at the Bezier curve midpoint (t = 0.5)
            const skillKey = node.getAttribute('data-skill');
            const associatedLabel = Array.from(lineLabels).find(lbl => lbl.getAttribute('data-node') === skillKey);
            if (associatedLabel) {
                const midX = 0.125 * cX + 0.375 * cp1X + 0.375 * cp2X + 0.125 * nX;
                const midY = 0.125 * cY + 0.375 * cp1Y + 0.375 * cp2Y + 0.125 * nY;
                associatedLabel.style.left = `${midX}px`;
                associatedLabel.style.top = `${midY}px`;
            }
        });

        if (canvasEl) canvasEl.style.transform = savedTransform;
    }

    // Run SVG drawing on load
    drawConnectionLines();

    // ----------------------------------------------------------------------
    // 5. HOVER HIGHLIGHTS
    // ----------------------------------------------------------------------
    interactiveNodes.forEach(node => {
        const skillKey = node.getAttribute('data-skill');
        const associatedLabel = Array.from(lineLabels).find(lbl => lbl.getAttribute('data-node') === skillKey);

        node.addEventListener('mouseenter', () => {
            const svgPath = document.getElementById(`path-${node.id}`);
            if (svgPath) {
                svgPath.classList.add('glowing-path');
            }
            if (associatedLabel) {
                associatedLabel.classList.add('active');
            }
        });

        node.addEventListener('mouseleave', () => {
            const svgPath = document.getElementById(`path-${node.id}`);
            if (svgPath) {
                svgPath.classList.remove('glowing-path');
            }
            if (associatedLabel) {
                associatedLabel.classList.remove('active');
            }
        });
    });

    // ----------------------------------------------------------------------
    // 6. DYNAMIC BRANCHING PROJECTS ENGINE (Level 1 to Level 2)
    // ----------------------------------------------------------------------
    let activeSatellites = [];
    let activeSatelliteLines = [];
    let activeDomainKey = null;

    function collapseActiveSatellites() {
        // Remove satellites with simple fade out
        activeSatellites.forEach(el => el.remove());
        activeSatellites = [];

        // Remove SVG paths
        activeSatelliteLines.forEach(line => line.remove());
        activeSatelliteLines = [];

        activeDomainKey = null;
        interactiveNodes.forEach(n => n.classList.remove('active-node'));
    }

    function expandDomainSatellites(domainKey, domainNode) {
        collapseActiveSatellites();

        const data = skillsData[domainKey];
        if (!data || !data.projects || data.projects.length === 0) return;

        activeDomainKey = domainKey;
        domainNode.classList.add('active-node');

        const canvasEl = document.getElementById('mind-map-canvas');
        const viewportRect = mindMapViewport.getBoundingClientRect();
        const savedTransform = canvasEl ? canvasEl.style.transform : '';
        if (canvasEl) canvasEl.style.transform = 'none';

        const centerRectLocal = getViewportLocalRect(centerNode.getBoundingClientRect(), viewportRect);
        const nodeRectLocal = getViewportLocalRect(domainNode.getBoundingClientRect(), viewportRect);
        const centerPoint = getRectCenter(centerRectLocal);
        const domainPoint = getRectCenter(nodeRectLocal);

        // Angle from center node to the selected domain node in canvas-local space.
        const baseAngle   = Math.atan2(domainPoint.y - centerPoint.y, domainPoint.x - centerPoint.x);
        const count       = data.projects.length;
        const spacingAngle = 0.42;
        const distanceLocal = 235; // Stable canvas-local distance so project branches scale with zoom.
        data.projects.forEach((proj, idx) => {
            const angle = baseAngle + (idx - (count - 1) / 2) * spacingAngle;

            const satelliteCenter = {
                x: domainPoint.x + distanceLocal * Math.cos(angle),
                y: domainPoint.y + distanceLocal * Math.sin(angle)
            };
            // Build satellite card
            const satEl = document.createElement('button');
            satEl.className = 'project-satellite';
            satEl.setAttribute('data-parent', domainKey);
            satEl.textContent = proj.name;
            satEl.style.left      = `${satelliteCenter.x}px`;
            satEl.style.top       = `${satelliteCenter.y}px`;

            if (canvasEl) canvasEl.appendChild(satEl);
            else mindMapViewport.appendChild(satEl);
            activeSatellites.push(satEl);

            // SVG connecting line
            const satelliteRect = getSatelliteRectFromCenter(satEl, satelliteCenter);
            const lineStart = getRectEdgePoint(nodeRectLocal, satelliteCenter);
            const lineEnd = extendPointPastTarget(lineStart, getRectEdgePoint(satelliteRect, domainPoint), 16);
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('class', `project-connection-path path-${domainKey}`);
            path.setAttribute('d', createProjectConnectionPath(lineStart, lineEnd, idx, count));

            connectionsSvg.appendChild(path);
            activeSatelliteLines.push(path);

            satEl.addEventListener('mouseenter', () => path.classList.add('glowing-proj-path'));
            satEl.addEventListener('mouseleave', () => path.classList.remove('glowing-proj-path'));
            satEl.addEventListener('click', (e) => {
                e.stopPropagation();
                openProjectDetail(proj, data.title, data.icon);
            });
        });

        if (canvasEl) canvasEl.style.transform = savedTransform;
    }

    // ----------------------------------------------------------------------
    // 7. DETAIL DRAWER (LEVEL 3 DETAILS)
    // ----------------------------------------------------------------------
    // Open domain-wide details (used for mobile mode)
    function openDetailsDrawer(skillKey) {
        const data = skillsData[skillKey];
        if (!data) return;

        // Reset active node classes
        interactiveNodes.forEach(n => n.classList.remove('active-node'));
        const activeNode = document.querySelector(`[data-skill="${skillKey}"]`);
        if (activeNode) activeNode.classList.add('active-node');

        // Close other drawer
        projectsDrawer.classList.remove('open');

        // Populate drawer content
        drawerTitle.textContent = data.title;
        drawerDesc.textContent = data.description;
        
        // Update Icon
        drawerIcon.setAttribute('data-lucide', data.icon);
        lucide.createIcons();

        // Subdomains
        drawerSubdomains.innerHTML = '';
        data.subdomains.forEach(sub => {
            const li = document.createElement('li');
            li.textContent = sub;
            drawerSubdomains.appendChild(li);
        });

        // Projects
        drawerProjectsList.innerHTML = '';
        data.projects.forEach(p => {
            const card = document.createElement('div');
            card.className = 'project-card';
            
            card.innerHTML = `
                <div class="project-meta">
                    <span class="project-tag">${p.tag}</span>
                    <div class="project-links">
                        <a href="${p.link}" class="project-link" aria-label="Demo Link"><i data-lucide="external-link"></i></a>
                    </div>
                </div>
                <h4 class="project-name">${p.name}</h4>
                <p class="project-desc">${p.desc}</p>
                <div class="project-techs">
                    ${p.techs.map(t => `<span>${t}</span>`).join('')}
                </div>
            `;
            drawerProjectsList.appendChild(card);
        });

        // Ensure projects section is visible
        const featuredProjSection = detailsDrawer.querySelector('.drawer-section:nth-of-type(2)');
        if (featuredProjSection) {
            featuredProjSection.style.display = 'block';
        }

        lucide.createIcons();
        detailsDrawer.classList.add('open');
    }

    // Open single project detailed case study
    function openProjectDetail(proj, domainTitle, domainIcon) {
        projectsDrawer.classList.remove('open');

        swapDrawerOpen(detailsDrawer, () => {
            // Populate drawer content after the current drawer slides out.
            drawerTitle.textContent = proj.name;
            drawerDesc.textContent = proj.desc;

            // Update Icon
            drawerIcon.setAttribute('data-lucide', domainIcon);
            lucide.createIcons();

            // Category Tag
            const catEl = detailsDrawer.querySelector('.drawer-category');
            if (catEl) catEl.textContent = `${domainTitle.toUpperCase()} - ${proj.tag.toUpperCase()}`;

            // Tech stacks
            drawerSubdomains.innerHTML = '';
            proj.techs.forEach(t => {
                const li = document.createElement('li');
                li.textContent = t;
                drawerSubdomains.appendChild(li);
            });

            // Hide multi-project list since we are analyzing a single project
            const featuredProjSection = detailsDrawer.querySelector('.drawer-section:nth-of-type(2)');
            if (featuredProjSection) {
                featuredProjSection.style.display = 'none';
            }
        });
    }

    // Click triggers for Domain Nodes
    interactiveNodes.forEach(node => {
        node.addEventListener('click', (e) => {
            e.stopPropagation();
            const skillKey = node.getAttribute('data-skill');
            const isDesktop = window.innerWidth > 1024;

            if (isDesktop) {
                // Desktop: Dynamic branching mind-map
                if (activeDomainKey === skillKey) {
                    collapseActiveSatellites();
                } else {
                    expandDomainSatellites(skillKey, node);
                }
            } else {
                // Mobile: Standard stacked navigation drawer
                openDetailsDrawer(skillKey);
            }
        });
    });

    // Close drawers and collapse branches when clicking center node
    centerNode.addEventListener('click', (e) => {
        e.stopPropagation();
        collapseActiveSatellites();
        detailsDrawer.classList.remove('open');
        projectsDrawer.classList.remove('open');
    });

    // Close on click outside on the background canvas wrapper
    mindMapViewport.addEventListener('click', (e) => {
        if (e.target === mindMapViewport) {
            collapseActiveSatellites();
            detailsDrawer.classList.remove('open');
        }
    });

    closeDrawerBtn.addEventListener('click', () => {
        detailsDrawer.classList.remove('open');
    });

    // ----------------------------------------------------------------------
    // 8. EXPLORE ALL PROJECTS PANEL
    // ----------------------------------------------------------------------
    function renderProjectsGallery(filter = 'all') {
        allProjectsGrid.innerHTML = '';
        const filtered = filter === 'all' ? allProjects : allProjects.filter(p => p.category === filter);
        
        filtered.forEach(p => {
            const card = document.createElement('div');
            card.className = 'project-card';
            
            card.innerHTML = `
                <div class="project-meta">
                    <span class="project-tag">${p.domain} - ${p.tag}</span>
                    <div class="project-links">
                        <a href="${p.link}" class="project-link" aria-label="View Project"><i data-lucide="external-link"></i></a>
                    </div>
                </div>
                <h4 class="project-name">${p.name}</h4>
                <p class="project-desc">${p.desc}</p>
                <div class="project-techs">
                    ${p.techs.map(t => `<span>${t}</span>`).join('')}
                </div>
            `;
            allProjectsGrid.appendChild(card);
        });
        
        lucide.createIcons();
    }

    openProjectsBtn.addEventListener('click', () => {
        detailsDrawer.classList.remove('open');
        collapseActiveSatellites();
        
        renderProjectsGallery('all');
        projectsDrawer.classList.add('open');
    });

    closeProjectsBtn.addEventListener('click', () => {
        projectsDrawer.classList.remove('open');
    });

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filterValue = tab.getAttribute('data-filter');
            renderProjectsGallery(filterValue);
        });
    });

    // ----------------------------------------------------------------------
    // 9. WINDOW RESIZE HANDLING
    // ----------------------------------------------------------------------
    window.addEventListener('resize', () => {
        drawConnectionLines();
        const isDesktop = window.innerWidth > 1024;
        
        if (!isDesktop) {
            collapseActiveSatellites();
        } else {
            // Re-render project satellites to snap to new coordinates on desktop resize
            if (activeDomainKey) {
                const activeNode = document.querySelector(`[data-skill="${activeDomainKey}"]`);
                if (activeNode) {
                    expandDomainSatellites(activeDomainKey, activeNode);
                }
            }
        }
    });

    // ----------------------------------------------------------------------
    // 10. MODAL TRIGGERS (PROFILE & CONTACT)
    // ----------------------------------------------------------------------
    // Build the contents of the "View Profile" modal from the same data that
    // powers the mind-map, so the tech stack / featured work never drift out
    // of sync with the rest of the site.
    function populateProfileModal() {
        // Core Tech Stack tags
        if (profileSkillTags) {
            const dotColors = ['#8b5cf6', '#06b6d4', '#ec4899', '#3b82f6', '#f59e0b'];
            profileSkillTags.innerHTML = coreTechStack.map((tech, i) => `
                <li>
                    <span class="skill-dot" style="background:${dotColors[i % dotColors.length]}"></span>
                    ${tech}
                </li>
            `).join('');
        }

        // Journey timeline
        if (profileTimelineList) {
            profileTimelineList.innerHTML = experienceTimeline.map(item => `
                <li class="timeline-item">
                    <span class="timeline-dot"></span>
                    <span class="timeline-period">${item.period}</span>
                    <h4 class="timeline-title">${item.title}</h4>
                    <p class="timeline-desc">${item.desc}</p>
                </li>
            `).join('');
        }

        // Featured projects (with image if provided, otherwise a themed gradient + icon tile)
        if (profileFeaturedGrid) {
            profileFeaturedGrid.innerHTML = featuredProjects.map(p => {
                const visual = domainVisuals[p.domainKey] || { colors: ['#8b5cf6', '#3b82f6'], icon: 'layout-grid' };
                const thumb = p.image
                    ? `<div class="profile-project-thumb" style="background-image:url('${p.image}')"></div>`
                    : `<div class="profile-project-thumb" style="background:linear-gradient(135deg, ${visual.colors[0]}, ${visual.colors[1]})">
                           <i data-lucide="${visual.icon}"></i>
                       </div>`;
                return `
                    <div class="project-card">
                        ${thumb}
                        <div class="project-meta">
                            <span class="project-tag">${p.domain} - ${p.tag}</span>
                            <div class="project-links">
                                <a href="${p.link}" class="project-link" aria-label="View Project"><i data-lucide="external-link"></i></a>
                            </div>
                        </div>
                        <h4 class="project-name">${p.name}</h4>
                        <p class="project-desc">${p.desc}</p>
                        <div class="project-techs">
                            ${p.techs.map(t => `<span>${t}</span>`).join('')}
                        </div>
                    </div>
                `;
            }).join('');
        }

        lucide.createIcons();
    }
    populateProfileModal();

    // Profile Modal
    if (openProfileBtn) {
        openProfileBtn.setAttribute('aria-expanded', 'false');
        openProfileBtn.addEventListener('click', () => {
            profileModal.classList.add('open');
            profileModal.setAttribute('aria-hidden', 'false');
            openProfileBtn.setAttribute('aria-expanded', 'true');
        });
    }
    closeProfileBtn.addEventListener('click', () => {
        profileModal.classList.remove('open');
        profileModal.setAttribute('aria-hidden', 'true');
        if (openProfileBtn) openProfileBtn.setAttribute('aria-expanded', 'false');
    });

    // "See all" inside Featured Projects hands off to the full gallery drawer
    if (btnProfileSeeAll) {
        btnProfileSeeAll.addEventListener('click', () => {
            profileModal.classList.remove('open');
            profileModal.setAttribute('aria-hidden', 'true');
            if (openProfileBtn) openProfileBtn.setAttribute('aria-expanded', 'false');
            renderProjectsGallery('all');
            filterTabs.forEach(t => t.classList.remove('active'));
            if (filterTabs[0]) filterTabs[0].classList.add('active');
            projectsDrawer.classList.add('open');
        });
    }

    // Contact Modal
    openContactBtn.addEventListener('click', () => {
        contactModal.classList.add('open');
    });
    closeContactBtn.addEventListener('click', () => {
        contactModal.classList.remove('open');
        formFeedback.innerHTML = '';
        formFeedback.className = 'form-feedback';
    });

    // Close Modals on click outside
    window.addEventListener('click', (e) => {
        if (e.target === profileModal) {
            profileModal.classList.remove('open');
            profileModal.setAttribute('aria-hidden', 'true');
            if (openProfileBtn) openProfileBtn.setAttribute('aria-expanded', 'false');
        }
        if (e.target === contactModal) {
            contactModal.classList.remove('open');
            formFeedback.innerHTML = '';
            formFeedback.className = 'form-feedback';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (profileModal.classList.contains('open')) {
                profileModal.classList.remove('open');
                profileModal.setAttribute('aria-hidden', 'true');
                if (openProfileBtn) openProfileBtn.setAttribute('aria-expanded', 'false');
            }
            if (contactModal.classList.contains('open')) {
                contactModal.classList.remove('open');
                formFeedback.innerHTML = '';
                formFeedback.className = 'form-feedback';
            }
        }
    });

    // ----------------------------------------------------------------------
    // 11. CONTACT FORM HANDLER
    // ----------------------------------------------------------------------
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.submit-btn');
        const submitBtnText = submitBtn.querySelector('span');
        
        submitBtn.disabled = true;
        submitBtnText.textContent = 'Sending...';

        setTimeout(() => {
            formFeedback.textContent = 'Thank you! Your message has been sent successfully.';
            formFeedback.className = 'form-feedback success';
            
            submitBtn.disabled = false;
            submitBtnText.textContent = 'Send Message';
            contactForm.reset();

            setTimeout(() => {
                contactModal.classList.remove('open');
                formFeedback.textContent = '';
                formFeedback.className = 'form-feedback';
            }, 3000);

        }, 1500);
    });

    // ----------------------------------------------------------------------
    // 12. FIGMA-LIKE ZOOM & PAN CANVAS ENGINE
    // ----------------------------------------------------------------------
    let scale = 0.70;
    let panX = 0;
    let panY = 0;
    const minScale = 0.4;
    const maxScale = 2.5;

    const canvasEl = document.getElementById('mind-map-canvas');
    const viewportEl = document.getElementById('mind-map-viewport');

    // Center the canvas at the default zoomed-out scale
    if (canvasEl && viewportEl && window.innerWidth > 1024) {
        const vw = viewportEl.clientWidth;
        const vh = viewportEl.clientHeight;
        panX = (vw - vw * scale) / 2;
        panY = (vh - vh * scale) / 2;
    }

    function applyTransform() {
        if (canvasEl) {
            canvasEl.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
        }
    }

    // Apply default zoom on load
    applyTransform();

    let isDragging = false;
    let startDragX = 0;
    let startDragY = 0;

    viewportEl.addEventListener('mousedown', (e) => {
        if (window.innerWidth <= 1024) return;

        // Only pan if clicking on viewport background, SVG, or grid (not on card buttons/modals)
        const isInteractive = e.target.closest('.node-card, .project-satellite, #details-drawer, .modal-content, #profile-modal, #contact-modal, #projects-drawer');
        if (isInteractive) return;

        isDragging = true;
        viewportEl.classList.add('grabbing');
        startDragX = e.clientX - panX;
        startDragY = e.clientY - panY;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        panX = e.clientX - startDragX;
        panY = e.clientY - startDragY;
        applyTransform();
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        viewportEl.classList.remove('grabbing');
    });

    viewportEl.addEventListener('wheel', (e) => {
        if (window.innerWidth <= 1024) return;
        e.preventDefault();

        const zoomIntensity = 0.08;
        const rect = viewportEl.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Get canvas coordinate under mouse before zoom
        const cx = (mouseX - panX) / scale;
        const cy = (mouseY - panY) / scale;

        // Calculate new scale
        const delta = e.deltaY < 0 ? 1 : -1;
        let newScale = scale + delta * zoomIntensity * scale;
        newScale = Math.max(minScale, Math.min(maxScale, newScale));

        // Update pan to keep mouse point anchored
        panX = mouseX - cx * newScale;
        panY = mouseY - cy * newScale;
        scale = newScale;

        applyTransform();
    }, { passive: false });

    // ── STARFIELD ENGINE ──
    (function () {
        const canvas = document.createElement('canvas');
        canvas.id = 'starfield-canvas';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        let stars = [], frame = 0;

        function resize() {
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
            generateStars();
        }

        function generateStars() {
            const count = Math.floor((canvas.width * canvas.height) / 3500);
            stars = Array.from({ length: count }, () => ({
                x:     Math.random() * canvas.width,
                y:     Math.random() * canvas.height,
                r:     Math.random() * 1.1 + 0.15,
                base:  Math.random() * 0.55 + 0.15,
                speed: Math.random() * 0.016 + 0.003,
                phase: Math.random() * Math.PI * 2
            }));
        }

        function tick() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            frame++;

            for (const s of stars) {
                const alpha = s.base + Math.sin(frame * s.speed + s.phase) * 0.28;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${Math.min(1, Math.max(0, alpha))})`;
                ctx.fill();
            }

            requestAnimationFrame(tick);
        }

        function setVisible(on) {
            canvas.style.opacity = on ? '1' : '0';
        }

        resize();
        tick();
        window.addEventListener('resize', resize);

        new MutationObserver(() => {
            setVisible(document.body.classList.contains('dark-mode'));
        }).observe(document.body, { attributes: true, attributeFilter: ['class'] });

        setVisible(document.body.classList.contains('dark-mode'));
    })();
});
