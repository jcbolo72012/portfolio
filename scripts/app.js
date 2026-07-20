document.addEventListener('DOMContentLoaded', function() {
    const content = {
        about: {
            title: "About Me",
            text: "Software Engineer, Freelance Web Developer, and Researcher."
        },
        projects: {
            title: "Projects",
            text: "<div class='project-card'><div class='project-name'>EcomIntent API</div><div class='project-tech'>Tech: DistilBERT, FastAPI, Modal, RapidAPI</div><div class='project-description'>E-commerce intent classifier that analyzes customer support tickets and categorizes them (WISMO, returns, exchanges, etc). Achieves 99.92% accuracy with 8ms latency — 15x cheaper and 50x faster than GPT-4o mini.</div><div class='project-links'><a href='https://github.com/jcbolo72012/ecomintent-api' target='_blank'>GitHub</a><a href='https://rapidapi.com/john-UG9kfZiW5/api/ecomintent-e-commerce-intent-classifie' target='_blank'>RapidAPI</a><a href='https://huggingface.co/JohnBolognino/ecomintent-distilbert' target='_blank'>Model</a><a href='https://ecomintent.com/' target='_blank'>Website</a></div></div><div class='project-card'><div class='project-name'>ML and Prompting Utilities</div><div class='project-tech'>Tech: Python, AI/ML Tools</div><div class='project-description'>Collection of utilities for machine learning and prompt engineering.</div><div class='project-links'><a href='https://promptutils.tools' target='_blank'>Website</a></div></div>"
        },
        contact: {
            title: "Contact Me",
            text: "jcbolo72012@gmail.com"
        },
        publications: {
            title: "Publications",
            text: "<ul>\
                <li><a href=\"https://arxiv.org/pdf/2210.01582\">FRIDA: Fisheye Re-Identification Dataset with Annotations</a></li>\
                <li><a href=\"https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13517/3056602/Visible-coalitions-of-neuronal-activities-in-brain-to-text-communication/10.1117/12.3056602.short\" target=\"_blank\">Visible coalitions of neuronal activities in brain-to-text communication via handwriting</a></li>\
            </ul>"
        }
    };

    const titleElement = document.getElementById('card-title');
    const textElement = document.getElementById('card-text');

    function updateContent(section) {
        titleElement.textContent = content[section].title;
        textElement.innerHTML = content[section].text;
        
        // Update current page in background script
        if (window.setCurrentPage) {
            window.setCurrentPage(section);
        }
    }

    document.getElementById('about-btn').addEventListener('click', function() {
        updateContent('about');
    });

    document.getElementById('projects-btn').addEventListener('click', function() {
        updateContent('projects');
    });

    document.getElementById('contact-btn').addEventListener('click', function() {
        updateContent('contact');
    });

     document.getElementById('publications-btn').addEventListener('click', function() {
        updateContent('publications');
    });

    // Initialize with the About Me section
    updateContent('about');
});