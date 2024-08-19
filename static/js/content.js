const content = document.querySelector('.content')
const contentByIndexes = [
    `
    <p>
        Hi, my name is Alex. I'm a Software Engineering major and a 
        <a onclick="turnSection(7)" href="javascript:;">Noblitt Scholar</a> at Rose-Hulman Institute of Technology.
        I'm an innovative, open-minded, and creative person willing to do meaningful things.
        I'm passionate about lifelong learning and improving my skills and knowledge.
        <br>
        <a onclick="turnSection(1)" href="javascript:;">More about me &rightarrow;</a>
    </p>

    <h1>Featured links</h1>

    <div class="link" onclick="redirect('https://nogotochki.xyz')">
        <h1>Nail salon web page</h1>
        <p>
            An example of what I made as a freelancer (full-stack).
            The webpage may require VPN because it is based on a Russian server.
        </p>
    </div>

    <div class="link" onclick="redirect('https://nogotochki.xyz')">
        <h1>Astrologer website</h1>
        <p>
            An example of what I made as a freelancer (front-end).
            The webpage may require VPN because it is based on a Russian server.
        </p>
    </div>
    `,

    `
    <h1>About me</h1>
    <p>
        I'm passionate about coding and automating things. It all started with a small program written in PascalABC.
        I've created a simple electronic watch with a couple of lines of code. But that opened up a whole new world of
        possibilities for me. Since then, I got experience in <strong>Object Oriented Programming, Git, virtual environments,
        relational databses</strong>, and a lot more things I couldn't even imagine doing back that day. And I want to learn more.
        I'm passionate about the idea of lifelong learning and curious about where my coding journey will lead me.
    </p>
    <p>
        I love <strong>thinking outside the box</strong> and using creative approach to things. When I solve problems,
        I try to look for things other people don't see or miss. 
    </p>
    <p>
        I strive to bring things to perfection. In other words, I'm into optimization. I love the feeling when I know
        that every single detail on a website has its own place.
    </p>
    <p>
        I'm committed to making the world a better place, however hackneyed this may sound. I actively promote my idea of
        "helpful coding" &mdash; that is, using programming for social and environmental good. Along with HostedByAlexAnisimov, which is
        a free hosting for those who cannot afford buying a paid plan, I have several projects and project ideas embracing this
        concept. As a bottom line, <strong>I would really love to work on something meaningful</strong>.
    </p>
    `,

    `
    <h1>Skills</h1>
    <h2>Programming Languages:</h2>
    <ul class="skills">
        <li>Python (LinkedIn Verified)</li>
        <li>HTML (LinkedIn Verified)</li>
        <li>SQL</li>
        <li>CSS</li>
    </ul>
    <p>I have prior experience with:</p>
    <ul class="skills">
        <li>Java</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>C++</li>
        <li>Swift</li>
        <li>C# and ASP.NET</li>
        <li>C++ MFC library</li>
    </ul>

    <h2>Technical:</h2>
    <ul class="skills">
        <li>Full-Stack development</li>
        <li>Git</li>
        <li>.env</li>
        <li>Virtual environments</li>
        <li>Creating & Using APIs</li>
        <li>Adaptive layout</li>
    </ul>
    <p>I have prior experience with:</p>
    <ul class="skills">
        <li>Relational databases</li>
        <li>Internet of Things</li>
        <li>iOS development</li>
    </ul>

    <h2>Python modules:</h2>
    <ul class="skills">
        <li>Flask</li>
        <li>Flask-Login</li>
        <li>Django</li>
        <li>SQLAlchemy</li>
        <li>Pygame</li>
        <li>PyQT5</li>
    </ul>

    <h2>Soft skills:</h2>
    <ul class="skills">
        <li>Leadership</li>
        <li>Creativity</li>
        <li>Flexibility & Adjustment</li>
        <li>Handling pressure</li>
        <li>Teamwork</li>
    </ul>
    `,

    `
    <h1>Education</h1>
    <h2>Bachelor of Science, Software Engineering, Rose-Hulman Institute of Technology, 2023-2027</h2>
    <p>
        Related courses: Data Structures and Algorithm Analysis, Object-Oriented Software Development,
        Software Project Management, Computer Architecture, Practical Security II, Intro to Systems Programming,
         Intro to Digital Systems, Intro to Entrepreneurship, Programming in the Community
    </p>
    <h2>Master of Engineering Management, Rose-Hulman Institute of Technology, exp. 2025-2027</h2>

    <h1>Certifications</h1>
    <ul>    
        <li>Certified SAFe 6 Agilist, Jun 2024</li>
        <li>Google Cybersecurity Professional Certificate, Mar 2024</li>
    </ul>

    <h1>Online workshops from Yandex (Russian Google counterpart):</h1>
    <ul>
        <li>Python programming language basics, September 2020 - May 2021</li>
        <li>Industrial and Object-Oriented Programming in Python, September 2021 - May 2023, graduated with honors</li>
        <li>Django, October 2022 - December 2022</li>
    </ul>
    `,

    `
    <h1>Work experience</h1>

    <h2>Software Intern, Wi-Tronix</h2>
    <h3>Bolingbrook, IL, Jun - Aug 2024</h3>
    <p>
        <ul class="skills">
            <li>Internet of Things</li>
            <li>Embedded application development</li>
            <li>C++</li>
            <li>SAFe Agile</li>
            <li>Code investigation</li>
        </ul>
    </p>
    <ul>
        <li>Spearheadied development of embedded software decoding real-time signals from an event recorder over Ethernet to integrate the existing codebase with new customer’s specs and ensure safe rail operations in New York and Newark</li>
        <li>Took initiative to take on extra user stories helping teammates or pulling tasks from future iterations and timely deliver them ensuring they are not moved to the next iteration</li>
        <li>Saved a module from a bug I had made by creating thorough and effective unit tests; during integration testing on my code, identified a bug another team had made</li>
    </ul>

    <h2>Software Engineering Intern, Rose-Hulman Ventures</h2>
    <h3>Terre Haute, IN, Dec 2023 - May 2024</h3>
    <p>
        <ul class="skills">
            <li>ASP.NET</li>
            <li>Relational databases</li>
            <li>SQL Server Management Studio</li>
            <li>Blob cloud storage</li>
            <li>Code investigation</li>
        </ul>
    </p>
    <ul>
        <li>Modernized company’s website by migrating some parts to ASP.NET Core and enhancing the interface and functionality to provide a seamless and engaging user experience</li>
        <li>Moved local static files to the cloud to enhance scalability and provide more efficient data management and used Azure Blob Storage API to access the files from the web application</li>
        <li>Used ASP.NET models and SQL Server Management Studio to ensure relational database follows new requirements</li>
        <li>Performed usability and regression testing to identify and fix bugs in development and production and ensure a streamlined user experience</li>
        <li>Investigated issues in the code I had never worked with, took responsibility for the bugs, and in 90% of cases, was able to rectify the issues prior to customer noticing them</li>
    </ul>

    <h2>General Staff (Part-Time), Rose-Hulman Sports & Recreation Center</h2>
    <h3>Terre Haute, IN, Dec 2023 - Present</h3>

    <h2>Freelance Full-Stack Web Developer</h2>
    <h3>March 2020 - June 2023</h3>
    <p>
        <ul class="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>SQL</li>
        </ul>
    </p>
    <ul>
        <li>Developed landing pages, personal web pages, business card sites, and corporate websites. Created 10+ solutions</li>
        <li>Used HTML, CSS, and JavaScript along with third-party modules, such as intl-tel-input.js, bulma.css, and others, for the front end</li>
        <li>Utilized Python, namely Flask, Flask-Login, and Flask-SQLAlchemy, for the back end. Worked with databases, using pure SQL and ORMs. Developed admin panels</li>
        <li>Frequently advised clients on design and content of their web pages. Worked closely with customers to bring their ideas to life. Dealt well with ambiguity and undefined or broadly defined problems</li>
        <li>Volunteered as a web developer for nonprofits, such as charities aiding children with disabilities and elderly people, making sure they can get a website for free</li>
    </ul>

    <h2>Featured work:</h2>
    <p>
        Some of my most recent works as a freelancer include these web pages:
    </p>
    <div class="link" onclick="redirect('https://nogotochki.xyz')">
        <h1>Nail salon web page</h1>
        <p>
            Full-stack. May require VPN
        </p>
    </div>
    <div class="link" onclick="redirect('https://aadev151.github.io/hostedbyme/arkadiya')">
        <h1>Astrologer website</h1>
        <p>
            Front-end. May require VPN
        </p>
    </div>
    `,

    `
    <h1>Research</h1>
    <p>
        I am currently (<strong>Oct 2023 - Present</strong>) involved in undergraduate Computer Science Education research with Dr. Joseph Hollingsworth. Highlights:
    </p>
    <ul>
        <li>Research Automating Methods to Overcome Learning Obstacles in Computer Science</li>
        <li>Develop software analyzing students’ assignment-taking patterns using Python</li>
        <li>Track time spent on problem, length of breaks, and tendency to guess and check</li>
        <li>Investigate the best ways to interpret results and visualize data</li>
        <li>Optimize and refactor code from past researchers</li>
    
    `,

    `
    <h1>My featured projects</h1>
    
    <h2>HelpUnicorn</h2>
    <i>
        Founder, team leader, full-stack developer, iOS developer
        <br>
        Sep 2021 - May 2023
    </i>
    <ul>
        <li>Founded a network of welfare funds and IT specialists to offer free assistance to charities</li>
        <li>Wrote 2,000 lines of code for authentication, email confirmation, database, private chat, password reset, and API; contributed to templates and CSS rules; co-authored iOS app</li>
        <li>Developed website builder for charities to automate the process of webpage creation</li>
        <li>Motivated teammates, organized weekly progress meetings, represented site at conferences, enabled collaboration with foreign funds and developers</li>
        <li>Optimized website performance to get 99% according to Google PageSpeed Insights</li>
        <li><strong>Saved $3,000+ for charities and encouraged 1,000+ users to join</strong></li>
    </ul>
    <div class="link" onclick="redirect('https://helpunicorn.pythonanywhere.com')">
        <h1>HelpUnicorn</h1>
        <p>https://<wbr>helpunicorn.<wbr>pythonanywhere.<wbr>com</p>
    </div>

    <h2>AntiGPT</h2>
    <i>
        Founder, full-stack developer
        <br>
        Mar 2023 - May 2023
    </i>
    <ul>
        <li>Built an app (web-client and server) identifying ChatGPT-written text in 50+ languages</li>
        <li>Used JavaScript and Python to implement multi-tiered application (two-tier architecture on top of OpenAI API) sending queries and fetching responses from the server</li>
    </ul>

    <h2>Kitty Sneakers</h2>
    <i>
        Full-stack developer
        <br>
        Oct 2022 - Dec 2022
    </i>
    <ul>
        <li>Started a mock sneaker store page to provide all functionality an online store expects</li>
        <li>Used Django and Bootstrap to work with relational database, fixtures, admin page, authorization, star rating, tags, and managing products</li>
        <li>Worked with CI/CD, Git branches, and GitHub issues and pull requests; employed environment variables, .env file, and .gitignore</li>
        <li>Learned to work with virtual environments</li>
        <li>Tested each chunk of code with regular and edge cases and reviewed code of classmates</li>
    </ul>
    <div class="link" onclick="redirect('https://gihtub.com/aadev151/kitty-sneakers')">
        <h1>Kitty Sneakers</h1>
        <p>https://github.com/<wbr>aadev151/<wbr>kitty-sneakers</p>
    </div>

    <h2>Duckystyle</h2>
    <i>
        Team leader, full-stack developer
        <br>
        May 2023
    </i>
    <ul>
        <li>Designed a system to buy and sell pictures of ducks, top up balance, withdraw money, and get currency for ads to mock an NFT auction and educate users about NFTs</li>
        <li>Coordinated team and arranged weekly meetings to ensure project success</li>
    </ul>
    <div class="link" onclick="redirect('https://gihtub.com/aadev151/duckystyle')">
        <h1>Duckystyle</h1>
        <p>https://gihtub.com/<wbr>aadev151/<wbr>duckystyle</p>
    </div>

    <h2>Squid Pygame</h2>
    <i>
        Team leader, Python developer
        <br>
        Jan 2022 - Feb 2022
    </i>
    <ul>
        <li>Utilized various Pygame techniques to create a desktop game inspired by Netflix series</li>
        <li>Designed the concept of the levels to captivate users’ attention and repeat the series’ plot</li>
        <li>Led team of two, organizing regular meetings and making sure deadlines were hit</li>
    </ul>
    <div class="link" onclick="redirect('https://gihtub.com/aadev151/squid-pygame')">
        <h1>Squid Pygame</h1>
        <p>https://gihtub.com/<wbr>aadev151/<wbr>squid-pygame</p>
    </div>

    <h2>MP3 Player</h2>
    <i>
        Python developer
        <br>
        Nov 2021
    </i>
    <ul>
        <li>Utilized PyQT5 and PyQT Designer to build a desktop MP3 player app</li>
        <li>Developed an app capable of loading tracks, reading their metadata (including name, artist, and cover image), creating playlists, and greeting users with the name they indicate upon registration</li>
        <li>Worked with Git to control versions of the project</li>
    </ul>
    <div class="link" onclick="redirect('https://gihtub.com/aadev151/mp3-player')">
        <h1>MP3 Player</h1>
        <p>https://gihtub.com/<wbr>aadev151/<wbr>mp3-player</p>
    </div>

    <h2>prevlink.js</h2>
    <i>
        JavaScript developer
    </i>
    <ul>
        <li>Developed a JavaScript library for creating link previews on websites</li>
    </ul>
    <div class="link" onclick="redirect('https://aadev151.github.io/prevlink/')">
        <h1>prevlink.js</h1>
        <p>https://<wbr>aadev151.github.io/<wbr>prevlink/</p>
    </div>

    <h2>Food delivery chatbot</h2>
    <i>
        Python developer
        <br>
        Sep 2020 - Oct 2020
    </i>
    <ul>
        <li>Built a chatbot for VKontakte providing a simple interface and intuitive design for ordering food</li>
        <li>Created a customizable dictionary for user's "food preferences"</li>
        <li>Provided the functionality of sending the chosen food to a single predefined courier</li>
    </ul>
    <div class="link" onclick="redirect(https://github.com/aadev151/ru-foodbot')">
        <h1>Food delivery chatbot</h1>
        <p>https://github.com/<wbr>aadev151/<wbr>ru-foodbot</p>
    </div>
    `,

    `
    <h1>Volunteering experience</h1>
    <p>
        I love devoting my life to working on something meaningful and strive to include as much service work
        and volunteering in my schedule as possible. Here are the highlights of my volunteering experience during the high school.
    </p>

    <h2>Regional Resource Center</h2>
    <i>Nov 2020 - Jul 2023</i>
    <p>
        Helped the community in different ways:
    </p>
    <ul>
        <li>Organized 10+ events for minorities, elderly people, disabled people, and veterans</li>
        <li>Delivered food and personal hygiene items for ill and disabled people</li>
        <li>Attended children's homes, played with and gave presents to orphans</li>
        <li>Organized Subbotniks (clean-up events) to clean parks and children's playgrounds off litter</li>
    </ul>

    <h2>Lyceum 1535</h2>
    <i>Sep 2021 - May 2023</i>
    <ul>
        <li>Organized events for annual charity fairs for 2 years</li>
        <li>Helped with sorting the information at the school's World War II museum</li>
        <li>Gathered students' ideas on how to improve the school and arranged votings for them as the head of the Student Council</li>
    </ul>
    `,

    `
    <h1>Honors</h1>

    <h2>Rose-Hulman Institute of Technology</h2>
    <ul>
        <li>
            <p><strong>3x Dean's List</strong></p>
        </li>
        <li>
            <p>
                Noblitt Scholar, <strong>1/29 freshman recipients</strong>
            </p>
            <p>
                The Noblitt Scholars Program is designed to guide and support highly motivated, self-directed learners
                as they identify an area of interest to them, develop expertise in that area, and turn their passion and
                knowledge into action. Learning resources include travel experience, leadership training, and faculty mentoring.
            </p>
        </li>
    </ul>
    `,

    `
    <h1>Leadership</h1>
    <h2>Rose-Hulman</h2>
    <ul>
        <!--<li>
        <p><strong>Open Source Club, Vice President</strong></p>
            <p>
                I am the co-founder of Rose-Hulman Open Source Club, which is a place where students can
                interested in coding can discuss their projects, find teammates, or just hang out with
                like-minded folks. We also provide funding for software engineering side projects.
                <i>Starting Spring 2024</i>
            </p>
        </li>-->
        <li>
            <p><strong>Rose Propulsion Laboratory, Lead Software Developer</strong></p>
            <p>
                Expected start: Fall 2024
            </p>
        </li>
        <li>
            <p><strong>Lambda Chi Alpha, Alumni Chairman</strong></p>
            <p>
                I plan, organize, and execute quarterly networking meetings with chapter alumni, facilitate alumni relations
                with Rose-Hulman, including media and email requests, and help alumni raise money for their
                charity events.
            </p>
        </li>
        <li>
            <p><strong>Coordinator of Noblitt Scholars Social Committee</strong></p>
            <p>
                I organize meeetings, reserve rooms, and make minutes for weekly meetings of the committee.
                I am responsible for contacting the organizations the Committee decided to cooperate with for
                social events for Noblitt Scholars.
            </p>
        </li>
    </ul>
    <h2>Lyceum 1535</h2>
    <ul>
        <li>
            <p><strong>Head of Student Council</strong></p>
            <p>
                Some of my duties included organizing events (concerts, charity fairs, holiday trips, etc.),
                helping to make school acts, and arranging votings for students' ideas on how to improve
                our school.
            </p>
        </li>
        <li>
            <p><strong>Head of Publications at Student Newspaper</strong></p>
            <p>
                Overall, we issued 15+ papers. I contributed by editing errors in publications, choosing
                and discussing topics for new posts, and approving pictures.
            </p>
        </li>
        <li>
            <p><strong>Assistant to the Class President</strong></p>
            <p>
                I helped instill discipline in the class, monitored absent students, and organized
                trips, excursions, and quests for the class.
            </p>
        </li>
    </ul>
    `,

    `
    <h1>Activities</h1>

    <h2>Rose-Hulman Institute of Technology</h2>
    <ul>
        <li>
            <p><strong>Member of the R^2 program</strong></p>
            <p>
                Rose Squared is a combined Bachelor of Science and Master of Engineering Management program
                enabling highly motivated students to obtain both degrees in just four years. R^2 tudents take
                as many or more credits as those who decide to obtain the Master's degree in two years.
            </p>
        </li>
        <li>
            <p><strong>Noblitt Scholars STEM Outreach Program</strong></p>
            <p><i>Web Developer, Software Developer, Computer Science Mentor</i></p>
            <p>
                As part of the STEM Outreach Program, I participate in activities organized for kids in Terre Haute
                and meant for them to familiarize themselves with STEM disciplines. Most recently, we held a series
                of workshops for Brownies and Juniors Girl Scouts. Our next event is for Seniors and Ambassadors Girl Scouts
            </p>
        </li>
        <!--<li>
            <p><strong>Computer Security Club</strong></p>
            <p>
                We meet weekly to discuss different topics related to cybersecurity. We also participate in team competitions,
                both red teaming and blue teaming, and have weekly CTF challenges.
            </p>
        </li>-->
        <li>
            <p><strong>ESCALATE: Engineering Student Community Actively Learning Advanced Technical Entrepreneurship</strong></p>
            <p>
                ESCALATE is a living-learning program that develops the entrepreneurial mindset in students.
                Topics studied include identifying market opportunities, developing creative and innovative solutions,
                and developing approaches to capture value in the marketplace.
            </p>
        </li>
    </ul>
    `,

    `
    <h1>Contact me</h1>
    <p>
        If you want to reach out to me and discuss my software engineering experience or funny panda videos, feel free
        to send me an email. My email address is <a href="mailto:alex.anisimov@rose-hulman.edu">alex.anisimov@rose-hulman.edu</a>
    </p>
    <p>
        Here are some other ways to reach out to me:
    </p>
    <ul>
        <li><a href="tel:+18125433024" target="_blank">812-543-3024</a></li>
        <li><a href="https://wa.me/18125433024" target="_blank">WhatsApp</a></li>
        <li><a href="https://linkedin.com/in/aleksandr-anisimov" target="_blank">LinkedIn</a></li>
    </ul>
    `
]

function switchContent(contentIndex) {
    content.innerHTML = contentByIndexes[contentIndex]
    content.scrollTop = 0
}

function turnSection(sectionIndex) {
    contentSelector.selectedIndex = sectionIndex
    content.innerHTML = contentByIndexes[sectionIndex]
    content.scrollTop = 0
}


function redirect(url) {
    window.open(url, '_blank')
}


const contentSelector = document.querySelector('#skipto-selector')

contentSelector.addEventListener('change', function() {
    switchContent(contentSelector.selectedIndex)
})
