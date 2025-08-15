document.addEventListener('DOMContentLoaded', function() {
    const content = {
        about: {
            title: "About Me",
            text: "Software Engineer"
        },
        projects: {
            title: "Projects",
            text: "(<a href='https://richardsulzmanlaw.com' target='_blank'>Law Firm Site</a>)"
        },
        contact: {
            title: "Contact Me",
            text: "jcbolo72012@gmail.com"
        },
        publications: {
            title: "Publications",
            text: "<ul>\
                <li><a href=\"https://arxiv.org/pdf/2210.01582\">FRIDA: Fisheye Re-Identification Dataset with Annotations</a></li>\
                <li> Visible coalitions of neuronal activities in brain-to-text communication via handwriting</li>\
            </ul>"
        }
    };

    const titleElement = document.getElementById('card-title');
    const textElement = document.getElementById('card-text');

    function updateContent(section) {
        titleElement.textContent = content[section].title;
        textElement.innerHTML = content[section].text;
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