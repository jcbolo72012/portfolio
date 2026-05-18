// Fetch the most recent GitHub project and create dynamic background text
const GITHUB_USERNAME = 'jcbolo72012';
const CONTAINER = document.getElementById('background-text-container');

// Track current page/tab
let currentPage = 'about';

// Embedded paper text (no fetch needed, avoids CORS issues)
const PAPER_TEXT = `FRIDA: Fisheye Re-Identification Dataset with Annotations Mertcan Cokbas, John Bolognino, Janusz Konrad, Prakash Ishwar Department of Electrical and Computer Engineering, Boston University 8 Saint Mary's Street, Boston, MA 02215 mcokbas, jcbolo, jkonrad, pi@bu.edu Abstract Person re-identification (PRID) from side-mounted rectilinear-lens cameras is a well-studied problem. On the other hand, PRID from overhead fisheye cameras is new and largely unstudied, primarily due to the lack of suitable image datasets. To fill this void, we introduce the Fisheye Re-IDentification Dataset with Annotations (FRIDA), with 240k+ bounding-box annotations of people, captured by 3 time-synchronized, ceiling-mounted fisheye cameras in a large indoor space. Due to a field-of-view overlap, PRID in this case differs from a typical PRID problem, which we discuss in depth. We also evaluate the performance of 10 state-of-the-art PRID algorithms on FRIDA. We show that for 6 CNN-based algorithms, training on FRIDA boosts the performance by up to 11.64% points in mAP compared to training on a common rectilinear-camera PRID dataset. Introduction Knowing the number and location of people in public spaces, office and school buildings, stores and shopping malls, etc., is critical for public safety (fire, chemical hazards), spatial analytics (optimization of office or store space usage), HVAC energy reduction, and, recently, for pandemic management. Typically, people-detection systems use standard surveillance cameras (equipped with rectilinear lens) mounted high on walls above the scene of interest. Since such cameras have a relatively narrow field of view (FOV), a number of them must be installed and managed which significantly increases the system complexity and cost, especially in large spaces. Recently, overhead fisheye cameras have been successfully proposed for people counting. However, even a fisheye camera with its large FOV cannot accurately detect people at the FOV periphery (large distance from the camera) due to extreme foreshortening and geometric distortions. Clearly, in such spaces (e.g., a convention hall) multiple overhead fisheye cameras are needed. However, since the same person may appear in FOVs of multiple cameras, person re-identification (PRID) is critical for accurate people counting, tracking, etc. While PRID for side-mounted, rectilinear-lens cameras has been researched in depth, we are aware of only three works exploring fisheye PRID, each with its own limitations and none releasing their fisheye data. Therefore, to inspire more research in this area, we are proposing a first-of-its-kind dataset, Fisheye Re-IDentification Dataset with Annotations (FRIDA), that was captured by three overhead fisheye cameras in a large space and includes over 240,000 bounding-box annotations of people. Typical PRID datasets are not designed for people counting and were captured by side-mounted, rectilinear-lens cameras without FOV overlap. In this case, the goal is to identify the same person in two images captured by two cameras at different times. FRIDA, however, is meant for people counting and was captured by time-synchronized, overhead, fisheye cameras with fully-overlapping FOVs. We also evaluate the performance of 10 state-of-the-art PRID methods on FRIDA: 6 methods developed for typical PRID datasets and 4 methods developed for overhead fisheye cameras. The results show that training CNN-based methods on FRIDA improves performance by 4.99-11.64% points in mAP compared to training on a typical PRID dataset. Contributions: We introduce a new PRID dataset, FRIDA, for indoor person re-identification using time-synchronized overhead fisheye cameras. This is the first overhead fisheye dataset for PRID. We evaluate the performance of 10 state-of-the-art PRID methods on FRIDA using two metrics. Datasets There exist several datasets for person re-identification using side-mounted rectilinear-lens cameras. Most common ones include VIPeR, PRID 2011, Airport, CUHK03, GRID, MSMT17, Market-1501 and iLIDS. While there exist people-focused datasets captured by overhead fisheye-lens cameras (PIROPO, BOMNI, MW, HABBOF, CEPDOF, WEPDTOF), they have been developed with the goal of people detection and, in some cases, tracking. Algorithms Person re-identification using rectilinear-lens cameras is a well-studied problem. Recent approaches use deep learning and outperform traditional methods. Sun et al. proposed PCB in which feature vectors are uniformly partitioned. Zheng et al. proposed Pyramid which leverages information from different spatial scales. Chen et al. proposed ABDNet which focuses on wider aspects through diverse attention maps. Zhu et al. proposed VAreID that allows matching regardless of viewpoint. Wieczorek et al. proposed CTL model which extends the triplet loss. Very few PRID methods have been developed for overhead fisheye cameras. FRIDA Dataset FRIDA is the first PRID dataset captured indoors by multiple overhead fisheye cameras. The cameras have fully-overlapping FOVs, are time-synchronized, and were collected in a 2,000 sq ft room using 3 ceiling-mounted fisheye cameras. Annotations consist of 242,809 bounding boxes drawn around people. Scenarios FRIDA consists of four segments where each segment captures different challenges: Segment 1 has people coming in and settling down, evenly distributed around the room. Segment 2 is the most crowded and dynamic with people constantly moving. Segment 3 is the longest with over 100,000 bounding boxes and people gathering closely. Segment 4 has people leaving the room. Results All geometry-based algorithms performed extremely well, achieving cumulative QMS above 88% and cumulative mAP above 93%. For appearance-based methods trained on FRIDA, all networks achieved cumulative QMS above 63% and cumulative mAP above 75%. When trained on Market-1501, all networks performed better when trained on FRIDA except Pyramid. Conclusions We introduced FRIDA, the first image dataset for person re-identification from overhead fisheye cameras. The dataset is unique not only for camera type but for overlapping fields of views. Geometry-based algorithms significantly outperformed appearance-based methods. The best geometry-based method reaches almost 97% in cumulative mAP. Appearance-based methods do not require calibration and can be applied out of the box.`;

// Concatenate all content to create background text
function getCombinedText() {
    // Create a comprehensive text from multiple sources
    const appContent = `Software Engineer About Me Software Engineer Projects Law Firm Site ML and Prompting Utilities Contact Me jcbolo72012@gmail.com Publications FRIDA Fisheye Re-Identification Dataset with Annotations Visible coalitions of neuronal activities in brain-to-text communication via handwriting`;
    
    const readmeContent = `Portfolio Website This is a simple one-page portfolio website designed for a software developer. The layout is structured to resemble a business card, which is centered on the webpage. The website is responsive and adjusts to different screen sizes, making it suitable for both desktop and mobile devices. Project Structure portfolio-website index.html Main HTML document for the portfolio website styles style.css CSS styles for the portfolio website scripts app.js JavaScript code for handling interactions package.json Configuration file for npm README.md Documentation for the project Features Responsive design that adapts to various screen sizes. Interactive buttons to change the content displayed on the business card. Clean and modern layout. Getting Started To set up the project locally, follow these steps: Clone the repository git clone repository-url Navigate to the project directory cd portfolio-website Install the necessary dependencies if any npm install Open the src/index.html file in your web browser to view the portfolio website. Usage Click the buttons on the business card to change the displayed content. The layout is designed to be user-friendly and visually appealing. Contributing Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request. License This project is open-source and available under the MIT License.`;
    
    const styleContent = `body margin 0 display flex justify-content center align-items center height 100vh background linear-gradient 135deg background-text-container position fixed top 0 left 0 width 100% height 100% z-index 1 pointer-events none overflow hidden background-text-item position absolute color font-family Courier New monospace font-size 14px white-space nowrap transition transform 0.1s ease-out will-change transform card border 2px solid black border-radius 0 box-shadow none padding 20px text-align left width 750px height 430px font-family Garamond Times New Roman serif font Garamond transition transform 0.2s background-color white background-size 100% position relative z-index 10 card hover transform scale 1.025 button-container margin-top 20px card button background-color button border-radius 5px padding 10px 15px cursor pointer margin 5px transition background-color 0.3s button hover background-color media max-width 1200px card width 90%`;
    
    return (appContent + " " + readmeContent + " " + styleContent).repeat(3);
}

// Parse markdown to extract text content
function parseMarkdownText(markdown) {
    return markdown
        .replace(/^#+\s/gm, '')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/[*_`~]/g, '')
        .replace(/!\[.*?\]\(.*?\)/g, '')
        .replace(/---+/g, '')
        .split('\n')
        .filter(line => line.trim().length > 0)
        .join(' ');
}

// Fetch random source files from a random GitHub project
async function fetchProjectText() {
    if (window.getCurrentPage && window.getCurrentPage() !== 'publications') {
        try {
            const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
            const repos = await reposResponse.json();
            
            if (repos.length === 0) return { text: getCombinedText() };
            
            // Pick a random repo
            const repo = repos[Math.floor(Math.random() * repos.length)];
            
            // Fetch repo contents to find source files
            const defaultBranch = repo.default_branch;
            const contentsUrl = `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/contents?ref=${defaultBranch}`;
            
            try {
                const contentsResponse = await fetch(contentsUrl);
                if (contentsResponse.ok) {
                    const contents = await contentsResponse.json();
                    
                    // Filter for source code files
                    const sourceExtensions = ['.js', '.py', '.ts', '.jsx', '.tsx', '.java', '.cpp', '.cs', '.go', '.rs', '.rb', '.php'];
                    const sourceFiles = contents.filter(file => 
                        file.type === 'file' && 
                        sourceExtensions.some(ext => file.name.endsWith(ext))
                    );
                    
                    if (sourceFiles.length > 0) {
                        // Pick 2-3 random source files
                        const filesToFetch = [];
                        const numFiles = Math.min(3, sourceFiles.length);
                        for (let i = 0; i < numFiles; i++) {
                            const randomFile = sourceFiles[Math.floor(Math.random() * sourceFiles.length)];
                            filesToFetch.push(randomFile);
                        }
                        
                        // Fetch content of selected files
                        let combinedSourceCode = '';
                        for (const file of filesToFetch) {
                            try {
                                const fileResponse = await fetch(`https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/${defaultBranch}/${file.path}`);
                                if (fileResponse.ok) {
                                    const fileContent = await fileResponse.text();
                                    combinedSourceCode += fileContent + ' ';
                                }
                            } catch (e) {
                                console.log('Could not fetch file:', file.path);
                            }
                        }
                        
                        if (combinedSourceCode.length > 0) {
                            return {
                                name: repo.name,
                                text: combinedSourceCode + " " + getCombinedText()
                            };
                        }
                    }
                }
            } catch (e) {
                console.log('Could not fetch repo contents');
            }
            
            return { text: getCombinedText() };
        } catch (error) {
            console.error('Error fetching project:', error);
            return { text: getCombinedText() };
        }
    } else {
        // Load paper text for publications tab (embedded to avoid CORS)
        console.log('Loading paper text for publications tab');
        if (window.getCurrentPage && window.getCurrentPage() === 'publications') {
            return { text: PAPER_TEXT };
        }
        return { text: getCombinedText() };
    }
}

// Create text elements in continuous flow, one word per element
function createBackgroundText(projectData) {
    if (!projectData) return;
    
    const text = projectData.text;
    const words = text.split(/\s+/).filter(w => w.length > 0);
    const container = CONTAINER;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const lineHeight = 20;
    const baseX = 20;
    const wordSpacing = 8; // Space between words
    
    let currentX = baseX;
    let currentY = 20;
    
    words.forEach(word => {
        const wordWidth = word.length * 8; // Approximate character width
        
        // Check if word fits on current line
        if (currentX + wordWidth > width - 40) {
            // Move to next line
            currentY += lineHeight;
            currentX = baseX;
            
            if (currentY > height - 40) {
                return; // Stop if we run out of space
            }
        }
        
        // Create individual element for each word
        const el = document.createElement('div');
        el.className = 'background-text-item';
        el.textContent = word;
        el.style.left = currentX + 'px';
        el.style.top = currentY + 'px';
        el.dataset.baseX = currentX;
        el.dataset.baseY = currentY;
        container.appendChild(el);
        
        // Move position for next word
        currentX += wordWidth + wordSpacing;
    });
}

// Mouse tracking effect
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
const REPEL_RADIUS = 50;
const REPEL_STRENGTH = 50;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateTextElements() {
    const items = document.querySelectorAll('.background-text-item');
    
    items.forEach(item => {
        const baseX = parseFloat(item.dataset.baseX);
        const baseY = parseFloat(item.dataset.baseY);
        
        // Calculate distance from mouse
        const dx = baseX - mouseX;
        const dy = baseY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        let newX = baseX;
        let newY = baseY;
        
        // If within repel radius, push away
        if (distance < REPEL_RADIUS) {
            const angle = Math.atan2(dy, dx);
            const force = (1 - distance / REPEL_RADIUS) * REPEL_STRENGTH;
            newX = baseX + Math.cos(angle) * force;
            newY = baseY + Math.sin(angle) * force;
        }
        
        item.style.transform = `translate(${newX - baseX}px, ${newY - baseY}px)`;
    });
    
    requestAnimationFrame(animateTextElements);
}

// Function to update current page
function setCurrentPage(page) {
    currentPage = page;
    console.log('Current page:', currentPage);
    
    // Update background text when page changes
    updateBackgroundTextForPage();
}

// Update background text based on current page
async function updateBackgroundTextForPage() {
    const projectData = await fetchProjectText();
    CONTAINER.innerHTML = ''; // Clear existing
    createBackgroundText(projectData);
}

// Expose to global scope for app.js
window.setCurrentPage = setCurrentPage;
window.getCurrentPage = () => currentPage;
window.updateBackgroundTextForPage = updateBackgroundTextForPage;

// Initialize
window.addEventListener('load', async () => {
    const projectData = await fetchProjectText();
    createBackgroundText(projectData);
    animateTextElements();
});

// Handle window resize
window.addEventListener('resize', () => {
    // Could add logic to recreate text on resize if needed
});
