const content = document.querySelector('.content')
const contentByIndexes = [
    `
    <p>
        Hi, my name is Alex; I'm a Software Engineering major and a 
        <a onclick="turnSection(7)" href="javascript:;">Noblitt Scholar</a> at Rose-Hulman Institute of Technology.
        I'm an innovative, open-minded, and creative person willing to do meaningful things.
        I'm passionate about lifelong learning and want to become proficient in my field one day.
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

    <div class="link" onclick="redirect('https://helpunicorn.pythonanywhere.com')">
        <h1>HelpUnicorn</h1>
        <p>My biggest out-of-the-classroom project I founded and led for two years</p>
    </div>
    `,

    `
    <h1>About me (aka What is aadev151?)</h1>
    <h2>
        <span style="color:red">a</span><span style="color:orange">a</span><span style="color:green">dev</span>
        stands for <span style="color:red">A</span>lex <span style="color:orange">A</span>nisimov is a <span style="color:green">dev</span>eloper
    </h2>
    <p>
        I'm passionate about coding and automating things. It all started with a small program written in PascalABC.
        I've created a simple electronic watch with a couple of lines of code. But that opened up a whole new world of
        possibilities for me. Since then, I got experience in <strong>Object Oriented Programming, Git, virtual environments,
        relational databses</strong>, and a lot more things I couldn't even imagine doing back that day. And I want to learn more.
        I'm passionate about the idea of lifelong learning and curious about where my coding journey will lead me.
    </p>
    <h2>
        151 because An<span style="color:green;font-family:monospace">ISI</span>mov lookes like An<span style="color:green;font-family:monospace">151</span>mov
    </h2>
    <p>
        I love <strong>thinking outside the box</strong> and using creative approach to things. When I solve problems,
        I try to look for things other people don't see or miss. 
    </p>
    <h2>
        All together, <span style="color:orange">aadev151</span> is a truly unique character set, which allows me to represent myself.
        I have never came across a website that had aadev151 taken as a username, and even aadev151.com is available for registration!
    </h2>
    <p>
        I strive to bring things to perfection. In other words, I'm into <strong>optimizing</strong>. I love the feeling when I know
        that every single detail on a website has its own place.
    </p>
    <h2>aadev151.github.io/hostedbyme</h2>
    <p>
        I'm committed to making the world a better place, however hackneyed this may sound. I actively promote my idea of
        "helpful coding" &mdash; that is, using programming for social and environmental good. Along with HostedByAadev151, which is
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
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>c++</li>
        <li>Swift</li>
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

    <h2>Other:</h2>
    <ul class="skills">
        <li>Spoken Russian</li>
        <li>Written Russian</li>
        <li>Russian-to-English and English-to-Russian translation</li>
    </ul>
    `,

    `
    <h1>Education</h1>
    <h2>Bachelor of Science, Software Engineering, Rose-Hulman Institute of Technology, 2023-2027</h2>
    <p>
        Related courses freshman year: Object-Oriented Software Development, Introduction to Computer
        Systems Design, Introduction to Digital Systems, Introduction to Entrepreneurship, Calculus III
    </p>
    <h2>Lyceum 1535, Moscow, Russia (high school, 2020-2023)</h2>
    <p>
        General secondary education with IT concentration. Graduated with
        <strong>5.0/5.0 GPA and 2 gold medals for outstanding academic achievements</strong>
    </p>

    <h2>Online workshops from Yandex (Russian Google counterpart):</h2>
    <ul>
        <li>Python programming language basics, September 2020 - May 2021</li>
        <li>Industrial programming on Python, September 2021 - May 2023, graduated with honors</li>
        <li>Django, October 2022 - December 2022</li>
    </ul>
    `,

    `
    <h1>Work experience</h1>
    <p>
        I worked as a freelance full-stack developer for 3 years, starting with May 2020.
        At first, I used website builders like Tilda to create web pages, but then I started to focus more on coding
        the pages myself.
    </p>

    <h2>The hihlights of my work as a freelancer:</h2>
    <ul>
        <li>Develop personal web pages and websites for businesses, such as a jewelry store, a pharmacy, and a confectionery</li>
        <li>Build both front end and back end, utilizing HTML, CSS, and Python and advise customers on the design of web pages</li>
        <li>Volunteer as a web developer for nonprofits</li>
    </ul>

    <h2>Featured work:</h2>
    <p>
        Some of my recent works include these web pages:
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
    <h1>My featured projects</h1>
    
    <h2>HelpUnicorn</h2>
    <i>
        Founder, team leader, full-stack developer, iOS developer
        <br>
        Sep 2021 - May 2023
    </i>
    <ul>
        <li>Founded a network of welfare funds and IT specialists to offer free assistance to charities</li>
        <li>Implemented website’s authentication (including email confirmation and password reset), database, private chat, and API; co-authored iOS app; developed mini website builder for charities</li>
        <li>Motivated teammates, represented the site at conferences, enabled collaboration with foreign funds and developers</li>
        <li><strong>Saved $3000+ for charities and encouraged 1000+ users to join</strong></li>
    </ul>
    <div class="link" onclick="redirect('https://helpunicorn.pythonanywhere.com')">
        <h1>HelpUnicorn</h1>
        <p>https://helpunicorn.pythonanywhere.com</p>
    </div>

    <h2>AntiGPT</h2>
    <i>
        Founder, full-stack developer
        <br>
        Mar 2023 - May 2023
    </i>
    <ul>
        <li>Built a website identifying ChatGPT-written text in 50+ languages</li>
        <li>Employed OpenAI API; used JavaScript to get text from an input field or uploaded files and support multi-thread upload</li>
        <li>Currently discussing integration into the admissions process for Rose-Hulman Institute of Technology</li>
    </ul>

    <h2>Kitty Sneakers</h2>
    <i>
        Full-stack developer
        <br>
        Oct 2022 - Dec 2022
    </i>
    <ul>
        <li>Started a mock sneaker store page to provide all functionality an online store expects</li>
        <li>Used Django and Bootstrap to work with database, fixtures, admin page, authorization, posting and deleting products, star rating, product galleries, tags</li>
        <li>Utilized Git, worked with branches and Github issues and pull requests; employed environment variables, .env file, and .gitignore        </li>
        <li>Learned working with virtual environments</li>
    </ul>
    <div class="link" onclick="redirect('https://gitbub.com/aadev151/kitty-sneakers')">
        <h1>Kitty Sneakers</h1>
        <p>https://gitbub.com/aadev151/kitty-sneakers</p>
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
    <div class="link" onclick="redirect('https://gitbub.com/aadev151/duckystyle')">
        <h1>Duckystyle</h1>
        <p>https://gitbub.com/aadev151/duckystyle</p>
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
    <div class="link" onclick="redirect('https://gitbub.com/aadev151/squid-pygame')">
        <h1>Squid Pygame</h1>
        <p>https://gitbub.com/aadev151/squid-pygame</p>
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
    <div class="link" onclick="redirect('https://gitbub.com/aadev151/mp3-player')">
        <h1>MP3 Player</h1>
        <p>https://gitbub.com/aadev151/mp3-player</p>
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
        <p>https://aadev151.github.io/prevlink/r</p>
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
        <p>https://github.com/aadev151/ru-foodbot</p>
    </div>
    `,

    `
    <h1>Volunteering experience</h1>
    <p>
        I love devoting my life to working on something meaningful and strive to include as much service work
        and volunteering in my schedule as possible. Here are the highlights of my volunteering experience during the high school.
    </p>

    <h2>Regional Resource Center</h2>
    <i>Nov 2020 - Jul 2023 | Moscow, Russia; Ryazan Region, Russia</i>
    <p>
        Helped the community in different ways:
    </p>
    <ul>
        <li>Organized 10+ events for minorities, elderly people, disabled people, and veterans</li>
        <li>Delivered food and personal hygiene items for ill and disabled people</li>
        <li>Attended children's homes, played with and gave presents to orphans</li>
        <li>Organized Subbotniks (clean-up events) to clean parks and children's playgrounds off litter</li>
    </ul>

    <h2>Lyceum 1535r</h2>
    <i>Sep 2021 - May 2023 | Moscow, Russia</i>
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
                Overall, we issued 15+ papers. I contributed byy editing errors in publications, choosing
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
            <p><strong>ESCALATE: Engineering Student Community Actively Learning Advanced Technical Entrepreneurship</strong></p>
            <p>
                ESCALATE is a living-learning program that develops the entrepreneurial mindset in students.
                Topics studied include identifying market opportunities, developing creative and innovative solutions,
                and developing approaches to capture value in the marketplace.
            </p>
        </li>
        <li>
            <p><strong>Member of the Rose Squared program</strong></p>
            <p>
                Rose Squared is a combined Bachelor of Science and Master of Engineering Management program
                enabling highly motivated students to obtain both degrees in just four years.
            </p>
        </li>
    </ul>
    `,

    `
    <h1>Contact me</h1>
    <p>
        If you want to reach out to me, be that about my software engineering experience or funny panda videos, feel free
        to send me an email. My address is <a href="mailto:anisima@rose-hulman.edu">anisima@rose-hulman.edu</a>
    </p>
    <p>
        Here are some other ways to reach out to me:
    </p>
    <ul>
        <li><a href="https://wa.me/79032736345" target="_blank">WhatsApp</a></li>
        <li><a href="https://linkedin.com/in/aleksandr-anisimov" target="_blank">LinkedIn</a></li>
        <li><a href="https://snapchat.com/add/aadev151" target="_blank">Snapchat</a></li>
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