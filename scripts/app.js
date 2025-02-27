document.addEventListener('DOMContentLoaded', function() {
    const content = {
        about: {
            title: "About Me",
            text: "I am a software developer with a passion for creating innovative solutions."
        },
        projects: {
            title: "Projects",
            text: "Here are some of my projects: Project A, Project B, Project C."
        },
        contact: {
            title: "Contact Me",
            text: "You can reach me at: email@example.com."
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