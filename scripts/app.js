document.addEventListener('DOMContentLoaded', function () {

    // ── Helpers ───────────────────────────────────────────────────────────────

    function projectCard({ name, meta, description, links }) {
        const linkHTML = links
            .map(({ label, href }) => `<a href="${href}" target="_blank">${label}</a>`)
            .join('');
        return `
            <div class="project-card">
                <div class="project-name">${name}</div>
                <div class="project-tech">${meta}</div>
                <div class="project-description">${description}</div>
                <div class="project-links">${linkHTML}</div>
            </div>`;
    }

    // ── Section content ───────────────────────────────────────────────────────

    const sections = {

        about: {
            title: 'About Me',
            html: `
                I am a Software Engineer specializing in machine learning and NLP, currently
                building AI-enabled learning products at Savvas Learning Company. 
                
            `,
        },

        projects: {
            title: 'Projects',
            html: [
                projectCard({
                    name: 'EcomIntent API',
                    meta: 'Tech: DistilBERT, FastAPI, Modal, RapidAPI',
                    description: `E-commerce intent classifier that analyzes customer support tickets and
                        categorizes them (WISMO, returns, exchanges, etc). Achieves 99.92% accuracy with
                        8ms latency — 15x cheaper and 50x faster than GPT-4o mini.`,
                    links: [
                        { label: 'GitHub',   href: 'https://github.com/jcbolo72012/ecomintent-api' },
                        { label: 'RapidAPI', href: 'https://rapidapi.com/john-UG9kfZiW5/api/ecomintent-e-commerce-intent-classifie' },
                        { label: 'Model',    href: 'https://huggingface.co/JohnBolognino/ecomintent-distilbert' },
                        { label: 'Website',  href: 'https://ecomintent.com/' },
                    ],
                }),
                projectCard({
                    name: 'ML and Prompting Utilities',
                    meta: 'Tech: Python, AI/ML Tools',
                    description: 'Collection of utilities for machine learning and prompt engineering.',
                    links: [
                        { label: 'Website', href: 'https://promptutils.tools' },
                    ],
                }),
            ].join(''),
        },

        // ── Experience ────────────────────────────────────────────────────────
        // Gear animation and work history content goes here
        experience: {
            title: 'Experience',
            html: ``,
        },

        publications: {
            title: 'Publications',
            html: [
                projectCard({
                    name: 'FRIDA: Fisheye Re-Identification Dataset with Annotations',
                    meta: 'Mertcan Cokbas, John Bolognino, Janusz Konrad, Prakash Ishwar &mdash; IEEE CVPR Workshop 2022',
                    description: `Introduces a first-of-its-kind dataset of 240k+ bounding-box annotations
                        of people captured by overhead fisheye cameras. Evaluates 10 state-of-the-art
                        person re-identification algorithms, showing up to 11.64% mAP improvement when
                        training on FRIDA vs. standard rectilinear-camera datasets.`,
                    links: [
                        { label: 'arXiv', href: 'https://arxiv.org/pdf/2210.01582' },
                    ],
                }),
                projectCard({
                    name: 'Visible coalitions of neuronal activities in brain-to-text communication via handwriting',
                    meta: 'SPIE Proceedings, Vol. 13517 (2025)',
                    description: `Explores the neural correlates of handwriting-based brain-to-text communication,
                        analyzing visible coalitions of neuronal activity that underpin decoding of handwritten
                        characters from neural signals.`,
                    links: [
                        { label: 'SPIE', href: 'https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13517/3056602/Visible-coalitions-of-neuronal-activities-in-brain-to-text-communication/10.1117/12.3056602.short' },
                    ],
                }),
            ].join(''),
        },

    };

    // ── Router ────────────────────────────────────────────────────────────────

    const textElement = document.getElementById('card-text');
    const navLinks    = document.querySelectorAll('.nav-link');

    function updateContent(section) {
        textElement.innerHTML = sections[section].html;
        navLinks.forEach(function (link) {
            link.classList.toggle('active', link.dataset.section === section);
        });
        if (window.setCurrentPage) {
            window.setCurrentPage(section);
        }
    }

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            updateContent(this.dataset.section);
        });
    });

    updateContent('about');
});