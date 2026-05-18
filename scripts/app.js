document.addEventListener('DOMContentLoaded', function() {
    const content = {
        about: {
            title: "About Me",
            text: "Software Engineer, Freelance Web Developer, and Researcher."
        },
        projects: {
            title: "Projects",
            text: "(<a href='https://richardsulzmanlaw.com' target='_blank'>Law Firm Site</a>) (<a href='https://promptutils.tools' target='_blank'>ML and Prompting Utilities</a>)"
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
        },
        services: {
            title: "Web Dev",
            text: "<strong>Website Development</strong><br>$800 - Custom, responsive website tailored to your business needs.<br><br><strong>Monthly Support ($50/month)</strong><br>• On-call maintenance & bug fixes<br>• SEO optimization<br>• Technical consultation<br>• Performance monitoring<br><br><strong>Contract Terms</strong><br>50% deposit upon agreement, 50% upon completion. Monthly service includes up to 5 hours of support. Additional hours billed at $100/hr. All work backed by satisfaction guarantee. <a href=\"mailto:jcbolo72012@gmail.com\">Contact for details</a>"
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

    document.getElementById('services-btn').addEventListener('click', function() {
        updateContent('services');
    });

    // Initialize with the About Me section
    updateContent('about');
});