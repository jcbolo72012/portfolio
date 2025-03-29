document.addEventListener('DOMContentLoaded', function() {
    const content = {
        about: {
            title: "About Me",
            text: "Software Developer."
        },
        projects: {
            title: "Projects",
            text: "Law Firm Website | Music Generation | Portfolio Website"
        },
        contact: {
            title: "Contact Me",
            text: "jcbolo72012@gmail.com"
        }
    };

    const titleElement = document.getElementById('card-title');
    const textElement = document.getElementById('card-text');

    function updateContent(section) {
        titleElement.textContent = content[section].title;
        textElement.textContent = content[section].text;
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

    // Initialize with the About Me section
    updateContent('about');
});