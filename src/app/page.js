"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [messageInput, setMessageInput]= useState('');

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'What would you like to know about Dinas skills and experiences?'
    }
  ]);

    const submitForm = async (e) => {
      e.preventDefault();
      let newMessages = [...messages, { role: 'user', content: messageInput }]
      setMessages(newMessages);
      setMessageInput('');
      const apiMessage = await fetch(
        '/api',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages: newMessages })
        }
      ).then(res => res.json());
      setMessages([...newMessages, { role: 'assistant', content: apiMessage.message }]);
  }

    const toggleMobileMenu = () => {
      setMenuOpen(!menuOpen);
    }

  return (
      <>
        <header>
      <a href="#" className="logo-holder">
        <div className="logo">D</div>
        <div class="logo-text">Portfolio Website</div>
      </a>
      <nav>
        <ul id="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="mailto:daalj@berkeley.edu" class="black button">Contact Me</a>
          </li>
        </ul>
        <a href="#" class="mobile-toggle" onClick={toggleMobileMenu}>
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
          </svg>
        </a>
      </nav>
    </header>
    <main>
      <section class="hero container">
        <div class="hero-orange">
          <div>
            <h1><small>Hi I&apos;m</small>
              Dina Al Jibori
            </h1>
            <p>
              I&apos;m a current student at UC Berkeley majoring in Computer Science! I have experience in Front End Devolpment, Machine Learning Models, Video Game Design, CyberSecurity and General Software Devolpment. I&apos;m anticipated to graduate in December 2025!
            </p>
            <div class="call-to-action">
              <a href="./nonumberres.pdf" class="button black">
                View Resume
              </a>
              <a href="mailto:daalj@berkeley.edu" class="button white">
                Contact Me
              </a>
            </div>
            <div class="social-links">
              <a href="https://github.com/daljib">
                <img src="./imgs/github.png" alt="GitHub" width="48" />
              </a>
              <a href="https://linkedin.com/in/dina-al-jibori-0a3a53210" >
                <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
              </a>
            </div>
          </div>
        </div>
        <div class="hero-purple">
          <img src="./imgs/moreme.PNG" alt="Pic of Me" width="100%" />
        </div>		  
      </section>
      <section class="logos container">
        <div class="marquee">
          <div class="track">
            <img src="./imgs/python.png" width="128" alt="Python" />
            <img src="./imgs/html.png" alt="HTML" width="128" />
            <img src="./imgs/css.png" alt="CSS" width="128" />
            <img src="./imgs/58480979cef1014c0b5e4901.png" alt="Java" width="95" />
            <img src="./imgs/c-logo.png" width="100" alt="C++" />
            <img src="./imgs/r-programming-language-icon.png" width="128" alt="R" />
            <img src="./imgs/pngegg.png" width="65" alt="scheme" />
            <img src="./imgs/ab55bdac79f664ef6abe5f58e8a8c023.png" width="128" alt="SQL" />
            <img src="./imgs/python.png" width="128" alt="Python" />
            <img src="./imgs/html.png" alt="HTML" width="128" />
            <img src="./imgs/css.png" alt="CSS" width="128" />
            <img src="./imgs/58480979cef1014c0b5e4901.png" alt="Java" width="95" />
            <img src="./imgs/c-logo.png" width="100" alt="C++" />
            <img src="./imgs/r-programming-language-icon.png" width="128" alt="R" />
            <img src="./imgs/pngegg.png" width="65" alt="scheme" />
            <img src="./imgs/ab55bdac79f664ef6abe5f58e8a8c023.png" width="128" alt="SQL" />
            <img src="./imgs/vscode.png" width="128" alt="VS Code" />
            
          </div>
        </div>
      </section>
      <section id="skills" class="skills container">
        <h2>
          <small>About Me</small>
          Skills
        </h2>
        <div class="holder-blue">
          <div class="left-column">
            <h3>Programming Languages</h3>
            <ul>
              <li>C++</li>
              <li>Python</li>
              <li>Java</li>
              <li>R</li>
              <li>Scheme</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>C</li>
            </ul>
            <h3>Technical</h3>
            <ul>
              <li>Data Structures</li>
              <li>UI/UX Design</li>
              <li>Video Game Design</li>
              <li>Machine Learning</li>
              <li>GIT</li>
              <li>Fullstack Devolpment</li>
            </ul>
          </div>
          <div class="right-column">
            <h3>Learn more about me!</h3>
            <p>
              Hi I&apos;m Dina Al Jibori, I&apos;m a current Computer Science student at UC Berkeley! I&apos;m currently looking for internships to further my experience in Software Devolpment. I&apos;m very interested in Fullstack Devolpment, Machine Learning and CyberSecurity.
            </p>
            <p>
              Over the summer, I have trained a Machine Learning Model using Python to predict the Winning team of a soccer game in the Premier League. I have also implemented an Azure AI chatbot that can answer any questions about my skills or professional experience for employers to use to learn more about me.

            </p>
            <p>
              I&apos;m currently working on devoloping both the Frontend and Backend for a website for Folsom Lake&apos;s College Women in CIS Group. In the coming Fall semester, I will also be tutoring Data Structures!
            </p>
          </div>
        </div>
      </section>
      <section class="work-experience container">
        <h2>
          <small>Recent</small>
          Work Experience
        </h2>
        <div class="jobs">
          <article>
            <figure>
              <div>
                <img src="./imgs/link-transparent-logo-4.png.webp" alt="Workplace 1 - Link Health" width="100%" />
                <figcaption>
                  Workplace - Link Health
                </figcaption>
              </div>
            </figure>
            <h3>Contract Assistant Front End Developer</h3>
            <div>September 2023 – January 2024</div>
            <p>I designed website layouts, collaborated on a welfare program signup project, and implemented responsive designs while communicating across teams.</p>
          </article>
          <article>
            <figure>
              <div>
                <img src="./imgs/0054_smud.jpg" alt="Workplace 2 - Sacramento Municipal Utility District" width="100%" />
                <figcaption>
                  Workplace - Sacramento Municipal Utility District
                </figcaption>
              </div>
            </figure>
            <h3>IT Business Relationship Management Intern</h3>
            <div>November 2022 – August 2023</div>
            <p>I improved communication between IT and business units, managed project scopes and timelines, gathered feedback, and enhanced processes using various tools. </p>
          </article>
          <article>
            <figure>
              <div>
                <img src="./imgs/FBF73155-5CB0-4520-8354-15F6D1BE335B.JPEG" alt="Workplace 3 - Design Hub - American River College" width="100%" />
                <figcaption>
                  Workplace - Design Hub - American River College
                </figcaption>
              </div>
            </figure>
            <h3>Programming Assistant</h3>
            <div>August 2021 – April 2022</div>
            <p>I collaborated with industry partners, designed UI components, developed an educational video game, and contributed to team projects.</p>
          </article>
                  <article>
            <figure>
              <div>
                <img src="./imgs/3494E383-F65E-488D-BB5A-10889E013DC3.JPEG" alt="Workplace 3 - Design Hub - American River College" width="100%" />
                <figcaption>
                  Workplace - Dream Enrichment Classes
                </figcaption>
              </div>
            </figure>
            <h3>Code and Chess Instructor</h3>
            <div>July 2021 – January 2022</div>
            <p>I collaborated with industry partners, designed UI components, developed an educational video game, and contributed to team projects.</p>
          </article>
          
        </div>
      </section>
      <section id="projects" class="bento container">
        <h2>
          <small>
            Previous
          </small>
          Completed Projects
        </h2>
        <div class="bento-grid">
          <a href="https://github.com/daljib/Premier-League-Predictor" class="bento-item">
            <img src="./imgs/87fefa9e5a05f4e3b07c88f2fe805fcc.jpeg" alt="BGCCI" width="100%" />
          </a>
          <a href="https://github.com/daljib/California-Women-s-Group-WebSite" class="flc women">
            <img src="./imgs/tempwomenlogo.png" alt="Churhview" width="100%" />
          </a>
          <a href="https://github.com/daljib/Personal-Portfolio" class="bento-item">
            <img src="./imgs/chatbot.png" alt="Harley" width="100%" />
          </a>
          <a href="https://github.com/daljib/Data-Structures-and-Algorithims-" class="bento-item">
            <img src="./imgs/2048_logo.svg.png" alt="Bunbury" width="100%" />
          </a>
          <a href="https://github.com/daljib/Data-Structures-and-Algorithims-/tree/main" class="bento-item">
            <img src="./imgs/C4BA9343-16E0-4151-A804-F3DED86CB30C.JPEG" alt="Running" width="100%" />
          </a>
          <a href="https://www.accis-sac.org/test-photo-gallery" class="bento-item">
            <img src="./imgs/Screenshot 2024-06-06 at 9.07.13 PM.png" alt="School" width="100%" />
          </a>
        </div>
      </section>
      <section class="chatbot container">
        <h2>
          <small>
            Personalized
          </small>
          Chatbot
        </h2>
        <div class="chatbot-blue">
          <div class="chat-info">
            <h3>Azure AI Chatbot</h3>
            <p>I&apos;ve implemented a chatbot using Microsoft Azure&apos;s OpenAI technologies which knows all my skills, work experience and has a copy of my Resume. You can use it to ask questions about me to get a better idea of who I am and what I&apos;ve done.</p>
            <p>You can also download my resume here if you want to take a look at it.  I&apos;m currently looking for new opportunities so if you have a project or internship you think I&apos;d be a good fit for, please get in touch!</p>
            <a href="./nonumberres.pdf" class="button black">Download Resume</a>
          </div>
          <div class="chat-box">
            <div class="scroll-area">
              <ul id="chat-log">
              {messages.map((message, index) => (
                    <li key={index} className={`${message.role}`}>
                      <span className={`avatar`}>{message.role === 'user' ? 'You' : 'AI'}</span>
                      <div className="message">{message.content}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <form onSubmit={submitForm} className="chat-message">
                <input type="text" placeholder="Hey Dina, what skills are you best at?" value={messageInput} onChange={e => setMessageInput(e.target.value)} />
                <button className="button black">Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
